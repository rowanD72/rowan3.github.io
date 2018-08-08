import React, { Component } from "react";
import JumboTronComponent from "./JumboTronComponent";
import Footer from "./Footer";
import "./Projects.css";
import { Animated } from "react-animated-css";
import ScrollBtn from "./ScrollBtn";

class Projects extends Component {
  render() {
    return (
      <div>
        <JumboTronComponent
          title="DR3WEBDEV"
          subtitle="Full Stack Developer utilizing Javascript to build today's apps from the Front End to the Back End."
        />
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}>
          <div class="page-header">
            <h1>
              PROJECTS <small>More to come...</small>
            </h1>
          </div>
        </Animated>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <img src="../../public/assets/laptop_code.jpeg" alt="laptop" />
              <div className="caption">
                <h3>DR3WEBDEV Portfolio</h3>
                <p>...</p>
                <p>
                  <a
                    href="https://github.com/rowanD72/dr3-portfolio"
                    className="btn btn-primary btn-block"
                    role="button">
                    Click
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <img src="../../public/assets/pexels-photo.jpeg" alt="laptop" />
              <div className="caption">
                <h3>Angular Project</h3>
                <p>...</p>
                <p>
                  <a
                    href="https://github.com/rowanD72/angular-project"
                    className="btn btn-primary btn-block"
                    role="button">
                    Click
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <img
                src="../../public/assets/pexels-photo-905873.jpeg"
                alt="flat-desk"
              />
              <div className="caption">
                <h3>Random Quotes Project</h3>
                <p>...</p>
                <p>
                  <a
                    href="https://github.com/rowanD72/random-quotes"
                    className="btn btn-primary btn-block"
                    role="button">
                    Click
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <img
                src="../../public/assets/pexels-photo-669996.jpeg"
                alt="desktop"
              />
              <div className="caption">
                <h3>Coming Soon</h3>
                <p>...</p>
                <p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block"
                    role="button"
                    disabled>
                    Click
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <img
                src="../../public/assets/pexels-photo-270360.jpeg"
                alt="code"
              />
              <div className="caption">
                <h3>Coming Soon</h3>
                <p>...</p>
                <p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block"
                    role="button"
                    disabled>
                    Click
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="thumbnail">
              <img
                src="../../public/assets/apple-iphone-smartphone-desk.jpg"
                alt="apple-smartphone"
              />
              <div className="caption">
                <h3>Coming Soon</h3>
                <p>...</p>
                <p>
                  <a
                    href="#"
                    className="btn btn-primary btn-block"
                    role="button"
                    disabled>
                    Click
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollBtn />
        <Footer />
      </div>
    );
  }
}

export default Projects;
