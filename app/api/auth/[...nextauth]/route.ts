import { prisma } from "@/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phonenumber: {
          label: "Phone Number",
          type: "number",
          placeholder: "Enter Phone Number",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirstOrThrow({
          where: { phone_number: credentials?.phonenumber },
        });

        if (!user) throw new Error("User with phone number doesn't exist");

        const validPassword = await bcrypt.compare(
          credentials?.password || "",
          user?.password as string
        );

        return validPassword ? user : null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        const { password, ...rest } = user as any;
        token.user = rest;
      }
      return token;
    },
    async session({ session, token, user }) {
      const _session = token.user
        ? { ...session, user: token.user }
        : undefined;
      return _session as Session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
