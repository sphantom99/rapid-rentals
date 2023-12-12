import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/dbConnect";
import { MongoClient } from "mongodb";
export const { handlers, auth } = NextAuth({
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
