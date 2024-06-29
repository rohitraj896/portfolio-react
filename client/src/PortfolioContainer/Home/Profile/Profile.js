/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Typical from "react-typical";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100016644005022&mibextid=ZbWKwL">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/rohit__react?igsh=MXJoaWF2eXJiMXg4bA==">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://x.com/rohitraj896?t=XsIgT_YIZVMs5SaPz18-wg&s=08 ">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/rohit896">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/rohitraj896">
                <i className="fa fa-github"></i>
              </a>
              <a href="mailto:rohitkr3390@gmail.com">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'm
              <span className="highlighted-text"> Rohit Kumar</span>
            </span>
          </div>
          <div className="profile-details-row">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😍",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😊",
                    1000,
                    "Cross plateform v 🌐",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn btn-primary"> Hire Me </button>
            <a href="Resume.pdf" download="Rohit Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
