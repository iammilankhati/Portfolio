import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

import { FaGithubSquare, FaLinkedin, FaMailBulk } from "react-icons/fa";
const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="landing__content">
        <div className="social-links">
          <ul className="links-wrapper">
            <li className="links-item">
              <a
                href="https://github.com/iammilankhati?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaGithubSquare className="social-icon" />
              </a>
            </li>
            <li className="links-item">
              <a
                href="https://www.linkedin.com/in/milan-khati-376a59198/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaLinkedin className="social-icon" />
              </a>
            </li>
            <li className="links-item">
              <a
                href="mailto:milankc4860@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FaMailBulk className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
        <h1 className="landing__content--greet">
          Hello, I'm{" "}
          <span className="landing__content--name">
            <h3 style={{ display: "inline" }}>Milan Khati 👋</h3>
          </span>
        </h1>
        <h1 className="landing__content--title" style={{ marginTop: "15px" }}>
          I'm a Software Developer.
        </h1>

        <div className="motivational-quotes" style={{}}>
          <p>"Kindness costs nothing 😊"</p>
          <p>"Be humble"</p>
          <p>"Coding the future, one line at a time"</p>
        </div>
        <Link to="#about" className="call_to_action">
          <motion.button>
            View my work <AiOutlineArrowRight className="arrow-right" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
