import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex w-full h-full justify-center items-center ">
      <TailSpin
        height="70"
        width="70"
        color="#580cd2"
        ariaLabel="loader"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
