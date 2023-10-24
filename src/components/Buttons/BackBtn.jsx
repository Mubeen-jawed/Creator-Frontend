import React from "react";
import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

function BackBtn(props) {
  return (
    <Link to={props.to}>
      <button className="border border-gray-300 rounded-full mr-2 p-[6px] hover:bg-gray-200">
        <BiArrowBack className="text-[#580cd2]" />
      </button>
    </Link>
  );
}

export default BackBtn;
