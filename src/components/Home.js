import React, { Component } from "react";
import { Col, Grid, Row } from "react-bootstrap";
import JumboTronComponent from "./JumboTronComponent";
import "./Home.css";
import Footer from "./Footer";
import { Animated } from "react-animated-css";
import ScrollBtn from "./ScrollBtn";

class Home extends Component {
  render() {
    return (
      <div>
        <JumboTronComponent
          title="DR3WEBDEV"
          subtitle="Full Stack Developer utilizing Javascript to build today's apps from the Front End to the Back End."
        />
        <Grid>
          <Row className="show-grid text-center" id="top-grid">
            <Animated
              animationIn="bounceIn"
              animationOut="fadeOut"
              isVisible={true}>
              <Col xs={12} sm={4} md={4}>
                <h3>
                  <i className="fab fa-react" />ReactJS Apps
                </h3>
                <hr />
                <p>
                  React JS is a Javascript library that has the power and
                  performance of many of today's Javascript frameworks. Many
                  apps on the internet today are built using React JS for it's
                  ease of UI interfaces.
                </p>
              </Col>
            </Animated>

            <Animated
              animationIn="bounceIn"
              animationOut="fadeOut"
              isVisible={true}>
              <Col xs={12} sm={4} md={4}>
                <h3>
                  <i className="fab fa-js" />Javascript
                </h3>
                <hr />
                <p>
                  Javascript is growing faster than ever believed. From ES6 to
                  React JS, Javascript has made it self a household name to
                  developers. Now with the growth and power of Javascript a
                  developer can now build apps full stack using Javascript and
                  it's many frameworks.
                </p>
              </Col>
            </Animated>

            <Animated
              animationIn="bounceIn"
              animationOut="fadeOut"
              isVisible={true}>
              <Col xs={12} sm={4} md={4}>
                <h3>
                  <i className="fab fa-css3-alt" />CSS
                </h3>
                <hr />
                <p>
                  CSS today is more powerful than ever. No longer does a
                  developer have to use a CSS framework, now CSS have many of
                  the tools frameworks came with. This allows for the developer
                  to be able to scale down a website or mobile app to allow
                  better performance.
                </p>
              </Col>
            </Animated>
          </Row>
        </Grid>

        <br />

        <Grid>
          <Row className="show-grid" id="subsection1">
            <h1>Enjoyment of Javascript Coding</h1>
            <Col xs={12} sm={6}>
              <p>
                Javascript has always been my favorite scripting language. I
                have a fondness for it power and for it's complexity when
                writing code. Javascript is some what like the army swiss knife,
                it can do almost everything when it comes to building
                applications and website. Just over 20 years young, Javascript
                has a way's to go when it comes to growth.
              </p>
            </Col>
            <Col xs={12} sm={6}>
              <p>
                The possibilities that are to come using Javascript is endless.
                With the change of technology and the way society depends upon
                it daily, Javascript will play a far more role in tomorrow's
                technology than it plays in today's technology. Houses, cars,
                appliances, health and Robots will all have a need for
                Javascript. I'm excited to be able to make tomorrow a better day
                for society using Javascript.
              </p>
            </Col>
          </Row>
        </Grid>
        <br />
        <ScrollBtn />
        <Footer />
      </div>
    );
  }
}

export default Home;
