import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id: string;
      isAdmin: boolean;
    };
  }
  interface User extends DefaultUser {
    isAdmin: boolean;
  }
}
