"use client";

import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import useSWR from "swr";

import { Message } from "../typings";
import fetcher from "../utils/fetchMessages";
import { getServerSession } from "next-auth";

type Props = {
  session: Awaited<ReturnType<typeof getServerSession>>;
};

const ChatInput = ({ session }: Props) => {
  const [input, setInput] = useState("");

  // in here what value you put on first argument it does not a meter it just a key to get that message data from cache
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input || !session) return;
    const messageToSend = input;
    setInput("");

    // this is generate id for you uuid
    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: session?.user?.name!,
      profilePic: session?.user?.image!,
      email: session?.user?.email!,
    };

    const uploadMessageToUpstash = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      return [data.message, ...messages!];
    };

    // this is a function for get from cache file in swr you add function what will same as optimistic data then only you can get data from cache
    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex space-x-2 py-5 px-10 border-t border-gray-100 bg-white"
    >
      <input
        value={input}
        disabled={!session}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:cursor-not-allowed"
      />
      <button
        disabled={!input}
        type="submit"
        className="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
