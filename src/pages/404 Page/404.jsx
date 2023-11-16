import React from "react";
import pageNotFoundImg from "../../assets/img/page-not-found.svg";
import TopNavbar from "../../components/Nav/TopNavbar";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

const PageNotFound = () => {
  return (
    <>
      <TopNavbar />
      <div className="w-full h-full flex flex-col justify-center items-center mt-32">
        {/* <h5 className="capitalize text-xl mt-5">
          The Page You are looking for, does not exit.
        </h5> */}
        <div className="w-1/3">
          <img className="w-full" src={pageNotFoundImg} alt="" />
        </div>

        <div className="flex flex-col justify-center items-center pt-8">
          <h2 className="text-4xl font-semibold mb-3 font-serif">
            Page Not Found
          </h2>
          <PrimaryBtn text="Return To Home" to="" />
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
