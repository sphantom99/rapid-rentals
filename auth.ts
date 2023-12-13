import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import clientPromise from "./lib/dbConnect";
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
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  events: {
    createUser: async ({ user }) => {
      const client = await clientPromise;
      try {
        await client.connect();

        const db = await client.db("RapidRentals");
        const users = await db.collection("users");
        const res = await users.updateOne(
          { email: user.email },
          { $set: { isAdmin: false } }
        );
      } catch (e) {
        console.error(e);
      }
    },
  },
  trustHost: true,
});
