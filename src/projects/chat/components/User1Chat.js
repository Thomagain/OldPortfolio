import React from "react";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";

function User1Chat({ setMessage, onSentMessage, chats }) {
  const user = {
    id: 1,
    name: "Lj",
  };
  return (
    <div className="w-64 px-1 border">
      <h1>User 1</h1>
      {/* MESSAGES */}
      <div>
        {chats &&
          chats.map((chat) => {
            return chat.user.id === 1 ? (
              <ChatRight chat={chat} />
            ) : (
              <ChatLeft chat={chat} />
            );
          })}
      </div>

      <div className="flex">
        <textarea
          className="border"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => onSentMessage(user)}>Send</button>
      </div>
    </div>
  );
}

export default User1Chat;
