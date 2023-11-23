import React from "react";
import { useNavigate } from "react-router-dom";

//assets
import noData from "../../assets/img/no-data.svg";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const NoData = (content) => {
  const navigate = useNavigate();

  const { text, btnText, btnRedirect } = content;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img width="20%" src={noData} alt="" />
      <h1 className="capitalize text-4xl font-serif mt-7 mb-3">
        {text !== undefined ? text : "not Enough data to show"}
      </h1>

      {btnText !== undefined ? (
        <PrimaryBtn text={btnText} to={btnRedirect} />
      ) : (
        <PrimaryBtn text="Return" click={() => navigate(-1)} />
      )}
    </div>
  );
};

export default NoData;
