import React from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import AllMessages from "./AllMessages";
import Chat from "./Chat";

const Messaging = () => {
  return (
    <div className="">
      <TopNavbar />

      <div className="flex mt-20 h-screen">
        <AllMessages />
        <Chat />
      </div>
    </div>
  );
};

export default Messaging;
