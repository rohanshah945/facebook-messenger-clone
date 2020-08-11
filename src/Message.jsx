import React from "react";
import "./Message.css";
import { forwardRef } from "react";
import moment from "moment";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <div className="message__userName">
        <span> {!isUser && `${message.username || "Unknown User"}`} </span>
      </div>

      <div
        className={`message__card ${
          isUser ? "message__userCard" : "message__guestCard"
        }`}
      >
        <div
          className={`message__cardText ${isUser && "message__userCardText"}`}
        >
          <p>{message.text}</p>
        </div>
      </div>
      <div className="message__timestamp">
        <span>
          {String(moment(message.timestamp?.toDate()).format("MMM DD, LT"))}
        </span>
      </div>
    </div>
  );
});

export default Message;
