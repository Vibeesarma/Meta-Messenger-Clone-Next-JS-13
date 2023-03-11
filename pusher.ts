import Pusher from "pusher";
import ClientPusher from "pusher-js";

// this is server side for push message to client side
export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET_KEY!,
  cluster: "ap2",
  useTLS: true,
});

// this is a client side subscription for get message from others much quick
export const clientPusher = new ClientPusher( '8bd794c7204ca65b7b64', {
  cluster: "ap2",
  forceTLS: true,
});
