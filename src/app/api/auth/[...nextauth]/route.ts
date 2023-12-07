import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import prisma from '@/lib/prismadb';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email: ",
                    type: "text",
                },
                password: {
                    label: "Password: ",
                    type: "password"
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (user) {
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password) 
                    if (isPasswordCorrect) {
                        return user;
                    } else {
                        throw new Error("Wrong Credentials")
                    }
                } else {
                    throw new Error("User not found!")
                }
                
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        error: '/',
        signIn: '/'
    },
    session: {
        strategy: 'jwt'
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }