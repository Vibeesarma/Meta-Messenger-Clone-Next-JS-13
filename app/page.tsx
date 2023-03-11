import MesssageList from "./MesssageList";
import ChatInput from "./ChatInput";
import { Message } from "../typings";
import {} from "next-auth/react";
import { getServerSession } from "next-auth";
import Providers from "./Providers";

const HomePage = async () => {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;

  const session = await getServerSession();

  return (
    <Providers session={session}>
      <main>
        {/* Message List  */}
        <MesssageList initialMessages={messages} />
        {/* Chat Component */}
        <ChatInput session={session} />
      </main>
    </Providers>
  );
};

export default HomePage;
