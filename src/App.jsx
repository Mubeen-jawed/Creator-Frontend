import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/LandingPage/Landing";
import GetStarted from "./pages/GetStarted/GetStarted";
import Payment from "./pages/Payment/Payment";
import VideoBrief from "./pages/VideoBrief/VideoBrief";
import CampaignCreated from "./pages/VideoBrief/campaignCreated";

function App() {
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
          <Route path="/" element={<Landing />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/video-brief" element={<VideoBrief />}></Route>
          <Route path="/campaign-created" element={<CampaignCreated />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
