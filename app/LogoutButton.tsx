"use client";

const LogoutButton = () => {
  return (
    <button
      onClick={() => console.log("eee")}
      className="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
