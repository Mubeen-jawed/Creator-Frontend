import React from "react";
import "react-chat-elements/dist/main.css";
import { ChatList } from "react-chat-elements";

const AllMessages = () => {
  const googleId = JSON.parse(localStorage.getItem("creatorChatId"));

  return (
    <div className="bg-white h-screen w-1/4 shadow-2xl fixed">
      <ChatList
        className="chat-list"
        dataSource={[
          {
            avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
            alt: "kursat_avatar",
            title: "Kursat",
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
        ]}
      />
    </div>
  );
};

export default AllMessages;
