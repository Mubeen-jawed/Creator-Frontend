import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { BiPaperPlane } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  // const [userData, setUserData] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

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

  function logout() {
    axios.get("http://localhost:8080/logout");

    localStorage.removeItem("userData");
  }

  // let authenticated = googleId.length > 0;

  // if (typeof googleId == null) {
  //   window.location.href = "/signup";
  // }

  // console.log(profileImg);

  return (
    <>
      {userDataNull ? (
        <>
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
          <Wrapper
            className="flexCenter animate whiteBg"
            style={y > 100 ? { height: "60px" } : { height: "80px" }}
          >
            <NavInner className="container flexSpaceCenter">
              <Link className="pointer flexNullCenter" to="/">
                <LogoIcon />
                <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                  fanatic
                </h1>
              </Link>
              <BurderWrapper
                className="pointer"
                onClick={() => toggleSidebar(!sidebarOpen)}
              >
                <BurgerIcon />
              </BurderWrapper>
              <UlWrapper className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Home
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Services
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Projects
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Blog
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Pricing
                  </Link>
                </li>
              </UlWrapper>
              <UlWrapperRight className="flexNullCenter">
                {/* {!userDataNull && client && (
                  <li className="semiBold font15 pointer capitalize">
                    <a
                      href="/all-campaigns"
                      style={{ padding: "10px 30px 10px 0" }}
                    >
                      view your campaigns
                    </a>
                  </li>
                )} */}
                <li className="semiBold font15 pointer">
                  <a
                    href="/marketplace"
                    style={{ padding: "10px 30px 10px 0" }}
                  >
                    Become a Creator
                  </a>
                </li>
                <li className="semiBold font15 pointer">
                  <a href="/login" style={{ padding: "10px 30px 10px 0" }}>
                    Log in
                  </a>
                </li>

                <li className="semiBold font15 pointer flexCenter">
                  <a
                    href="/get-started"
                    className="radius8 lightBg"
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#580cd2",
                      color: "white",
                    }}
                  >
                    Get Started
                  </a>
                </li>
              </UlWrapperRight>
            </NavInner>
          </Wrapper>
        </>
      ) : (
        <>
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
          <Wrapper
            className="flexCenter animate whiteBg"
            style={y > 100 ? { height: "60px" } : { height: "80px" }}
            onClick={() => showOptions && setShowOptions(false)}
          >
            <NavInner className="container flexSpaceCenter">
              <Link className="pointer flexNullCenter" to="/">
                <LogoIcon />
                <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
                  fanatic
                </h1>
              </Link>
              <BurderWrapper
                className="pointer"
                onClick={() => toggleSidebar(!sidebarOpen)}
              >
                <BurgerIcon />
              </BurderWrapper>
              <UlWrapper className="flexNullCenter">
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Home
                  </Link>
                </li>
                {client && (
                  <li className="semiBold font15 pointer capitalize">
                    <a href="/all-campaigns" style={{ padding: "10px 15px" }}>
                      view your campaigns
                    </a>
                  </li>
                )}
                {creator && (
                  <li className="semiBold font15 pointer capitalize">
                    <a href="/all-proposals" style={{ padding: "10px 15px" }}>
                      view your Proposals
                    </a>
                  </li>
                )}
                {creator && (
                  <li className="semiBold font15 pointer capitalize">
                    <a href="/all-proposals" style={{ padding: "10px 15px" }}>
                      Your contracts
                    </a>
                  </li>
                )}

                {client && (
                  <li className="semiBold font15 pointer">
                    <Link
                      activeClass="active"
                      style={{ padding: "10px 15px" }}
                      to="/hires"
                    >
                      Your Hires
                    </Link>
                  </li>
                )}
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Projects
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Pricing
                  </Link>
                </li>
              </UlWrapper>
              <UlWrapperRight className="flexNullCenter">
                {creator && (
                  <Link
                    to={`/${googleId}/messages`}
                    className="semiBold font15 pointer flex items-center flex-col pr-6"
                  >
                    <BiPaperPlane className="text-xl" />
                    <p className="text-sm mt-1">Messages</p>
                  </Link>
                )}
                {/* {creator && ( */}
                <Link
                  to={`/${googleId}/alerts`}
                  className="semiBold font15 pointer flex items-center flex-col pr-6"
                >
                  <div className="mb-4">
                    <FaRegBell className="text-xl absolute" />
                    <div className="w-3 h-3 bg-red-600 relative -right-3 rounded-full text-[9px] text-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <p className="text-sm">Alerts</p>
                </Link>
                {/* )} */}
                {(client || creator) && (
                  <Link
                    // to="/id/creator/profile"
                    className="semiBold font15 pointer flex flex-col justify-center items-center"
                    onClick={() => setShowOptions(true)}
                  >
                    <div className="rounded-full border-2 border-black border-solid w-12 h-12 mb-1">
                      <img className="rounded-full " src={profileImg} alt="" />
                    </div>
                    <p>{name}</p>
                  </Link>
                )}
                {showOptions ? (
                  <ul className="absolute top-20 right-0 shadow-xl p-4 w-56 bg-white flex flex-col justify-start items-start">
                    <li className="flex">
                      <BsFillPersonFill className="text-lg" />
                      <Link to={`/client/${googleId}`} className="ml-1 text-lg">
                        Profile
                      </Link>
                    </li>
                    <li className="flex mt-1 cursor-pointer" onClick={logout}>
                      <MdLogout className="text-lg" />
                      <p className="ml-1 text-lg">Logout</p>
                    </li>
                  </ul>
                ) : null}
                {/* {creator && (
                  <Link
                    to="/id/creator/profile"
                    className="semiBold font15 pointer flex flex-col justify-center items-center"
                  >
                    <div className="rounded-full border-2 border-black border-solid w-12 h-12 mb-1">
                      <img className="rounded-full " src={profileImg} alt="" />
                    </div>
                    <p>{name}</p>
                  </Link>
                )} */}
              </UlWrapperRight>
            </NavInner>
          </Wrapper>
        </>
      )}
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 0 -12px 20px 1px black;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
