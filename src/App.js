import React, { useState, useEffect, useRef } from "react";
import { FormControl, Input } from "@material-ui/core";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import "./App.css";
import db from "./firebase";
import Message from "./Message";
import Header from "./Header";

function App() {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setUsername(prompt("Please Enter Your Name") || "Unknown User");
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    input &&
      db.collection("messages").add({
        username: username,
        text: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <Header username={username} />
      <div className="app__formArea">
        <form className="app__form">
          <FormControl className="app__formControl">
            <Input
              disableUnderline
              className="app__formInput"
              placeholder="Type a message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <IconButton
              variant="contained"
              className="app__formIconButton"
              color="primary"
              type="submit"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>
      </div>

      <FlipMove className="app__chatArea">
        {console.log(messages)}
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default App;
