import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import JumboTronComponent from "./JumboTronComponent";
import Footer from "./Footer";
import "./About.css";
import ScrollAnimation from "react-animate-on-scroll";
import ScrollBtn from "./ScrollBtn";

class About extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }
  render() {
    return (
      <div>
        <JumboTronComponent
          title="DR3WEBDEV"
          subtitle="Full Stack Developer utilizing Javascript to build today's apps from the Front End to the Back End."
        />
        <ScrollAnimation animateIn="fadeIn" isVisible={false}>
          <Modal show={this.state.show} onHide={this.handleDismiss}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Us!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Here at DR3WEBDEV we are looking forward to working on bringing
                your online dream a reality.
              </p>
              <h4>
                Email: <small>dr3webdev@gmail.com</small>
              </h4>
              <h4>
                Phone: <small>(917) 944-8056</small>
              </h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleDismiss}>Close</Button>
            </Modal.Footer>
          </Modal>
          <div id="about" className="container-fluid">
            <div className="row">
              <div className="col-sm-8">
                <h2>About DR3WEBDEV</h2>
                <br />
                <h4>
                  DR3WEBDEV started back in the early 2000's. It all started
                  with fixing family and friends computers. Then I learned how
                  to network computers because the knowledge of computer
                  hardware was a must if I wanted my business to grow. After
                  going to college and getting a degree in Computer Networking
                  Systems I decided I wanted to learn to code. This was to make
                  my knowledge of computers full circle. 2011 was the year
                  DR3WEBDEV took full form.
                </h4>
                <br />
                <p>
                  Here at DR3WEBDEV we provide a chance for the small business
                  community to have a presence online. We build custom designed
                  websites and mobile apps using today's best technology. From
                  personal blogs to ecommerce websites DR3WEBDEV will build it
                  for you.
                </p>
                <br />
                <button
                  className="btn btn-default btn-lg"
                  onClick={this.handleShow}>
                  Get in Touch
                </button>
              </div>
              <div className="col-sm-4">
                <span className="glyphicon glyphicon-signal logo" />
              </div>
            </div>
          </div>

          <div className="container-fluid bg-grey">
            <div className="row">
              <div className="col-sm-4">
                <span className="glyphicon glyphicon-globe logo slideanim" />
              </div>
              <div className="col-sm-8">
                <h2>Our Values</h2>
                <br />
                <h4>
                  <strong>MISSION:</strong> Our mission is to ensure that the
                  client and end user get exactly what they asked for in a
                  website or a mobile app. To build custom apps that fit the
                  needs of any business. To educate the client on what is the
                  best solution for growth. To constantly educate our staff so
                  that we remain up-to-date with the changes in Javascript Full
                  Stack Development.{" "}
                </h4>
                <br />
                <p id="vision-para">
                  <strong>VISION:</strong> Our vision requires your vision. Here
                  at DR3WEBDEV we turn your dream into reality. We make sure
                  that whatever venture you set out to accomplish DR3WEBDEV can
                  bring it to life online. Nothing makes us happier than seeing
                  satisfied clients and great feedback from the end user.
                </p>
              </div>
            </div>
          </div>

          {/* <div id="services" className="container-fluid text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                <br />
                <div className="row slideanim">
                    <div className="col-sm-4">
                    <span className="glyphicon glyphicon-off logo-small"></span>
                    <h4>POWER</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                    <span className="glyphicon glyphicon-heart logo-small"></span>
                    <h4>LOVE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                    <span className="glyphicon glyphicon-lock logo-small"></span>
                    <h4>JOB DONE</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
                <br /><br />
                <div className="row slideanim">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-leaf logo-small"></span>
                            <h4>GREEN</h4>
                                <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-certificate logo-small"></span>
                            <h4>CERTIFIED</h4>
                                <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                    <div className="col-sm-4">
                    <span className="glyphicon glyphicon-wrench logo-small"></span>
                    <h4>HARD WORK</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                    </div>
                </div>
                </div> */}
        </ScrollAnimation>
        <ScrollBtn />
        <Footer />
      </div>
    );
  }
}

export default About;
