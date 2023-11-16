import React, { useState, useEffect } from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import axios from "axios";

//icons
import { AiOutlineVideoCamera } from "react-icons/ai";
import { GoVideo } from "react-icons/go";

const UserType = () => {
  const [userData, setUserData] = useState(null);

  // localStorage.setItem(
  //   "usertype",
  //   JSON.stringify({ client: client, creator: creator })
  // ); //save user type details into database

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/userData", {
  //       withCredentials: true,
  //     })
  //     .then((res) => setUserData(res.data))
  //     .catch((err) => console.log(err));
  // });

  function handleClient() {
    console.log("click");
    axios.post(
      "http://localhost:8080/userType",
      {
        client: true,
        creator: false,
      }
      // { withCredentials: true }
    );

    window.location.href = "/";
  }

  function handleCreator() {
    axios.post("http://localhost:8080/userType", {
      client: false,
      creator: true,
    });

    window.location.href = "/";
  }

  // axios.get("");

  return (
    <div className="bg-gray-100">
      <TopNavbar />

      <div className="max-w-7xl py-28 xl:m-auto h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold mt-3 mb-4 font-serif capitalize">
          How do you want to use creator?
        </h1>
        <div className="flex w-full">
          <div
            onClick={handleClient}
            className="flex flex-col justify-center w-full h-60 mr-5 mt-5 p-5 bg-white border border-gray-700 border-solid rounded-lg active:bg-gray-300 hover:bg-gray-200 transition-all duration-300"
          >
            <GoVideo className="text-5xl mr-3 text-[#580cd2]" />
            <div className="">
              <h2 className="text-4xl font-serif font-semibold mt-3 mb-1">
                As a Client
              </h2>
              <p className="text-xl font-semibold lowercase text-gray-600">
                Wants To create content for your business
              </p>
            </div>
          </div>
          <div
            onClick={handleCreator}
            className="flex flex-col justify-center w-full h-60 mr-4 mt-5 p-5 bg-white border border-gray-700 border-solid rounded-lg active:bg-gray-300 hover:bg-gray-200 transition-all duration-300"
          >
            <AiOutlineVideoCamera className="text-5xl mr-3 text-[#580cd2]" />
            <div className="">
              <h2 className="text-4xl font-serif font-semibold mt-3 mb-1 ">
                As a Content Creator
              </h2>
              <p className="text-xl font-semibold lowercase text-gray-600">
                Wants to Create Content for others
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;
