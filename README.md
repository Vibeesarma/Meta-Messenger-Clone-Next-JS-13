# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).



## Next JS 
- Loading page is automatically added for server side renders 


## Redis 
Please Keep in mind 
- When setup redis url don't forgot to put 'rediss' in env
- for get this we use upstash ,it will provide this serverless redis 

## SWR

* 
  const { data, error, mutate } = useSWR("/api/getMessages", fetcher);

  - 
 in here what value you put on first argument it does not a meter it just a key to get that message data from cache you can put any instead of 'api/getMessages'

* 
await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });

-  this is a function for get from cache file in swr you add function what will same as optimistic data then only you can get data from cache


## Pusher

* this is server side for push message to client side

- in server side you want install 'npm i pusher'

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET_KEY!,
  cluster: "ap2",
  useTLS: true,
});

* this is a client side subscription for get message from others much quick
- in here you want to install 'npm i pusher-js'

export const clientPusher = new ClientPusher( 'client key', {
  cluster: "ap2",
  forceTLS: true,
});

- in the above case you want another one more dependency 'npm i encoding'


## Next-Auth 
* you want to install next auth ,then add facebook app secret id and key to get access from meta
  - each time you tried session from next auth it give you the user profile data for you
### middle ware 
- next auth have middle ware that help to prevent other route without login to access

export { default } from "next-auth/middleware";
export const config = { matcher: ["/"] };

- it's default file in root directory you just create a middleware.ts file and paste this code it will automatically work in Next js 



## React-Timergo

- npm react-timeago use instead of Date (if type is required add this file yarn add -D @types/react-timeago)
- this component help you to show like 4 sec ago ,5 hours ago like things default 

