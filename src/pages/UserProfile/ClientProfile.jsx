import React from "react";

import TopNavbar from "../../components/Nav/TopNavbar";

const ClientProfile = () => {
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
    <div className="bg-gray-100">
      <TopNavbar />

      <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
        <div className="w-64">
          <img className="w-full rounded-full" src={profileImg} alt="" />
        </div>
        <h1 className="text-4xl font-semibold">{name}</h1>
      </div>
    </div>
  );
};

export default ClientProfile;
