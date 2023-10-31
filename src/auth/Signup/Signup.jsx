import { Link } from "react-router-dom";
import styles from "./styles.module.css";

// import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import TopNavbar from "../../components/Nav/TopNavbar";

import authImg from "../../assets/img/auth-img.svg";

function Signup() {
  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };

  // console.log(process.env.REACT_APP_API_URL);
  return (
    <>
      <TopNavbar />
      <div className="w-full h-screen justify-center items-center flex bg-gray-200">
        <div
          className={`${styles.form_container} flex justify-between items-center w-full h-full `}
        >
          <div className="w-1/2 mr-5">
            <img className="" src={authImg} alt="login" />
          </div>
          <div className="w-1/3">
            <h2 className={styles.from_heading}>Members Sign Up</h2>
            <button className={styles.google_btn} onClick={googleAuth}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google icon"
              />
              <span>Sign Up with Google</span>
            </button>
            {/* <button className={styles.google_btn}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sign Up with Facebook</span>
            </button> */}
            <p className="text-[#580cd2]">
              Already a Member? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
