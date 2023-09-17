import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = { id: 1, name: "J Smith", email: "hi@robfraser.dev", password: "password" };
                if (credentials?.username === user.email && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),

    ],

    // customise auth pages
    // pages: {
    //     signIn: "/auth/signin",
    //     signOut: "/auth/signout",
    // },
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
};
