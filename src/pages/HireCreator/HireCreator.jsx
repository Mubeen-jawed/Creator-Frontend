import React, { useState, useEffect } from "react";
import axios from "axios";

//assets
import TopNavbar from "../../components/Nav/TopNavbar";

const HireCreator = () => {
  // const [userData, setUserData] = useState([])

  // useEffect(() => {
  //   axios
  //   .get("http://localhost:8080/userData")
  //   .then((res) => setUserData(res.data))
  //   .catch((err) => console.log(err));
  // }, [])

  return (
    <div>
      <TopNavbar />

      <div></div>
    </div>
  );
};

export default HireCreator;
