import React, { useEffect, useState } from "react";
import axios from "axios";

//assets
import TopNavbar from "../../components/Nav/TopNavbar";
import NoData from "../../components/Elements/NoData";

//img

const ClientJobs = () => {
  const [userAllCampaigns, setUserAllCampaigns] = useState([]);
  const [googleId, setGoogleId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/userAllCampaigns")
      .then((res) => setUserAllCampaigns(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleCampaignClick(id) {
    localStorage.setItem("campaignId", id);
    window.location.href = `/campaign-activity`;
  }

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));

    let userDataNull = userData === null || undefined;

    if (!userDataNull) {
      let { googleId } = userData;

      setGoogleId(googleId);
    }
  }, [googleId]);

  // console.log(Array.isArray(userAllCampaigns));

  return (
    <div className="bg-gray-100">
      <TopNavbar />

      {userAllCampaigns.length > 0 ? (
        <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
          {userAllCampaigns.map((campaign) => (
            <div
              className="w-full mt-5 p-5 bg-white border border-gray-700 border-solid rounded-lg active:bg-gray-300 transition-all duration-300"
              onClick={() => handleCampaignClick(campaign._id)}
            >
              {/* {jobClick && item._id === jobId && setShowJobDetails(true)} */}
              {/* {console.log(item)} */}
              <h2>
                <span className="font-semibold">Video Type:</span>{" "}
                {campaign.videoDetails?.videoType?.title}
              </h2>
              <p>
                <span className="font-semibold">Video Duration:</span>
                {campaign.videoDetails?.videoDuration?.videoDuration}
              </p>

              <div>
                <h5>
                  <span className="font-semibold">Budget:</span>{" "}
                  {campaign?.videoDetails?.videoType?.price}
                </h5>
                <h5>{campaign?.videoDetails?.numOfVideos} Videos</h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoData
          text="looks likes You haven't posted any campaign yet"
          btnText="Post Your first campaign"
          btnRedirect="get-started"
        />
      )}
    </div>
  );
};

export default ClientJobs;
