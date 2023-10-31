import React from "react";
import TopNavbar from "../../components/Nav/TopNavbar";

const CampaignActivity = () => {
  return (
    <div className="bg-gray-100">
      <TopNavbar />

      <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
        <div className="flex w-full h-48 mt-5 p-5 bg-white border border-gray-700 border-solid rounded-lg active:bg-gray-300 transition-all duration-300">
          <div>
            <img src="" alt="creator-img" className="rounded-full" />
          </div>

          <div>
            <h2>Name</h2>
            <h6>Proposal</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignActivity;
