import React, { useState } from "react";

function OptionBox(info) {
  const { title, price, name, option } = info;

  // if (typeof title == undefined) {
  //   title = "included";
  // }

  // if (typeof price == undefined) {
  //   title = "15 sec";
  // }

  const [videoDuration] = useState({
    videoDuration: title,
    price: price,
  });

  return (
    <div
      // border-[3px] border-[#580cd2] border-solid
      onClick={() => {
        option(videoDuration);
        localStorage.setItem(
          "videoDurationOption",
          JSON.stringify(videoDuration)
        );
        // console.log(videoDuration);
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
