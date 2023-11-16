import React, { useState, useEffect } from "react";
import axios from "axios";
// Sections
import TopNavbar from "../../components/Nav/TopNavbar";
import Header from "../LandingPage/Sections/Header";
import Services from "../LandingPage/Sections/Services";
import Projects from "../LandingPage/Sections/Projects";
import Blog from "../LandingPage/Sections/Blog";
import Pricing from "../LandingPage/Sections/Pricing";
import Contact from "../LandingPage/Sections/Contact";
import Footer from "../LandingPage/Sections/Footer";

export default function Landing() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/userData")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  localStorage.setItem("userData", JSON.stringify(userData));

  // console.log(userData);
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
