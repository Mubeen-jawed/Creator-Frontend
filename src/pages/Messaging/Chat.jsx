import React, { useState, useEffect } from "react";
import "react-chat-elements/dist/main.css";
import { MessageList, Button } from "react-chat-elements";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/");

const Chat = () => {
  // const [userMessage, setUserMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [sendMessage, setSendMessage] = useState("");
  const [googleId, setGoogleId] = useState("");

  if (googleId !== "") {
    socket.emit("join_room", { room: googleId });
  }

  function handleSendMessage() {
    socket.emit("send_message", { message: inputValue, room: googleId });
  }

  useEffect(() => {
    socket.on("recieve_message", (data) => setSendMessage(data));
  }, [socket]);

  useEffect(() => {
    const googleId = JSON.parse(localStorage.getItem("creatorChatId"));
    setGoogleId(googleId);
  }, []);

  console.log(googleId);

  return (
    <div className="bg-gray-100 h-screen w-full ml-[25%] p-2">
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={[
          {
            position: "left",
            type: "text",
            title: "Kursat",
            text: sendMessage,
          },
          {
            position: "right",
            type: "text",
            title: "Emre",
            text: "That's all.",
          },
        ]}
      />

      <div className="fixed bottom-0 ml-[25%] h-16 p-2 left-0 w-3/4 flex justify-center bg-gray-300">
        <input
          className="w-3/4 rounded-full bg-white p-3 shadow-2xl mr-2 outline-none"
          type="text"
          placeholder="Type a Message"
          spellCheck="false"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className=""
          text={"Send"}
          title="Send"
          backgroundColor="#580cd2"
          onClick={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
