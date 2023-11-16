import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//assest
import TopNavbar from "../../components/Nav/TopNavbar";
import NoData from "../../components/Elements/NoData";

const CampaignActivity = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [proposalData, setProposalData] = useState([]);
  const [proposalId, setProposalId] = useState("");
  const [googleId, setGoogleId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("proposalId");
    setProposalId(id);

    const { googleId } = JSON.parse(localStorage.getItem("userData"));
    setGoogleId(googleId);

    campaignData.map((data) => {
      if (data._id === proposalId) {
        data.proposals !== undefined && setProposalData(data.proposals);
      }
    });
  }, [campaignData]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/proposal")
      .then((res) => setCampaignData(res.data))
      .catch((err) => console.log(err));
  }, []);

  function messageCreator(data) {
    localStorage.setItem("creatorChatId", data?.creatorProfile?.googleId);
  }

  return (
    <div className="bg-gray-100">
      <TopNavbar />

      {proposalData.length > 0 ? (
        <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
          {proposalData.map((data) => (
            <div className=" w-full h-48 mt-5 p-5 bg-white border border-gray-700 border-solid rounded-lg">
              <div className="flex items-center">
                <div className="w-40">
                  <img
                    src={data?.creatorProfile?.profileImg}
                    alt="creator-img"
                    className="rounded-full w-full"
                  />
                </div>

                <div className="flex w-full justify-between pl-4">
                  <div>
                    <h2 className="text-3xl font-serif">
                      {data?.creatorProfile?.name}
                    </h2>
                    <div className="mt-5">
                      <h5 className="font-semibold">Cover Letter:</h5>
                      <h6 className="">{data.coverLetter}</h6>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start">
                    <button
                      onClick={() => (window.location.href = "/hire-creator")}
                      className="bg-[#580cd2] w-28 py-2 text-white rounded-full hover:brightness-95"
                    >
                      Hire
                    </button>
                    <Link
                      onClick={() => messageCreator(data)}
                      to={`/${googleId}/messages`}
                      className="border-[#580cd2] border-solid border-2 w-28 py-2 text-[#580cd2] rounded-full mt-4 hover:bg-gray-100 flex justify-center items-center"
                    >
                      Message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default CampaignActivity;
