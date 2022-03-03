import React from "react";
import "./about.scss";
import experienceIcon from "../../images/experience.svg";
import satisfyIcon from "../../images/satisfied-clients.svg";
import projectCompletedIcon from "../../images/project-completed.svg";
import projectCompleteIcon from "../../images/project-completed.svg";
import employeeCountIcon from "../../images/employee-count.svg";
import reqIcon from "../../images/requirement.svg";
import circleIcon from "../../images/circles.svg";
import lineIcon from "../../images/line.svg";
import analysisIcon from "../../images/analysis.svg";
import projectPlanIcon from "../../images/project plan.svg";
import wireframeIcon from "../../images/wireframe.svg";
import designIcon from "../../images/design.svg";
import serverSideIcon from "../../images/server side.svg";
import testingIcon from "../../images/testing.svg";
import deploymentIcon from "../../images/deployment.svg";
import configManIcon from "../../images/config-managemet.svg";

const About = () => {
  return (
    <section
      id="about"
      className="about black-bg flex-display about-section section"
    >
      <div className="container custom-grid">
        <div className="about-section">
          <div className="about-left white-txt">
            <div className="size-it">
            <h1 className="circle pad-all1 main-heading">About Us</h1>
            </div>
            <p className="about-us-para" style={{lineHeight:"17px"}}>
              Professional developers, designers and marketers working together
              to provide finest blockchain solutions and marketing services at
              economical prices.
            </p>
          </div>
          <div className="about-right">
            <div className="inner-container">
              <div className="polygone">
                <div className="polygone-content">
                  <img src={experienceIcon} alt="experience" />
                  <h1 className="m5">5+</h1>
                  <p>Year Of Experience</p>
                </div>
              </div>
              <div className="polygone box1">
                <div className="polygone-content">
                  <img src={satisfyIcon} alt="satisfied-clients" />
                  <h1 className="m5">30+</h1>
                  <p>Satisfied Clients</p>
                </div>
              </div>
              <div className="polygone box2">
                <div className="polygone-content">
                  <img src={projectCompletedIcon} alt="project-completed" />
                  <h1 className="m5">50+</h1>
                  <p>Project Completed</p>
                </div>
              </div>
              <div className="polygone box2">
                <div className="polygone-content">
                  <img src={projectCompleteIcon} alt="project-completed" />
                  <h1 className="m5">50+</h1>
                  <p>Project Completed</p>
                </div>
              </div>
              <div className="polygone box3 polygon2">
                <div className="polygone-content">
                  <img src={employeeCountIcon} alt="employee-count" />
                  <h1 className="m5">20+</h1>
                  <p>Employee Count</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-section">
          <h2>How we work</h2>
          <div className="work-content">
            <div className="content abs-position">
              <div className="top-content rotate-90 odd abs-position">
                <img src={reqIcon} alt="requirement" />
                <p style={{marginBottom:"0rem"}}>Requirement</p>
                <p>Engineering</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-top abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line1"></div>
            </div>

            <div className="content2 abs-position">
              <div className="top-content2 rotate-90 even abs-position">
                <img src={analysisIcon} alt="analysis" />
                <p>Analysis</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-bot abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line2 abs-position"></div>
            </div>

            <div className="content3 abs-position">
              <div className="top-content3 rotate-90 odd abs-position">
                <img src={projectPlanIcon} alt="project plan" />
                <p>Project Plan</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-top abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line1"></div>
            </div>

            <div className="content4 abs-position">
              <div className="top-content4 rotate-90 even abs-position">
                <img src={wireframeIcon} alt="wireframe" />
                <p>Wireframe</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-bot abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line2"></div>
            </div>

            <div className="content5 abs-position">
              <div className="top-content5 rotate-90 odd abs-position">
                <img src={designIcon} alt="design" />
                <p>Design</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-top abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line1"></div>
            </div>

            <div className="content6 abs-position">
              <div className="top-content6 rotate-90 even abs-position">
                <img src={serverSideIcon} alt="server side" />
                <p>Development</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-bot abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line2"></div>
            </div>

            <div className="content7 abs-position">
              <div className="top-content7 rotate-90 odd abs-position">
                <img src={testingIcon} alt="testing" />
                <p>Testing</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-top abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line1"></div>
            </div>

            <div className="content8 abs-position">
              <div className="top-content8 rotate-90 even abs-position">
                <img src={deploymentIcon} alt="deployment" />
                <p>Deployment</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-bot abs-position"
                src={lineIcon}
                alt="line"
              />
              <div className="custom-line hor-line2"></div>
            </div>

            <div className="content9 abs-position">
              <div className="top-content9 rotate-90 odd abs-position">
                <img src={configManIcon} alt="config managemet" />
                <p style={{marginBottom:"0rem"}}>Configuration</p>
                <p>Management</p>
              </div>
              <img src={circleIcon} alt="circle" />
              <img
                className="line-top abs-position"
                src={lineIcon}
                alt="line"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
