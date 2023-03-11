# Meta Messenger Clone in  Next.js 13
 
* Loading page is automatically added for server side renders
In here used the [Next.js 13](https://nextjs.org/blog/next-13)  some of the features,
    - Server component
    - client component 
    - page component
    - layout 
    - header component 
    - also used the default header meta field

## Redis 
Please Keep in mind, 
- When setup Redis url don't forgot to put ```'rediss'``` in env
- To get this we use [upstash](https://upstash.com/), which will provide this serverless Redis 

## SWR

* [SWR](https://swr.vercel.app/) is help you get data first from cache then send the fetch request and come with up to date data.
* In here what value you put on the first argument it does not a meter it just a key to get that message data from the cache you can put any instead of ```'api/getMessages'```

```typescript
const { data, error, mutate } = useSWR("/api/getMessages", fetcher);
```
  
* This is a function for getting from cache file in SWR you add a function that will same as optimistic data then only you can get data from a cache

```typescript
await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
```


## Pusher
* [Pusher](https://pusher.com/) is help to pushing messages from server side to client-side
On the server side you want to install ```npm i pusher ```

```typescript
export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET_KEY!,
  cluster: "ap2",
  useTLS: true,
});
```


* this is a client-side subscription for getting message from others much quickly
- here you want to install ```npm i pusher-js```

```typescript
export const clientPusher = new ClientPusher( 'client key', {
  cluster: "ap2",
  forceTLS: true,
});
```

- in the above case, you want another one more dependency ```npm i encoding```


## Next-Auth 
* you want to install the [nextAuth](https://next-auth.js.org/), then add Facebook app secret id and key to getting access from meta
  - each time you tried a session from the next auth it gives you the user profile data for you

### middleware 

- next auth has middleware that helps to prevent another route without login to access

```typescript
export { default } from "next-auth/middleware";
export const config = { matcher: ["/"] };
```

-it's the default file in the root directory you just create a middleware.ts file and paste this code it will automatically work in Next js 



## React-Timergo

- react-timeago use instead of Date showing near the chatbox (if the type is required add this file ```yarn add -D @types/react-timeago)```
- this component helps you to show like 4 sec ago,5 hours ago as things default 

