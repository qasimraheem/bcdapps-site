import React from "react";
import whiteLogo from "../images/white-logo.png";
import cvIcon from "../images/cv.svg";
import crossIcon from "../images/cross.png";




const Careers = () => {
    return (
        <section className="careers black-bg flex-display" id="careers">
        <div className="nav-component">
          <div className="top-content container">
            <img src={whiteLogo} className="logo"/>
            <a onClick="moveToHome" className="home-btn">Home</a>
          </div>
        </div>
        <div>
          <div className="container  make-center">
            <h1 className="main-heading white-circle circle white-txt">Careers</h1>
            <div className="cv-section">
              <div className="post-cv">
                <h2 className="main-heading1" style="padding-bottom :26px;">Post Your CV For Future Openings.</h2>
                {/* <v-select className="custom-select" :options="options" v-model="jobName"> */}
                  <template slot="option" slot-scope="option">
                    {/* {{ option.label }} */}
                  </template>
    
                {/* </v-select> */}
              </div>
              <div className="horizontal-line"></div>
              <div className="upload-cv">
                <h2 className="main-heading1">Upload your CV</h2>
                <div className="resume-content mt20">
                  <input type="file" name="file" id="file" className="inputfile" />
                  <label className="custom-input-file" for="file">Upload Resume</label>
                  <img className="cv-icon" src={cvIcon} alt="cv"/>
                  <p className="m15">file name</p>
                  <img className="cross-icon m15" src={crossIcon} alt="cancle"/>
                </div>
              </div>
            </div>
            <div className="job-section">
              <div className="job-content">
                <h2 className="main-heading1 mb15">Senior Software Engineer<span class="notify">3</span></h2>
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
                <h2 className="main-heading1 mb15">Senior Software Engineer<span class="notify">3</span></h2>
                <div className="flex-container">
                  <p>Job type:</p>
                  <p>Permanent</p>
                </div>
                <div className="flex-container">
                  <p>Minimum Experience</p>
                  <p>3-5 years</p>
                </div>
                <div className="interested">
                  <div className="intersested-inner">
                    Interested
                  </div>
                </div>
              </div>
    
              <div className="job-content">
                <h2 className="main-heading1 mb15">Senior Software Engineer<span class="notify">3</span></h2>
                <div className="flex-container">
                  <p>Job type:</p>
                  <p>Permanent</p>
                </div>
                <div className="flex-container">
                  <p>Minimum Experience</p>
                  <p>3-5 years</p>
                </div>
                <div className="interested">
                  <div className="intersested-inner">
                    Interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <JobApplication /> */}
      </section>
    )
}