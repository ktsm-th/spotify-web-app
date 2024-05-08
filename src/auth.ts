import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Spotify({
      clientId: process.env.AUTH_SPOTIFY_ID,
      clientSecret: process.env.AUTH_SPOTIFY_SECRET,
       authorization: "https://accounts.spotify.com/authorize?scope=user-read-private,user-read-email,user-top-read,user-follow-read,user-follow-modify"
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account && account.provider === "spotify") {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  }
})
