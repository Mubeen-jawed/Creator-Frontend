import React from "react";

import ProfileHeader from "./components/ProfileHeader";
import Footer from "../../components/Nav/Footer";
import NoData from "../../components/Elements/NoData";

const CreatorProfile = () => {
  return (
    <div className="bg-gray-100">
      <ProfileHeader />

      <div className="flex w-full max-w-7xl xl:m-auto pt-16  rounded-xl px-4">
        <div className="w-1/2 mr-8">
          <h2 className="capitalize text-3xl font-serif">Your Proposals</h2>
          <NoData btnText="" />
        </div>

        <div className="w-1/2 ml-8">
          <h2 className="capitalize text-3xl font-serif">Your Contracts</h2>
          <NoData btnText="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatorProfile;
