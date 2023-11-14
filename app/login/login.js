import nextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/Google"

export default NextAuth ({
    provider : [
        GoogleProvider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
        })
    ]
}
)