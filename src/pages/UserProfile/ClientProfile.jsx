import React from "react";
import { Link } from "react-router-dom";

import ProfileHeader from "./components/ProfileHeader";
import Footer from "../../components/Nav/Footer";
import AllCampaigns from "../AllCampaigns/AllCampaigns";
import NoData from "../../components/Elements/NoData";

const ClientProfile = () => {
  return (
    <div className="bg-gray-100">
      <ProfileHeader />

      <div className="flex w-full max-w-7xl xl:m-auto pt-16  rounded-xl px-4">
        <div className="w-1/2 mr-8">
          <h2 className="capitalize text-3xl font-serif">Your campaigns</h2>
          <AllCampaigns />
          {/* <Link>See all campaigns</Link> */}
        </div>

        <div className="w-1/2 ml-8">
          <h2 className="capitalize text-3xl font-serif">Your Hires</h2>
          <NoData btnText="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClientProfile;
