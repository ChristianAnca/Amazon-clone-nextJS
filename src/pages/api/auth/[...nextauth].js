import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
]
})

// import GoogleProvider from "next-auth/providers/google";

// providers: [
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   })
// ]


// import GoogleProvider from "next-auth/providers/google";
// ...
// providers: [
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET
//   })
// ]
// ...

// export default providers