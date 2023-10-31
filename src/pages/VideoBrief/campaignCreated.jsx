import React from "react";
import axios from "axios";

//elements
import TopNavbar from "../../components/Nav/TopNavbar";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const campaignCreated = () => {
  const videoDetails = JSON.parse(localStorage.getItem("videoDetails"));
  const videoBrief = JSON.parse(localStorage.getItem("videoBrief"));

  console.log(videoDetails);

  axios
    .post("http://localhost:8080/campaignData", {
      videoDetails: videoDetails,
      videoBrief: videoBrief,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  // axios
  //   .post("http://localhost:8080/campaignData", {  })
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));

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

export default campaignCreated;
