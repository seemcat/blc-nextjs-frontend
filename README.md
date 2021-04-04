💁🏻‍♀️ The custom events page for Blockchain Ladies Club!

This is a Next.js app that integrates with Strapi, a headless CMS, to author data and create their corresponding APIs. These APIs are accessible by each user via a Magic plugin, which performs a passwordless authentication when the user signs up or logs in.

Enjoy 🎉

# Demo
https://nextjs-frontend.herokuapp.com/

## Getting Started
1. `gh repo clone seemcat/blc-nextjs-frontend`
2. `mv .env.example .env`
3. Create a [**Magic Account**](https://dashboard.magic.link) and grab your Test Publishable Key and Secret Key. Give these values to `NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY` and `MAGIC_SECRET_KEY` in `.env` 
4. `yarn install`
5. `yarn dev`