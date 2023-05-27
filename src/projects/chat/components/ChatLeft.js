import React from "react";

const ChatLeft = ({ chat }) => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
        {chat.user.id}
      </div>
      <div className="px-2 py-1 bg-green-500 rounded-md">{chat.message}</div>
    </div>
  );
};

export default ChatLeft;
