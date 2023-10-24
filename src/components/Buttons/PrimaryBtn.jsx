import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineArrowRight } from "react-icons/ai";

function PrimaryBtn(props) {
  // const [data, setData] = useState("mubbenn");
  return (
    <Link
      onClick={props.click}
      to={"/" + props.to}
      className="radius8 lightBg font-semibold ml-5 capitalize"
      style={{
        padding: "10px 15px",
        backgroundColor: "#580cd2",
        color: "white",
      }}
    >
      {props.text}
      {/* <AiOutlineArrowRight /> */}
    </Link>
  );
}

export default PrimaryBtn;
