## About

This app was created to test tainted data-flows within NextJS and observe within Snyk. The purpose of this app is for Education & Research related to NextJs+Snyk with something with real-world consequences.

## Production

Please do not use this for any production deployments or for attempting to test on a Tesla vehicle including your own. There are severe bugs here.

- API command to open/close trunk can only open the trunk.
- Correct usage vehicle tokens are not implemented. Do not expect trunk to close or any command to work reliably.
- APIs are currently designed to take a `vehicleID`. This is a unique ID that does not change. If you are doing a demo publicly, this will reveal sensitive data.

## Beware of 
- App router API routes are unauthenticated. This is pending on 
- Code that fails when Access token is invalid or not set.
- Privacy issues - The author (Me) holds no responsibility for either maintaining this repo or fixing.
- Code in the `lib` library is written to call Tesla motor API. Tesla maintains good hygeine in general with their WAF. Use it for research & education when it is for your personal use on your own car only.

## To-Do
1. Authentication with Auth0 + Auth.JS (Optionally).
2. Deployment ready template with Vercel.
3. Postgres for data-storage.
4. Logging utility.
5. Tesla Auth callback with-in browser (ETA: Nov 2023).
6. Error handling.
7. Tests with jest.
8. Dockerfile (ETA: Aug 29, 2023).
9. Make use of Tesla vehicle tokens.


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


## Access Tokens 

**BEWARE** As the author of this code and owner of a Tesla car, I am accessing Tesla motors API to understand data that can be surfaced from my vehicle. I consent to my own vehicle and I will not be doing anything here that is against Tesla's Terms. Either way, the intent of this Application is to purely observe tainted flow analysis in a NextJS application.

Futher, I have introduced vulnerable library. The intent and focus will remain purely on 

### Tesla Auth page & Access Token

https://auth.tesla.com/oauth2/v3/authorize?response_type=code&client_id=ownerapi&state=<RANDOM2>&code_challenge=<RANDDOM2>&code_challenge_method=S256&redirect_uri=https://auth.tesla.com/void/callback&scope=openid+email+offline_access


### Example
https://auth.tesla.com/oauth2/v3/authorize?response_type=code&client_id=ownerapi&state=pf4_osf0gpSBmVBCeg8VnQ&code_challenge=55WFKGyVLNQuuFnB91xFqeeNqLe4Bmn_MMuJNDdIG6A&code_challenge_method=S256&redirect_uri=https://auth.tesla.com/void/callback&scope=openid+email+offline_access


## Author's note

If you are tinkering aroung with your Tesla, This is not the repo you would find anything valuable.