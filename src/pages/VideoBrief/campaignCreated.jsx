import React, { useEffect, useState } from "react";
import axios from "axios";

//elements
import TopNavbar from "../../components/Nav/TopNavbar";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const CampaignCreated = () => {
  // console.log(videoDetails);

  return (
    <>
      <TopNavbar />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h1 className="capitalize text-4xl font-semibold">
          congrats🥳, Your Campaign is Live now!
        </h1>
        <h6 className="capitalize mt-1">
          Head over to campaign activity to hire content creator
        </h6>

        <div className="mt-8">
          <PrimaryBtn text="go to campaign activity" to="campaign-activity" />
        </div>
      </div>
    </>
  );
};

export default CampaignCreated;
