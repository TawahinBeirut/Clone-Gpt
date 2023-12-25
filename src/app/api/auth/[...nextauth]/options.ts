import GoogleProvider from "next-auth/providers/google"
import  CredentialsProvider from "next-auth/providers/credentials"
import {AuthOptions, NextAuthOptions} from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient();

const getCredentialsGoogle = () => {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length === 0 ) throw new Error("Pas de Client Id")
    if (!clientSecret || clientSecret.length === 0) throw new Error("Pas de SecreteClient Google")

    return {clientId,clientSecret}
}

const options: NextAuthOptions= {
    adapter: PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId: getCredentialsGoogle().clientId,
            clientSecret: getCredentialsGoogle().clientSecret
        }),
        CredentialsProvider({
        name : "credentials",
        credentials: {
            username: {label: "Username",type: "text",placeholder: "jsmith"},
            password : {label: "Username",type: "password"},
            email : {label: "Email",type:"email"}
        },
        async authorize(credentials) {
            // On verifie ici si le mdp/ email est valide
            if (!credentials?.email || credentials.username){
                return null;
            }

            const user = await prisma.user.findUnique({
                where:{
                    email: credentials.email
                }
            })

            if (!user){
                return null;
            }

            const passwordMatch = (user.hashedPassword) ? await bcrypt.compare(credentials.password,user.hashedPassword) : null;

            if (!passwordMatch){
                return null
            }

            return user;
        },
        })
    ],
    session:{
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token,user,session}){
            console.log("jwt callback",{token,user,session})
            return token;
        },
        async session({token,user,session}){
            console.log("session callback",{token,user,session})
            return session;
        }
    }
}

export default options;