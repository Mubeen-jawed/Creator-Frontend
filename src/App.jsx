import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";

//Pages

import Landing from "./pages/LandingPage/Landing";
import GetStarted from "./pages/GetStarted/GetStarted";
import Payment from "./pages/Payment/Payment";
import VideoBrief from "./pages/VideoBrief/VideoBrief";
import CampaignCreated from "./pages/VideoBrief/campaignCreated";
import ProposalSend from "./pages/MarketPlace/ProposalSend";
import CampaignActivity from "./pages/CampaignActivity/CampaignActivity";
import AllCampaigns from "./pages/AllCampaigns/AllCampaigns";

import MarketPlace from "./pages/MarketPlace/MarketPlace";

import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";

import PageNotFound from "./pages/404 Page/404";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:8080/auth/google/callback`;
      const data = await axios.get(url, { withCredentials: true });
      console.log(data);
      // setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Landing />} /> {/*user={user} */}
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/video-brief" element={<VideoBrief />}></Route>
          <Route path="/campaign-created" element={<CampaignCreated />}></Route>
          <Route path="/marketplace" element={<MarketPlace />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/proposal-send" element={<ProposalSend />}></Route>
          <Route
            path="/campaign-activity"
            element={<CampaignActivity />}
          ></Route>
          <Route path="/all-campaigns" element={<AllCampaigns />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
