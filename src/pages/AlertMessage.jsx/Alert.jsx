import React, { useEffect, useState } from "react";

//elements

import { MdOutlineCelebration } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import TopNavbar from "../../components/Nav/TopNavbar";
import NoData from "../../components/Elements/NoData";

const Alert = () => {
  const [allAlerts, setAllAlerts] = useState([]);

  useEffect(() => {
    const { alerts } = JSON.parse(localStorage.getItem("userData"));
    setAllAlerts(alerts);
  }, []);

  console.log(allAlerts);

  return (
    <div>
      <TopNavbar />

      {allAlerts.length > 0 ? (
        <div className="max-w-7xl py-20 xl:py-28 xl:m-auto h-full">
          <h2 className="text-3xl font-serif mb-3">Recent</h2>
          <div className=" border border-solid border-gray-300 rounded-lg">
            {allAlerts.map((alert) => (
              <div className="border-b border-solid border-gray-300 p-3">
                <div className="w-full flex justify-end">
                  <RxCross1 className="text-[#580cd2] text-xl" />
                </div>
                <div className="flex px-4 py-2">
                  <MdOutlineCelebration className="text-[#580cd2] text-4xl" />

                  <div className="pl-3 text-lg">
                    <p>{alert}</p>
                    <small className="text-gray-400 text-sm font-serif">
                      10 Oct
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NoData text="There are no alerts for you." />
      )}
    </div>
  );
};

export default Alert;
