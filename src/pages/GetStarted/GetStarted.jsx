import React, { useState } from "react";
import VideoType from "./VideoTypeBox";
import VideoDuration from "./VideoDurationBox";
import TopNavbar from "../../components/Nav/TopNavbar";
import BottomBar from "./BottonBar";
import ProgressBar from "../../components/Elements/ProgressBar";

//icons
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function GetStarted() {
  //States

  const [videoTypeOption, setVideoTypeOption] = useState({
    title: "Video Ad",
    price: "$99",
  });
  const [videoDurationOption, setVideoDurationOption] = useState({
    videoDuration: "15 sec",
    price: "0",
  });
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [videoCounter, setVideoCounter] = useState(1);

  const videoDetails = {};

  //Functions

  // function handleNextStep(click) {
  //   if (click) {
  //   }
  // }

  function videoTypeData(data) {
    setVideoTypeOption(data);
  }

  function videoDurationData(data) {
    setVideoDurationOption(data);
    // console.log(videoDurationOption);
  }

  //LocalStorage

  // let videoType = JSON.parse(localStorage.getItem("videoTypeOption"));
  // let videoDuration = JSON.parse(localStorage.getItem("videoDuration"));

  videoDetails.videoType = videoTypeOption;
  videoDetails.videoDuration = videoDurationOption;
  videoDetails.numOfVideos = videoCounter;
  videoDetails.additionalNotes = additionalNotes;

  localStorage.setItem("videoDetails", JSON.stringify(videoDetails));

  return (
    <div className="bg-gray-100">
      <TopNavbar />
      <div className=" max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
        <div className="flex items-center">
          <ProgressBar text="Video Details" active={true} />
          <ProgressBar text="Payment" />
          <ProgressBar text="Video Brief" />
        </div>

        <div className="mt-20 w-full p-5 bg-white border border-gray-300 border-solid rounded-lg">
          <div className="">
            <h2 className="text-base font-semibold mb-1 ml-2">Video Type</h2>
            <form className="flex justify-evenly">
              <VideoType
                name="video-type"
                title="Video Ad"
                price="$99"
                option={videoTypeData}
              />
              <VideoType
                name="video-type"
                title="tiktok / short / reel"
                price="$190"
                option={videoTypeData}
              />
              <VideoType
                name="video-type"
                title="Product showcase"
                price="$90"
                option={videoTypeData}
              />
              <VideoType
                name="video-type"
                title="honest review"
                price="$49"
                option={videoTypeData}
              />
            </form>
          </div>

          <div className="mt-20">
            <h2 className="text-base font-semibold mb-1 ml-2">
              Video Duration
            </h2>
            <form className="flex justify-evenly">
              <VideoDuration
                name="video-duration"
                title="15 sec."
                price="Included"
                option={videoDurationData}
              />
              <VideoDuration
                option={videoDurationData}
                videoDurationData
                name="video-duration"
                title="30 sec."
                price="+$30"
              />
              <VideoDuration
                option={videoDurationData}
                name="video-duration"
                title="60 sec."
                price="+$45"
              />
            </form>
          </div>

          <div>
            <h2 className="capitalize text-base font-semibold mb-4 mt-20">
              number of videos
            </h2>

            <div className="flex items-center">
              <button
                onClick={() => {
                  setVideoCounter((prev) => {
                    if (prev > 1) {
                      return prev - 1;
                    } else {
                      return 1;
                    }
                  });
                }}
                className="px-3 py-3 border border-[#580cd2] rounded-full text-2xl text-center text-[#580cd2]"
              >
                <AiOutlineMinus />
              </button>
              <h2 className="text-lg px-6">
                {videoCounter} {videoCounter > 1 ? "Videos" : "Video"}
              </h2>
              <button
                onClick={() => {
                  setVideoCounter((prev) => prev + 1);
                }}
                className="px-3 py-3 border border-[#580cd2] rounded-full text-2xl text-center text-[#580cd2]"
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="px-2">
            <h2 className="text-base font-semibold mb-1 mt-20">
              Additional Notes
            </h2>
            <input
              className="w-full h-9 border outline-none p-3 text-sm border-gray-500 rounded-md "
              type="text"
              spellCheck="false"
              onChange={(e) => {
                setAdditionalNotes(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default GetStarted;
