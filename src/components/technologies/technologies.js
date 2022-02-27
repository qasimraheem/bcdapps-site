import React from "react";
import "./technologies.scss";
import rectangleWIcon from "../../images/RectangleWhite.svg";
import golangIcon from "../../images/golang.svg";
import rectangleIcon from "../../images/Rectangle.svg";
import reactjsIcon from "../../images/reactJs.svg";
import angularjsIcon from "../../images/AngulaJs.svg";
import androidRobotIcon from "../../images/Android-robot.png";
import iosIcon from "../../images/ios.png";
import vueIcon from "../../images/vue.png";
import rectangleBIcon from "../../images/RectangleBlack.svg";
import nodejsIcon from "../../images/ndeJS.svg";




const Technologies = () => {
    return (
        <section id="technologies" className="flex-display technologies black-bg">
    <div className="tec-container container">
      <div className="technology">
        <h1 className="heading">Technologies</h1>
        <p>loreum ipsum has the industry loreum ipsum has the industry loreum ipsum has the industry  </p>
      </div>
      <div className="apps">
        <div className="app app1">
          <img className="back-rect" src={rectangleWIcon} />
          <img className="neg-mgn" src={golangIcon} />
          <figure className="vue">
            <figcaption>Golang</figcaption>
            <img src={rectangleIcon} alt="rect"/>
          </figure>
        </div>
        <div className="app app2">
          <img className="back-rect" src={rectangleWIcon}/>
          <figure className="vue">
            <figcaption>React</figcaption>
            <img src={rectangleIcon} alt="rect"/>
          </figure>
          <img className="neg-mgn" src={reactjsIcon} />
        </div>
        <div className="app app3">
          <img className="back-rect" src={rectangleWIcon} />
          <img className="neg-mgn" src={angularjsIcon} />
          <figure className="vue">
            <figcaption>Angular</figcaption>
            <img src={rectangleIcon} alt="rect"/>
          </figure>
        </div>
        <div className="app app3 app6">
          <img className="back-rect" src={rectangleWIcon} />
          <img className="neg-mgn" style={{width:'75px'}} src={androidRobotIcon} />
          <figure className="vue">
            <figcaption>Android</figcaption>
            <img src={rectangleIcon} alt="rect"/>
          </figure>
        </div>
        <div className="app app3 app7">
          <img className="back-rect" src={rectangleWIcon}/>
          <img className="neg-mgn" style={{width:'69px'}} src={iosIcon} />
          <figure className="vue">
            <figcaption>iOS</figcaption>
            <img src={rectangleIcon} alt="rect"/>
          </figure>
        </div>
        <div>
          <div className="app app4 rot-90">
            <img className="back-rect" src={rectangleWIcon} />
            <img className="reverse-rot neg-mgn" src={vueIcon} />
            <figure className="vue reverse-rot">
              <figcaption>Vue.js</figcaption>
              <img src={rectangleIcon} alt="rect"/>
            </figure>
          </div>
          <div>
            <div className="app app5 rot-90">
              <img className="back-rect" src={rectangleBIcon} />
              <img className="reverse-rot neg-mgn" src={nodejsIcon} />
              <figure className="vue reverse-rot">
                <figcaption>node.js</figcaption>
                <img src={rectangleIcon} alt="rect"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Technologies;