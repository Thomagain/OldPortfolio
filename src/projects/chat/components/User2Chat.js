import React from "react";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";

function User2Chat({ setMessage, onSentMessage, chats }) {
  const user = {
    id: 2,
    name: "George",
  };
  return (
    <div className="w-64 px-1 border">
      <h1>User 2</h1>
      {/* MESSAGES */}
      <div>
        {chats &&
          chats.map((chat) => {
            return chat.user.id === 2 ? (
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

export default User2Chat;
