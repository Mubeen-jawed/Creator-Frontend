import React, { useState } from "react";

import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function SummaryItem(props) {
  const { videoItem, price, NumOfVideos, total } = props;

  // let price1 = price.slice(1);
  let priceInt = Number(price);
  let NumOfVideosInt = Number(NumOfVideos);

  let totalPrice = priceInt * NumOfVideosInt;

  const [videoCounter, setVideoCounter] = useState(NumOfVideosInt);

  return (
    <>
      <div className="flex justify-between mt-5">
        <div>
          <h5 className="font-semibold">{videoItem}</h5>
          <small className="text-base text-gray-600">${price}/video</small>
        </div>

        <div className="flex items-center">
          <button className="flex items-center border border-gray-400 rounded-full py-0 px-4 mr-5 cursor-default">
            <span
              onClick={() => {
                setVideoCounter((prev) => {
                  if (prev > 1) {
                    return prev - 1;
                  } else {
                    return 1;
                  }
                });
              }}
              className="text-xs mr-2 cursor-pointer"
            >
              <AiOutlineMinus />
            </span>{" "}
            {videoCounter} Videos{" "}
            <span
              onClick={() => {
                setVideoCounter((prev) => {
                  return prev + 1;
                });
              }}
              className="text-xs ml-2 cursor-pointer"
            >
              <AiOutlinePlus />
            </span>
          </button>

          <p onLoad={total(totalPrice)}>${totalPrice}.00</p>
        </div>
      </div>
    </>
  );
}

export default SummaryItem;
