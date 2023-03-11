"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
