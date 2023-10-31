import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import TopNavbar from "../../components/Nav/TopNavbar";

import authImg from "../../assets/img/auth-img.svg";

function Login() {
  // const googleAuth = () => {
  //   window.open(
  //     `${process.env.REACT_APP_API_URL}/auth/google/callback`,
  //     "_self"
  //   );
  // };
  return (
    <>
      <TopNavbar />
      <div className="w-full h-screen justify-center items-center flex">
        <div
          className={`${styles.form_container} flex justify-between items-center w-full h-full `}
        >
          <div className="w-1/2 mr-5">
            <img className="" src={authImg} alt="login" />
          </div>
          <div className="w-1/3">
            <h2 className={styles.from_heading}>Members Log in</h2>
            <button className={styles.google_btn}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google icon"
              />
              <span>Log In with Google</span>
            </button>
            {/* <button className={styles.google_btn}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sign Up with Facebook</span>
            </button> */}
            <p className="text-[#580cd2]">
              New Here? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
