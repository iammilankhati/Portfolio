import React, { useEffect } from "react";
import { Features, Skills } from "../components/Data";
// import myphoto from '../assets/images/logo1.svg';
import mypic from "../assets/images/myphoto.jpg";
import ProgressBar from "../components/ProgressBar";
import Aos from "aos";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);
  return (
    <div className="wrapper-about">
      <section className="about" id="about">
        <h1 data-aos="flip-right">
          ABOUT
          <div className="underline"></div>
        </h1>

        <div className="features">
          {Features.map((feature) => {
            return (
              <div className="feature" key={feature.id} data-aos="flip-right">
                <div className="icon">
                  <h1>{feature.icon}</h1>
                </div>
                <h2 className="feature_name">{feature.name}</h2>
                <p className="feature_text">{feature.text}</p>
              </div>
            );
          })}
        </div>
        <div className="me">
          <div className="me_info">
            <div className="me_info--image" data-aos="flip-left">
              <img src={mypic} alt="milankhati" className="myphoto" />
            </div>
            <h2 className="me_info--name">Who I am?</h2>
            <p>
              I'm a Software Developer from Kathmandu, Nepal. I Have serious
              passion for making product from scratch and building things
              beautiful, secure, intuitive, reponsive,fast and dynamic.
              <Link to="#contact">Let's make something special</Link>
            </p>
          </div>
          <div className="me_skills">
            <div className="me_skill">
              {Skills.map((skill) => {
                return (
                  <div className="me_skill--bar" key={skill.id}>
                    <div className="b name_bar">{skill.skill}</div>
                    <div className="bar_cover">
                      <ProgressBar width={skill.percentage} />
                    </div>

                    <div className="b percentage">{skill.percentage}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
