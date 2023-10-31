import React from "react";
import axios from "axios";

//elements
import TopNavbar from "../../components/Nav/TopNavbar";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const campaignCreated = () => {
  return (
    <>
      <TopNavbar />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="capitalize text-4xl font-semibold">
          congrats🥳, Your Proposal Has Been Sent!
        </h1>
        {/* <h6 className="capitalize mt-1">
          Head over to campaign activity to hire content creator
        </h6> */}

        <div className="mt-8">
          <PrimaryBtn text="Return to Jobs" to="marketplace" />
        </div>
      </div>
    </>
  );
};

export default campaignCreated;
