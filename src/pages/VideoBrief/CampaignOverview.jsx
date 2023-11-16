import React, { useEffect } from "react";
import axios from "axios";

//Elements
import TopNavbar from "../../components/Nav/TopNavbar";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const CampaignOverview = () => {
  const videoDetails = JSON.parse(localStorage.getItem("videoDetails"));
  const videoBrief = JSON.parse(localStorage.getItem("videoBrief"));
  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const {
    videoDuration: { videoDuration },
    videoType: { title, price },
    numOfVideos,
    additionalNotes,
  } = videoDetails;

  function sendDataToBackend() {
    axios
      .post("http://localhost:8080/campaignData", {
        videoDetails: videoDetails,
        videoBrief: videoBrief,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="bg-gray-100">
      <TopNavbar />

      <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-3xl">
              {videoDuration} {title}
            </h1>
            <h5>Budget: ${totalPrice}</h5>
            {/* <h4>Video Duration: {videoDuration}</h4> */}
            <h3>{numOfVideos} Video</h3>
            <p>{additionalNotes.length > 0 && additionalNotes}</p>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <PrimaryBtn
            text="create your campaign"
            to="campaign-created"
            click={sendDataToBackend}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignOverview;
