import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import JumboTronComponent from "./JumboTronComponent";
import Footer from "./Footer";
import "./Contact.css";
import ScrollBtn from "./ScrollBtn";

class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    //Handle state
    this.state = {
      show: false
    };
  }
  render() {
    //close the Modal
    let close = () => {
      this.setState({ show: false });
    };
    return (
      <div>
        <JumboTronComponent
          title="DR3WEBDEV"
          subtitle="Full Stack Developer utilizing Javascript to build today's apps from the Front End to the Back End."
        />
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                src="../../public/assets/man-silhouette-head.jpg"
                alt="Dave"
              />
              <div className="container">
                <h2>David Rowan III</h2>
                <p className="title">CEO &amp; Founder</p>
                <p>
                  David Rowan III<br />Freelance ReactJS/Javasrcipt Full Stack
                  Developer
                </p>
                <p>dr3webdev@gmail.com</p>
                <p>
                  <button
                    className="button"
                    onClick={() => this.setState({ show: true })}>
                    BIO
                  </button>
                </p>
                <Modal
                  show={this.state.show}
                  onHide={close}
                  container={this}
                  aria-labelledby="contained-modal-title">
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                      DR3WEBDEV
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>BIO:</h4>
                    <p>
                      First I would like to welcome you to DR3WEBDEV website. My
                      passion for computers and writing code goes back to my 7th
                      grade year of jr. high school. One of my electives was a
                      computer courses. We learned about the history of the
                      computer, which blew my mind to know that a box with a
                      screen and wires could actually build a virtual world with
                      only simple commands.My first program was written on a
                      Apple IIe using BASIC.
                    </p>
                    <p>
                      I was hooked and I knew then what I wanted to do in life.
                      I wanted to become a coder. I wanted to build programs
                      that makes life better for humanity. I read everything I
                      could get my hands on that dealt with computers. My family
                      couldn't afford one so every chance I got I went to the
                      mall so that I could go to Radio Shack to play on the
                      Tandy 1000.Pretty soon the workers knew me by name.
                    </p>
                    <p>
                      After graduating from college in Computer Networking
                      Systems I decided to learn web development, which led me
                      to javascrpt. I feel deeply in love with the complexity of
                      javascript as well as it's power over the DOM. Now that I
                      have my degree and a base foundation for web development,
                      I'm now ready to set out to life my dream, the dream of
                      being a PROGRAMMER!
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
          <ScrollBtn />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
