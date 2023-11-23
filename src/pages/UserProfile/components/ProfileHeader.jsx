import React, { useState } from "react";
import TopNavbar from "../../../components/Nav/TopNavbar";
import Loader from "../../../components/Elements/Loader";

const ProfileHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  let userData = JSON.parse(localStorage.getItem("userData"));

  let userDataNull = userData === null;

  if (!userDataNull) {
    var {
      googleId,
      name,
      profileImg,
      userType: { client, creator },
    } = userData;
  }

  return (
    <div>
      <TopNavbar />

      <div className="flex items-center mt-20 flex-col w-full h-full">
        <div className="shadow-lg shadow-gray-400 w-full h-[380px]">
          {/* {!isLoaded && <Loader />} */}
          <img
            src="	https://source.unsplash.com/1600x400/?nature,photography,technology"
            className=""
            alt="Cover-img"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div className="">
          <div className="w-full -mt-16 flex flex-col items-center">
            <img className="w-32 rounded-full" src={profileImg} alt="" />
            <h1 className="text-lg font-semibold w-48 mt-2 text-center">
              {name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
