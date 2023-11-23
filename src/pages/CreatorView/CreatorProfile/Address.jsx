import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import TopNavbar from "../../../components/Nav/TopNavbar";

const Address = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  // const [street, setStreet] = useState("");
  const [floor, setFloor] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  function handleAddressSave() {
    const creatorAddress = {
      province: province,
      city: city,
      address: address,
      floor: floor,
      phoneNumber: phoneNumber,
    };
    axios
      .post("http://localhost:8080/creatorProfileInfo", {
        creatorAddress: creatorAddress,
      })
      // .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("object");
  }

  return (
    <div className="bg-gray-100">
      <TopNavbar />

      <div className="mt-20 max-w-7xl py-20 xl:py-28 xl:m-auto h-full capitalize">
        <div className="mb-5 w-1/2">
          <h3 className="text-4xl mb-1 font-serif text-[#580cd2]">
            residential address
          </h3>
          <p className="text-sm text-gray-600">
            We need this information so that in future if you got any order, the
            client will have to send their product to your address.
          </p>
          {/* <p>This address will only be visible to your clients</p> */}
        </div>

        <div className="w-full flex justify-center">
          <form className="flex flex-col rounded-xl items-center max-w-4xl w-full bg-white shadow-lg shadow-gray-400 justify-center px-6 py-10">
            <label className="w-full">
              <caption className="">State/Province</caption>
              <input
                className="border border-solid w-full border-gray-300 p-2 rounded-lg outline-none focus:border-gray-400"
                type="text"
                onChange={(e) => setProvince(e.target.value)}
              />
            </label>

            <label className="w-full">
              <caption className="">City</caption>
              <input
                className="w-full border border-solid border-gray-300 p-2 rounded-lg outline-none focus:border-gray-400"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label className="w-full">
              <caption className="">Address</caption>
              <input
                className="w-full border border-solid border-gray-300 p-2 rounded-lg outline-none focus:border-gray-400"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            {/* <label>
            <caption>Street Name</caption>
            <input
              className="border border-solid border-gray-300 p-2"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />
          </label> */}
            <label className="w-full">
              <caption className="">Floor/Flat#</caption>
              <input
                className="w-full border border-solid border-gray-300 p-2 rounded-lg outline-none focus:border-gray-400"
                type="text"
                onChange={(e) => setFloor(e.target.value)}
              />
            </label>

            <label className="w-full">
              <caption className="">Phone</caption>
              <input
                className="w-full border border-solid border-gray-300 p-2 rounded-lg outline-none focus:border-gray-400"
                type="text"
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </label>

            <div className="w-full flex justify-end">
              <Link
                to="/"
                className="bg-[#580cd2] text-white py-1 px-7 rounded-full text-lg mt-3"
                onClick={handleAddressSave}
              >
                Save
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
