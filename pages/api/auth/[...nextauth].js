import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { getToken } from "next-auth/jwt"



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  }),
  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  jwt: {
  // A secret to use for key generation. Defaults to the top-level `secret`.
 secret: process.env.JWT_SECRET,
  // The maximum age of the NextAuth.js issued JWT in seconds.
  // Defaults to `session.maxAge`.
  maxAge: 60 * 60 * 24 * 30,
  // You can define your own encode/decode functions for signing and encryption
  // if you want to override the default behavior.
  async encode({ secret, token, maxAge }) {},
  async decode({ secret, token }) {},
}

}
export default NextAuth(authOptions)
