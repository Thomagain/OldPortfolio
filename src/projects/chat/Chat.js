import React, { useState } from "react";
import User1Chat from "./components/User1Chat";
import User2Chat from "./components/User2Chat";
import moment from "moment";
function Chat() {
  const user = {
    id: 1,
    name: "Lj",
  };
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const onSentMessage = (user) => {
    if (chats) {
      setChats([
        ...chats,
        {
          message,
          user: user,
          sent: Date.now(),
        },
      ]);
    } else {
      setChats([
        {
          message,
          user: user,
          sent: Date.now(),
        },
      ]);
    }
  };

  return (
    <div className="flex">
      {/* <User1Chat
        onSentMessage={onSentMessage}
        setMessage={setMessage}
        chats={chats}
      /> */}
      <div className="w-64 px-1 border">
        <h1>User 1</h1>
        {/* MESSAGES */}
        <div>
          {chats &&
            chats.map((chat) => {
              return chat.user.id === 1 ? (
                <div>
                  <div className="flex justify-end">
                    <div className="px-2 py-1 bg-green-500 rounded-md">
                      {chat.message}
                    </div>
                    <div></div>
                  </div>
                  <div>{moment(chat.sent).fromNow()}</div>
                </div>
              ) : (
                <div className="flex justify-start">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full">
                    {chat.user.id}
                  </div>
                  <div className="px-2 py-1 bg-green-500 rounded-md">
                    {chat.message}
                  </div>
                </div>
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
      <User2Chat
        onSentMessage={onSentMessage}
        setMessage={setMessage}
        chats={chats}
      />
    </div>
  );
}

export default Chat;
