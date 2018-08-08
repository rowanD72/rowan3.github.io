import React, { Component } from "react";
import { Jumbotron, Button, Modal } from "react-bootstrap";
import "./JumboTronComponent.css";

class JumboTronComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
          <p>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
              Hire Me
            </Button>
          </p>
        </Jumbotron>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Resume</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>David Rowan</h2>
            <h2>Arlington, TX., 76014</h2>
            <h2>
              Email:<small>rowand823@gmail.com</small>
            </h2>
            <h2>
              Website:<small>rowan3webdev.com</small>
            </h2>
            <h3>Summary</h3>
            <p>
              Exceptionally focused and reliable Front-End Web Developer with a
              superb record of problem solving skills. Thoroughly knowledgeable
              in current and evolving trends in Internet and web-based
              technologies. Adept at managing multiple projects simultaneously
              with complete accuracy and effectiveness. I pride myself in
              providing great customer service and communication. Looking for an
              opportunity to join a reputable company that will allow my
              knowledge and skills in web development to grow.
            </p>
            <h3>Professional Experience</h3>
            <br />
            <h4>Front End Developer</h4>
            <h4>DR3WEBDEV</h4>
            <h4>Arlington, Tx.</h4>
            <span>1/2015-Present</span>
            <ul>
              <li>
                Manage web development projects related to retail and the Hair
                Care Industry.
              </li>
              <li>
                Work in multiple industries refactoring code using web
                development tools and languages.
              </li>
              <li>
                Develop multi device, user friendly responsive websites in a
                timely manner using HTML, CSS3, and JavaScript.
              </li>
              <li>
                Work with Frameworks to include: jQuery, Twitter Bootstrap,
                ReactJS, Angular2-5, WordPress, and NodeJS.
              </li>
              <li>
                Perform test on code to insure compatibility with all web
                browser versions including legacy browsers such as IE8, IE7.
              </li>
              <li>Conduct Unit testing utilizing Jasmin and Karma.</li>
              <li>
                Build WordPress websites for personal, blog, and business
                purposes.{" "}
              </li>
              <li>
                Conduct extensive research for the best plugins to provide for
                full functionality for users.
              </li>
              <li>
                Read documentation to ensure updates to out-of-date plugins are
                safe and compatible for website or blog.
              </li>
              <li>Provide fixes to broken and/or outdated code for clients.</li>
              <li>
                Communicate effectively with the client to insure a complete and
                productive website.
              </li>
            </ul>
            <h3>
              Environment:<small>
                React JS, Redux, JQuery, Google Material, Bootstrap, CSS3,
                HTML5, JSON, JavaScript, JSX, MongoDB, SQL, PHP, and Ajax.
              </small>
            </h3>
            <br />
            <h4>Network Engineer</h4>
            <h4>CenturyLink</h4>
            <h4>Monroe, LA.</h4>
            <span>1/2010-6/2010</span>
            <ul>
              <li>
                Assisted in scrubbing ATM network change to an Ethernet network.{" "}
              </li>
              <li>
                Developed VPN using Calix and AFC LET layer 2 switches/bridges
                and layer 3 routers for quality IPSEC communications.
              </li>
              <li>
                Communicated with field techs on a daily basis to maintain the
                integrity of CenturyLink RT’s.
              </li>
            </ul>
            <h3>
              Environment:{" "}
              <small>
                {" "}
                Microsoft Windows XP, Calix Switch, and AFC LET Switch
              </small>
            </h3>
            <br />
            <h4>Jr. Web Developer</h4>
            <h4>IP3</h4>
            <h4>Saginaw, MI.</h4>
            <span>8/2008-12/2008</span>
            <ul>
              <li>
                Assisted a team of developers with the production of IP3’s
                educational compact disc and website using HTML and CSS.
              </li>
              <li>
                Researched network security tools to add to educational packages
                using Windows XP.
              </li>
              <li>
                Added new links to website. Cleaned up old code as well as
                broken links no longer available for network security tools.
              </li>
            </ul>
            <h3>
              Environment:{" "}
              <small>Windows XP Pro, Microsoft FrontPage, HTML, and CSS.</small>
            </h3>

            <h3>Education</h3>

            <h4>ITT Technical Institute</h4>
            <h4>Swartz Creek, MI.</h4>
            <p>A.A.S Degree Computer Network G.P.A 3.2 </p>
            <br />

            <h3>Technical Skills</h3>
            <h5>
              Languages:<small> Proficient in: HTML5, CSS3, JavaScript.</small>
            </h5>
            <h5>
              Frameworks:<small>
                Bootstrap3/4, jQuery, Angular 2/4, ReactJS, and NodeJS.
              </small>
            </h5>
            <h5>
              OS Systems/Applications:<small>
                Windows Server 2012, Windows 7, Windows 8, Windows 10, Red Hat
                Fedora, Linux{" "}
              </small>
            </h5>
            <h5>
              Unit Testing: <small> Jasmine and Karma</small>
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default JumboTronComponent;
