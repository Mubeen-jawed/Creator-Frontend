import React, { useEffect, useState } from "react";
import axios from "axios";

import TopNavbar from "../../components/Nav/TopNavbar";
import { Link } from "react-router-dom";

const MarketPlace = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [creatorProfile, setCreatorProfile] = useState([]);
  const [jobClick, setJobClick] = useState(false);
  const [jobId, setJobId] = useState(null);
  const [userData, setUserData] = useState(null);

  const [proposalValue, setProposalValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/userData")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [userData]);

  localStorage.setItem("userData", JSON.stringify(userData));

  useEffect(() => {
    axios
      .get("http://localhost:8080/campaignData")
      .then((res) => setCampaignData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(jobClick);

  function handleProposalSend(e) {
    const profile = JSON.parse(localStorage.getItem("userData"));

    axios
      .post("http://localhost:8080/proposal", {
        proposalValue: proposalValue,
        creatorProfile: profile,
        jobId: jobId,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    e.preventDefault();
  }

  return (
    <div className="bg-gray-100">
      <TopNavbar />
      <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
        {campaignData.map((item, index) => (
          <div>
            <div
              className="w-full mt-5 p-5 bg-white border border-gray-700 border-solid rounded-lg active:bg-gray-300 transition-all duration-300"
              onClick={() => {
                setJobClick(true);
                setJobId(item._id);
                // console.log(e);
              }}
              key={item._id}
            >
              {/* {jobClick && item._id === jobId && setShowJobDetails(true)} */}
              {/* {console.log(item)} */}
              <h2>
                <span className="font-semibold">Video Type:</span>{" "}
                {item.videoDetails?.videoType?.title}
              </h2>
              <p>
                <span className="font-semibold">Video Duration:</span>
                {item.videoDetails?.videoDuration?.videoDuration}
              </p>

              <div>
                <h5>
                  <span className="font-semibold">Budget:</span>{" "}
                  {item.videoDetails?.videoType?.price}
                </h5>
                <h5>{item?.videoDetails?.numOfVideos} Videos</h5>
              </div>
            </div>

            {/* Job Click UI  */}

            {jobClick && item._id == jobId && (
              <div className="top-0 bottom-0 right-0 left-1/2">
                <form className="px-2 mt-3">
                  <h2 className="text-base font-semibold mb-1">
                    Write a Proposal
                  </h2>
                  <textarea
                    className="w-full border outline-none p-3 text-sm border-gray-500 rounded-md resize-none"
                    name=""
                    id=""
                    rows="3"
                    // placeholder="Write a Proposal"
                    onChange={(e) => setProposalValue(e.target.value)}
                  ></textarea>
                  <div className="w-full flex justify-end items-center ">
                    <Link
                      to="/proposal-send"
                      className="radius8 hover:text-white font-semibold ml-5 capitalize bg-[#580cd2] px-3 py-2 text-white"
                      onClick={handleProposalSend}
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* { for */}
      {/* } */}
    </div>
  );
};

export default MarketPlace;
