import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="hero-container">
      {/* Animated Background */}
      <div className="hero-background">
        <motion.div
          className="gradient-orb orb-1"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="gradient-orb orb-2"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <motion.div
          className="gradient-orb orb-3"
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * -40,
          }}
          transition={{ type: "spring", damping: 30 }}
        />
        <div className="grid-overlay"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi, I'm{" "}
          <span className="gradient-text">Milan Khati</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="hero-subtitle">
          Software Engineer | Delivering Digital Solutions
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="hero-description">
          Crafting beautiful, functional, and user-centric digital experiences
          <br />
          with modern web technologies and creative design thinking.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="hero-cta">
          <a href="mailto:milankc4860@gmail.com" className="btn btn-primary">
            <FaEnvelope /> Get In Touch
          </a>
          <a
            href="https://github.com/iammilankhati"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub /> View Work
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="hero-social">
          <a
            href="https://github.com/iammilankhati?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-khati-376a59198/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:milankc4860@gmail.com"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </motion.div>

      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="floating-element element-1"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="tech-badge">React</div>
      </motion.div>

      <motion.div
        className="floating-element element-2"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="tech-badge">Next.js</div>
      </motion.div>

      <motion.div
        className="floating-element element-3"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="tech-badge">Node.js</div>
      </motion.div>
    </div>
  );
};

export default Hero;
