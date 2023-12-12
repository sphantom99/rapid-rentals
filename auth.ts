import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import clientPromise from "./lib/dbConnect";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
export const { handlers, auth } = NextAuth({
  // @ts-ignore
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "RapidRentals",
  }),
  providers: [Google, Github],

  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.isAdmin = user.isAdmin;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  events: {
    createUser: async ({ user }) => {
      const client = new MongoClient(process.env.MONGO_URI ?? "");
      try {
        await client.connect();

        const db = await client.db("RapidRentals");
        const users = db.collection("users");
        const res = users.updateOne(
          { email: user.email },
          { $set: { isAdmin: false } }
        );
      } catch (e) {
        console.error(e);
      } finally {
        client.close();
      }
    },
  },
});
