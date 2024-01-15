// ID 442677340724-pgkan7pij1d0fhcgk9ehtqj7t6dm2jku.apps.googleusercontent.com
// Secret  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
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth"
//import { PrismaAdapter } from "@auth/prisma-adapter"
import bcrypt from 'bcrypt';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import  prisma  from "@/prisma/client";

//NextAuth({});
export const authOptions : NextAuthOptions ={
    adapter : PrismaAdapter(prisma),
    providers:[
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    email: { label: "Email", type: "email", placeholder: "Email" },
                    password: { label: "Password", type: "password", placeholder:"password" }
                  },

          
            async authorize(credentials,req){
                if(!credentials?.email || !credentials.password)
                return null;
            const user = await prisma.user.findUnique({
                where: {email:credentials.email
                }
            });
            if (!user) return null;

            //Comparacion del password

            const passwordMatch = await bcrypt.compare (credentials.password, user.hashedPassword!)

            return passwordMatch ? user :  null ;

            }

        }), 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!
     })
   ],
   session:{
     strategy: 'jwt',
   }
       
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


