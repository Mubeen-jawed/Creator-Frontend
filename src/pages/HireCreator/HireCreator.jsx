import React, { useState, useEffect } from "react";
import axios from "axios";

//assets
import TopNavbar from "../../components/Nav/TopNavbar";
import Accordion from "./Accordion";

const HireCreator = () => {
  const [creatorId, setCreatorId] = useState("");
  const [creatorData, setCreatorData] = useState([]);

  useEffect(() => {
    if (creatorId.length > 0) {
      axios
        .get(`http://localhost:8080/${creatorId}`)
        .then((res) => setCreatorData(res.data))
        .catch((err) => console.log(err));
    }
  }, [creatorId]);

  useEffect(() => {
    const creatorId = localStorage.getItem("creatorChatId");
    setCreatorId(creatorId);
  }, []);

  const [sendProductClick, setsendProductClick] = useState(false);

  if (creatorData.profileInfo?.address != undefined) {
    var { floor, address, city, province, phoneNumber } =
      creatorData?.profileInfo?.address;
  }

  return (
    <div>
      <TopNavbar />

      <div className="mt-20 max-w-7xl py-20 xl:py-28 xl:m-auto h-full capitalize">
        <h1 className="font-serif font-semibold text-5xl mb-6">Hiring</h1>
        <div className="border border-solid border-gray-300 p-3">
          <h3>
            {floor},{address}
          </h3>
          <h2 className="font-semibold">
            {city}, <span></span>
            {province}
          </h2>
          <h3>
            <span className="font-semibold text-sm">Phone:</span> {phoneNumber}
          </h3>
          <div className="border-t border-solid border-gray-300 my-2"></div>
          <h3 className="">
            Send your product to <span>this address</span> within 2/3 days.
          </h3>
        </div>

        <div className="flex flex-col w-full items-end mt-3">
          <button
            className={`${
              sendProductClick && "disabled:bg-gray-500 cursor-not-allowed"
            } radius8 font-semibold ml-5 capitalize text-white py-2 px-3 bg-[#580cd2]`}
            onClick={() => setsendProductClick(true)}
            disabled={sendProductClick}
          >
            product sended
          </button>

          {sendProductClick && (
            <div className="mt-2 transition-all duration-300">
              <p>We'll let you know once the creator recieved it.</p>
            </div>
          )}
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default HireCreator;
