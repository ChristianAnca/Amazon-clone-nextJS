import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
providers: [
  GoogleProvider({
    clientId: '193022409846-ac6h1jb6m95afejhl9ob6bl313mh7qjm.apps.googleusercontent.com',
    clientSecret: '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',
    // params: {
    //   prompt: "consent",
    //   access_type: "offline",
    //   response_type: "code"
    // }
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