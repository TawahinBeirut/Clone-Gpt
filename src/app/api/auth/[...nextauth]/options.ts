import GoogleProvider from "next-auth/providers/google"
import  CredentialsProvider from "next-auth/providers/credentials"
import {NextAuthOptions} from "next-auth"

const getCredentialsGoogle = () => {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length === 0 ) throw new Error("Pas de Client Id")
    if (!clientSecret || clientSecret.length === 0) throw new Error("Pas de SecreteClient Google")

    return {clientId,clientSecret}
}

const options: NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: getCredentialsGoogle().clientId,
            clientSecret: getCredentialsGoogle().clientSecret
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