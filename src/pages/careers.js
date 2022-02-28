import React, { useState } from "react";
import "./scss/careers.scss";
import Select from "react-select";
import whiteLogo from "../images/white-logo.png";
import cvIcon from "../images/cv.svg";
import crossIcon from "../images/cross.png";
import { navigate } from "gatsby";

const Careers = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Graphic Designer", value: "Graphic Designer" },
    { label: "UI/UX Engineer", value: "UI/UX Engineer" },
    { label: " JavaScript Engineer", value: " JavaScript Engineer" },
    { label: "Software Engineer", value: "Software Engineer" },
    { label: "Front-End Developer", value: "Front-End Developer" },
    { label: "Back-End Developer", value: "Back-End Developer" },
    { label: " Full Stack Developer", value: " Full Stack Developer" },
    { label: " Android Developer", value: " Android Developer" },
    { label: "Content Writer", value: "Content Writer" },
    {
      label: "Business Development Manager",
      value: "Business Development Manager",
    },
    { label: " System Analyst", value: " System Analyst" },
  ];
  function moveToHome() {
    navigate("/");
  }

  function openJobModal() {
    // this.openModal = true;
    this.$modal.show("job-application");
    // this.jobModal= true;
  }
  function handleChange(val) {
    setSelectedOption(val);
  }

  return (
    <section className="careers black-bg flex-display" id="careers">
      <div className="nav-component">
        <div className="top-content containered">
          <img src={whiteLogo} className="logo" />
          <a
            style={{ textDecoration: "none" }}
            onClick={() => moveToHome()}
            className="home-btn"
          >
            Home
          </a>
        </div>
      </div>
      <div>
        <div className="containered  make-center">
          <h1 className="main-heading white-circle circle white-txt">
            Careers
          </h1>
          <div className="cv-section">
            <div className="post-cv">
              <h2 className="main-heading1" style={{ paddingBottom: "26px" }}>
                Post Your CV For Future Openings.
              </h2>
              <Select options={options} className="custom-select" />
            </div>
            <div className="horizontal-line"></div>
            <div className="upload-cv">
              <h2 className="main-heading1">Upload your CV</h2>
              <div className="resume-content mt20">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputfile"
                />
                <label className="custom-input-file" for="file">
                  Upload Resume
                </label>
                <img className="cv-icon" src={cvIcon} alt="cv" />
                {/* <img className="cross-icon m15" src={crossIcon} alt="cancle"/> */}
              </div>
            </div>
          </div>
          <div className="job-section">
            <div className="job-content">
              <h2 className="main-heading1 mb15">
                Senior Software Engineer<span class="notify">3</span>
              </h2>
              <div className="flex-container">
                <p>Job type:</p>
                <p>Permanent</p>
              </div>
              <div className="flex-container">
                <p>Minimum Experience</p>
                <p>3-5 years</p>
              </div>
              <div className="interested">
                <div className="intersested-inner" onClick="openJobModal">
                  Interested
                </div>
              </div>
            </div>
            <div className="job-content">
              <h2 className="main-heading1 mb15">
                Senior Software Engineer<span class="notify">3</span>
              </h2>
              <div className="flex-container">
                <p>Job type:</p>
                <p>Permanent</p>
              </div>
              <div className="flex-container">
                <p>Minimum Experience</p>
                <p>3-5 years</p>
              </div>
              <div className="interested">
                <div className="intersested-inner">Interested</div>
              </div>
            </div>

            <div className="job-content">
              <h2 className="main-heading1 mb15">
                Senior Software Engineer<span class="notify">3</span>
              </h2>
              <div className="flex-container">
                <p>Job type:</p>
                <p>Permanent</p>
              </div>
              <div className="flex-container">
                <p>Minimum Experience</p>
                <p>3-5 years</p>
              </div>
              <div className="interested">
                <div className="intersested-inner">Interested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <JobApplication /> */}
    </section>
  );
};

export default Careers;
