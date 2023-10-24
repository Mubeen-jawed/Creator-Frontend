import React from "react";

function ProgressBar(props) {
  const { text, active } = props;

  return (
    <div className="h-2 flex-1 mx-2">
      <div
        className={`${
          active ? "bg-[#580cd2] progress-moved" : "bg-slate-300"
        }  w-full h-2 rounded-full mb-1 `}
      ></div>
      <p className="text-center capitalize">{text}</p>
    </div>
  );
}

export default ProgressBar;
