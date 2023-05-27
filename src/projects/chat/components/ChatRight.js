import React from "react";
import moment from "moment";
const ChatRight = ({ chat }) => {
  console.log(chat);
  return (
    <div>
      <div className="flex justify-end">
        <div className="px-2 py-1 bg-green-500 rounded-md">{chat.message}</div>
        <div></div>
      </div>
      <div>{moment(chat.sent).fromNow()}</div>
    </div>
  );
};

export default ChatRight;
