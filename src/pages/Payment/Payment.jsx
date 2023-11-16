import React, { useState } from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import ProgressBar from "../../components/Elements/ProgressBar";
import SummaryItem from "./SummaryItem";
import { Link } from "react-router-dom";

//elemets
import BackBtn from "../../components/Buttons/BackBtn";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

function Payment() {
  //get Localstorage
  let videoDetails = JSON.parse(localStorage.getItem("videoDetails"));

  let priceInt = videoDetails.videoType.price.slice(1);
  let numOfVideosInt = Number(videoDetails.numOfVideos);

  //states
  const [totalPrice, setTotalPrice] = useState([]);

  localStorage.setItem("totalPrice", totalPrice);

  return (
    <div className="bg-gray-100">
      <TopNavbar />
      <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
        <div className="flex items-center">
          <BackBtn to="/get-started" />
          <ProgressBar text="Video Details" active={true} />
          <ProgressBar text="Payment" active={true} />
          <ProgressBar text="Video Brief" />
        </div>

        <div className="w-full mt-12 flex">
          <div className="summary w-3/5 p-5 mr-2 bg-white border border-gray-300 border-solid rounded-lg">
            <h3 className=" text-2xl font-semibold">Summary</h3>
            <SummaryItem
              videoItem={videoDetails.videoType.title}
              price={videoDetails.videoType.price?.slice(1)}
              NumOfVideos={videoDetails.numOfVideos}
              total={(data) => {
                setTotalPrice(data);
              }}
            />
            {/* <SummaryItem
              videoItem={videoDetails.videoDuration.title}
              price={videoDetails.videoDuration.price}
              NumOfVideos={videoDetails.numOfVideos}
              total={(data) => {
                setItems(data);
              }}
            /> */}

            {/* <SummaryItem
              videoItem={additionalNotes}
              price={videoTypeData.price}
              NumOfVideos={numOfVideos}
            /> */}
            <div className="border border-gray-300 border-solid flex items-center my-5"></div>

            <div className=" flex justify-between">
              <h3 className="text-2xl font-semibold ">Order Total</h3>
              <h3 className="text-2xl font-semibold">${totalPrice}.00</h3>
            </div>
          </div>
          <div className="payment items-end w-2/5 p-5 ml-2 bg-white border border-gray-300 border-solid rounded-lg">
            <h3 className=" text-2xl font-semibold">Payment</h3>

            <div className="w-full h-5/6 flex justify-end items-end">
              <PrimaryBtn text="next step" to="video-brief" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
