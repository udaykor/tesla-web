## About


## To-Do
1. Authentication with Auth0 + Auth.JS (Optionally).
2. Deployment ready template with Vercel.
3. Postgres for data-storage.
4. Logging utility.
5. Tesla Auth callback with-in browser (ETA: Nov 2023).
6. Error handling.
7. Tests with jest.
8. Dockerfile (ETA: Aug 25, 2023).


## Tech stack
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## Tesla Auth page & Access Token

https://auth.tesla.com/oauth2/v3/authorize?response_type=code&client_id=ownerapi&state=<RANDOM2>&code_challenge=<RANDDOM2>&code_challenge_method=S256&redirect_uri=https://auth.tesla.com/void/callback&scope=openid+email+offline_access


## Example
https://auth.tesla.com/oauth2/v3/authorize?response_type=code&client_id=ownerapi&state=pf4_osf0gpSBmVBCeg8VnQ&code_challenge=55WFKGyVLNQuuFnB91xFqeeNqLe4Bmn_MMuJNDdIG6A&code_challenge_method=S256&redirect_uri=https://auth.tesla.com/void/callback&scope=openid+email+offline_access