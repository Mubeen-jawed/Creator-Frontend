import React, { useState } from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import ProgressBar from "../../components/Elements/ProgressBar";

//elements
import BackBtn from "../../components/Buttons/BackBtn";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";

function VideoBrief() {
  //States
  const [overview, setOverview] = useState(null);
  const [objectives, setObjectives] = useState(null);
  const [targetAudience, setTargetAudience] = useState(null);
  const [message, setMessage] = useState(null);
  const [tone, setTone] = useState(null);

  const videoBriefData = {};

  videoBriefData.overview = overview;
  videoBriefData.objectives = objectives;
  videoBriefData.targetAudience = targetAudience;
  videoBriefData.message = message;
  videoBriefData.tone = tone;

  function handleVideoCampaign() {
    localStorage.setItem("videoBrief", JSON.stringify(videoBriefData));
  }

  return (
    <>
      <div className="bg-gray-100">
        <TopNavbar />
        <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
          <div className="flex items-center">
            <BackBtn to="/payment" />
            <ProgressBar text="Video Details" active={true} />
            <ProgressBar text="Payment" active={true} />
            <ProgressBar text="Video Brief" active={true} />
          </div>

          <div className="mt-12 w-full p-5 bg-white border border-gray-300 border-solid rounded-lg">
            <div className="px-2">
              <h2 className="text-base font-semibold mb-1">1. Overview</h2>
              <textarea
                className="w-full border outline-none p-3 text-sm border-gray-500 rounded-md resize-none"
                name=""
                id=""
                rows="1"
                placeholder="Here you put the big picture for your project. What previous experience and/or projects relate to this current one?"
                onChange={(e) => setOverview(e.target.value)}
              ></textarea>
            </div>

            <div className="w-full flex mt-8">
              <div className="px-2 w-1/2">
                <h2 className="text-base font-semibold mb-1">2. Objectives</h2>
                <textarea
                  className="w-full border outline-none p-3 text-sm border-gray-500 rounded-md resize-none"
                  name=""
                  id=""
                  rows="5"
                  placeholder=" 1. What will this campaign accomplish? Give us some details here. 
                  2. What’s your idea of success for the project? This is a key question to ask clients. 
                  3. What else? Provide details.
                  "
                  onChange={(e) => setObjectives(e.target.value)}
                ></textarea>
              </div>
              <div className="px-2 w-1/2">
                <h2 className="text-base font-semibold mb-1">
                  3. Target Audience
                </h2>
                <textarea
                  className="w-full border outline-none p-3 text-sm border-gray-500 rounded-md resize-none"
                  name=""
                  id=""
                  rows="5"
                  placeholder="Know the audience cold. You should include demographic information such as age, gender, race, and income level. Be sure to point one key piece of information as it relates to your project.
                  "
                  onChange={(e) => setTargetAudience(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="px-2 mt-8">
              <h2 className="text-base font-semibold mb-1">4. Message</h2>
              <textarea
                className="w-full border outline-none p-3 text-sm border-gray-500 rounded-md resize-none"
                name=""
                id=""
                rows="1"
                placeholder="What is the theme and message of your project?"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="px-2 mt-8">
              <h2 className="text-base font-semibold mb-1">5. Tone</h2>
              <textarea
                className="w-full border outline-none p-3 text-sm border-gray-500 rounded-md resize-none"
                name=""
                id=""
                rows="1"
                placeholder="Paired with the message, explain what your project will be like--funny, sincere, scary?"
                onChange={(e) => setTone(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="w-full flex justify-end mt-5">
            <PrimaryBtn
              text="campaign overview"
              to="campaign-overview"
              click={handleVideoCampaign}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBrief;
