import React, { useState } from "react";

function OptionBox(info) {
  const { title, price, name, option } = info;

  let videoDetails = JSON.parse(localStorage.getItem("videoDetails"));
  let videoDurationPrice = videoDetails.videoDuration.price;
  let videoDurationPriceSort =
    videoDurationPrice === "Included" ? 0 : videoDurationPrice.slice(2);

  let videoDurationInt = Number(videoDurationPriceSort);
  let priceStr = price.slice(1);
  let priceInt = Number(priceStr);

  let totalPrice = priceInt + videoDurationInt;

  console.log(totalPrice);

  const [videoType] = useState({
    title: title,
    price: totalPrice,
  });

  // let options = [];
  // const [optionSelect, setoptionSelect] = useState([]);

  // for (let i = 0; i < optionSelect.length; i++) {
  //   options[i] = optionSelect;
  // }

  // console.log(options);
  return (
    <div
      // border-[3px] border-[#580cd2] border-solid
      onClick={() => {
        // setoptionSelect(title);
        option(videoType);
        localStorage.setItem("videoTypeOption", JSON.stringify(videoType));
        // console.log(videoType);
      }}
      className={`p-3 bg-white h-24 flex-1 mx-2 rounded-lg hover:bg-slate-300 border border-gray-500 border-solid transition-all duration-100`}
    >
      <div className="flex justify-between">
        <h4 className="text-lg capitalize">{title}</h4>
        <input
          className=" w-5 fill-black hue-rotate-[33deg] text-2xl"
          style={{ color: "black" }}
          type="radio"
          name="option"
          id=""
        />
      </div>
      <h3 className="text-2xl font-semibold">{price}</h3>
    </div>
  );
}

export default OptionBox;
