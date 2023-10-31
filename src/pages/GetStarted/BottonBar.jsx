import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Elements

import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

function BottomBar() {
  let videoDetails = JSON.parse(localStorage.getItem("videoDetails"));
  // console.log(videoDetails.videoType.price);

  let videoTypePriceStr = videoDetails.videoType.price.slice(1);
  let videoTypePriceInt = Number(videoTypePriceStr);
  let numOfVideosInt = Number(videoDetails.numOfVideos);

  let videoDurationPrice = videoDetails.videoDuration.price.slice(2);
  console.log(videoDurationPrice);
  let videoDurationPriceInt = Number(videoDurationPrice);

  let totalPrice = (videoTypePriceInt + videoDurationPriceInt) * numOfVideosInt;

  return (
    <div>
      <Wrapper
        className="flexCenter animate whiteBg h-20 border border-solid border-gray-400"
        // style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="w-full pr-3 max-w-7xl xl:m-auto flex justify-end items-center">
          <div>
            <p>
              ${videoTypePriceInt + videoDurationPriceInt} x{" "}
              {videoDetails.numOfVideos}{" "}
              {numOfVideosInt > 1 ? "Videos" : "Video"}
            </p>
            <p>
              <span className="font-semibold">Total: </span>${totalPrice}
            </p>
          </div>
          <PrimaryBtn text="next step" to="payment" />
        </NavInner>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  // border-top: 1px solid lightGray;
  // box-shadow: 0 13px 23px 2px black;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

export default BottomBar;
