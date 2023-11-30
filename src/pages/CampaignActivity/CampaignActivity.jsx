import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//assest
import TopNavbar from "../../components/Nav/TopNavbar";
import NoData from "../../components/Elements/NoData";

const CampaignActivity = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [proposalData, setProposalData] = useState([]);
  const [campaignId, setCampaignId] = useState("");
  const [googleId, setGoogleId] = useState("");
  const [creatorId, setCreatorId] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/campaignActivity`)
      .then((res) => setCampaignData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("campaignId");
    setCampaignId(id);

    const { googleId } = JSON.parse(localStorage.getItem("userData"));
    setGoogleId(googleId);

    campaignData.map((data) => {
      console.log("yes");
      if (data._id === campaignId) {
        data.proposals !== undefined && setProposalData(data.proposals);
      }
    });
  }, [campaignData]);

  function saveCreatorChatId(data) {
    localStorage.setItem("creatorChatId", data?.creatorProfile?.googleId);
    setCreatorId(data?.creatorProfile?.googleId);
  }

  function hireCreator(data) {
    axios
      .post("http://localhost:8080/hireCreator", {
        hireCreatorId: data.creatorProfile._id,
        campaignId: campaignId,
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:8080/${creatorId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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
                    <Link
                      to="/hire-creator"
                      onClick={() => {
                        saveCreatorChatId(data);
                        hireCreator(data);
                      }}
                      className="bg-[#580cd2] w-28 py-2 text-white rounded-full hover:brightness-95 hover:text-white flex justify-center items-center"
                    >
                      Hire
                    </Link>
                    <Link
                      onClick={() => {
                        saveCreatorChatId(data);
                      }}
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
