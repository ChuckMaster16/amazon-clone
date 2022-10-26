
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
      domains:[
        "res.cloudinary.com",
        "fakestoreapi.com",
      ],
     },
     env:{
       stripe_public_key: process.env.STRIPE_PUBLIC_KEY
     }
   };

module.exports = nextConfig
