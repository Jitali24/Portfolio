import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import "./App.css";
// import CardImage from "../src/assests/background.jpg";
import Card1 from "../src/assests/html.png";
import Card2 from "../src/assests/css.png";
import Card3 from "../src/assests/java.png";
import Card4 from "../src/assests/js.png";
import Card5 from "../src/assests/react.png";
import Card6 from "../src/assests/node.png";
import Card7 from "../src/assests/Saas.png";
import Card8 from "../src/assests/django.png";
import Card9 from "../src/assests/firebase.png";
import Card10 from "../src/assests/mongodb.png";
import Card11 from "../src/assests/sql.png";
import ProfileImage from "../src/assests/jitali.png";
//import CursorTracker from "./components/Cursor";

import linkedin from "../src/assests/linkedin.png";
import github from "../src/assests/github.png";
// import contact from "../src/assests/contact.png";
import instagram from "../src/assests/instagram.png";
import Contact from "../src/assests/Contact us.gif";

import Pommelogy from "../src/assests/Pommelogy.png";
import Skillsage from "../src/assests/Skillsage.png";
import NewsApp from "../src/assests/NewsApp.png";
import Skola from "../src/assests/Skola.png";
import Fintrek from "../src/assests/Fintrek.png";

import Coding from "../src/assests/Coding.gif";

import { motion } from "framer-motion";
// import Blog from "./Blog";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const messagesRef = useRef(null);

  // const [posts] = useState([
  //   {
  //     title: "Building a Modern Portfolio with React",
  //     date: "March 10, 2025",
  //     summary:
  //       "Learn how to build a modern and responsive portfolio using React and GSAP.",
  //     link: "#",
  //   },
  //   {
  //     title: "Mastering CSS Animations",
  //     date: "March 5, 2025",
  //     summary: "A deep dive into creating smooth and engaging CSS animations.",
  //     link: "#",
  //   },
  //   {
  //     title: "Getting Started with Firebase",
  //     date: "February 28, 2025",
  //     summary:
  //       "An introduction to Firebase and how to integrate it into your projects.",
  //     link: "#",
  //   },
  // ]);

  useEffect(() => {
    const messages = [
      { text: "Hi, Jitali Hadiya here.", color: "#FF6347" }, // English
      { text: "Bonjour, Jitali Hadiya ici.", color: "#6A5ACD" }, // French
      { text: "Hola, Jitali Hadiya aquí.", color: "#FF4500" }, // Spanish
      { text: "Hallo, Jitali Hadiya hier.", color: "#2E8B57" }, // German
      { text: "नमस्ते, मैं जिताली हड़िया हूं।", color: "#DAA520" }, // Hindi
      { text: "こんにちは、ジタリ ハディヤです。", color: "#FF69B4" }, // Japanese
      { text: "你好，Jitali Hadiya 在这里。", color: "#20B2AA" }, // Chinese
    ];

    // Header Animation
    gsap.fromTo(
      ".header-content",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    );

    // Skills Animation
    gsap.fromTo(
      ".skill-icon",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 80%",
        },
      }
    );

    // Experience Animation
    gsap.fromTo(
      ".experience-card",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
        },
      }
    );

    // Project Section Animation
    gsap.fromTo(
      ".project-image",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-section",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".project-content",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-section",
          start: "top 75%",
        },
      }
    );

    // Welcome Message Animation
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      const { text, color } = messages[messageIndex];
      const messageElement = messagesRef.current;
      if (messageElement) {
        messageElement.innerText = text;
        messageElement.style.color = color;
      }
      messageIndex = (messageIndex + 1) % messages.length;
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(messageInterval);
  }, []);

  const experiences = [
    {
      role: "Software Development Intern",
      company: "University of Windsor",
      period: "2024",
      description:
        "Worked on web-based application development using full-stack technologies, focusing on front-end interfaces and back-end integration. Participated in end-to-end testing, debugging, and optimizing application performance.",
    },
    {
      role: "Full-Stack Developer",
      company: "Toshal Infotech",
      period: "2023",
      description:
        "Developed full-stack web and mobile applications using ReactJS for front-end and NodeJS for back-end development, integrating custom middleware and RESTful APIs. Consulted with clients to understand requirements, created mock-ups, and performed end-to-end testing and debugging.",
    },
    {
      role: "Front-End Developer",
      company: "Krtya Softwares",
      period: "2022",
      description:
        "Designed and integrated user-friendly front-end interfaces using ReactJS, with a focus on responsive design and performance. Collaborated with back-end developers to ensure seamless API integration and conducted quality control and testing.",
    },
  ];

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x67chzn", // Replace with your EmailJS Service ID
        "template_kp7vt6i", // Replace with your EmailJS Template ID
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        "tXcZUVjlnHlkWNXQM" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionMessage("Information submitted!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setSubmissionMessage("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          {/* Hamburger/Close icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuActive ? "✕" : "☰"}
          </div>

          {/* Navigation menu */}
          <nav className={menuActive ? "nav-active" : ""}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Projects</a>
              </li>
              <li>
                <a href="#home">Jitali Hadiya</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              {/* <li>
                <a href="#blog">Blog</a>
              </li> */}
              <li>
                <a href="#contacts">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Background Object */}
      <div className="background">
        <div className="revolving-object">
          <img src={Coding} alt="Coding" />
        </div>
      </div>

      {/* Content */}
      <div className="swipe-up-container">
        <h2 className="swipe-up-text" ref={messagesRef}>
          Hi, Jitali Hadiya here.
        </h2>
        <h3 className="swipe-up-text">
          <i>Code in motion, ideas in creation</i>
        </h3>
      </div>

      {/* About Section */}
      <div className="about-container" id="about">
        {/* Profile Image */}
        <img src={ProfileImage} alt="Jitali Hadiya" className="about-image" />

        {/* Content Area */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi, I’m Jitali Hadiya - a developer with a passion for creating
            seamless digital experiences. My journey from code enthusiast to
            professional developer is driven by curiosity and a love for
            innovation.
          </p>

          <p>
            With expertise in React, Node.js, and full-stack development, I
            thrive on building efficient and impactful solutions. When I’m not
            coding, you can find me exploring new places or sipping on coffee.
          </p>

          <a
            href="https://drive.google.com/file/d/1m1cWXXwp4VKfw7tjwnfxD2Zg_krMDyez/view?usp=drive_link"
            download="Jitali_Hadiya_Resume.pdf"
            className="about-link"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Project Section */}
      <div className="project-section" id="work">
        <div className="title">
          <h1>Projects</h1>
          <h3>
            Explore my journey through projects, experiences, and the drive that
            shapes my work
          </h3>
        </div>

        {/* Fintrek */}
        <div className="projects alternate">
          <div className="project-card">
            <img
              src={Fintrek}
              alt="Project: Fintrek"
              className="project-image"
            />
            <div className="hover-list">
              <ul>
                <li>React JS</li>
                <li>Vite</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
          <div className="project-content">
            <h1>Fintrek</h1>
            <h2>
              Fintrek is a modern finance management platform that empowers
              users to take control of their finances. It offers smart expense
              tracking, intuitive visual analytics, and enterprise-grade
              security, all within a sleek, responsive interface. Fintrek
              delivers real-time updates and smooth animations, making financial
              management both efficient and accessible
            </h2>
            <div className="learn-more">
              <br></br>
              <a href="https://fintrek.vercel.app/" className="learn-more-link">
                View App →
              </a>
            </div>
          </div>
        </div>

        {/* Pommelogy */}
        <div className="projects">
          <div className="project-card">
            <img
              src={Pommelogy}
              alt="Project: Apple Variety Identification Application"
              className="project-image"
            />
            <div className="hover-list">
              <ul>
                <li>React JS</li>
                <li>Python</li>
                <li>ML</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div className="project-content">
            <h1>Pommelogy</h1>
            <h2>
              A web-based tool that helps users identify apple varieties using
              machine learning and a detailed database. The app analyzes visual
              features like skin color, size, and shape to predict varieties,
              providing information on origin, flavor, and usage. Built with
              React.js, it features a user-friendly, responsive interface,
              making it accessible for growers and enthusiasts.
            </h2>
            <div className="learn-more">
              <br></br>
              <a
                href="https://drive.google.com/file/d/1WDsu4ZqcsBNvX8Eon7kA_YuSOEZJTACh/view?usp=sharing"
                className="learn-more-link"
              >
                View App →
              </a>
            </div>
          </div>
        </div>

        {/* SkillSage */}
        <div className="projects alternate">
          <div className="project-card">
            <img
              src={Skillsage}
              alt="Project: Skillsage"
              className="project-image"
            />
            <div className="hover-list">
              <ul>
                <li>React Native</li>
                <li>Django</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div className="project-content">
            <h1>SkillSage</h1>
            <h2>
              A React Native-based mobile application designed to help users
              discover and develop new skills. The app provides personalized
              skill-building paths, resources, and progress tracking. It
              features a clean, intuitive interface and cross-platform
              compatibility, delivering a seamless user experience on both iOS
              and Android devices.
            </h2>
            <div className="learn-more">
              <br />
              <a
                href="https://drive.google.com/file/d/1k_jwsxWCV7jCRS6ovpys5JlobskMOGln/view?usp=drive_link"
                className="learn-more-link"
              >
                View App →
              </a>
            </div>
          </div>
        </div>

        {/* Skola */}
        <div className="projects">
          <div className="project-card">
            <img
              src={Skola}
              alt="Project: Skillsage"
              className="project-image"
            />
            <div className="hover-list">
              <ul>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="project-content">
            <h1>Skola</h1>
            <h2>
              Skola is a web-based Learning Management System (LMS) that
              streamlines the educational process for both educators and
              students. It enables course creation, progress tracking, real-time
              communication, and offers a responsive interface for a smooth and
              interactive learning experience.
            </h2>
            <div className="learn-more">
              <br></br>
              <a
                href="https://lms-skola.vercel.app/"
                className="learn-more-link"
              >
                View App →
              </a>
            </div>
          </div>
        </div>

        {/* News App */}
        <div className="projects alternate">
          <div className="project-card">
            <img
              src={NewsApp}
              alt="Project: News App"
              className="project-image"
            />
            <div className="hover-list">
              <ul>
                <li>JavaScript</li>
                <li>Script using AI</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="project-content">
            <h1>News App</h1>
            <h2>
              A voice-enabled news app that integrates Alan AI to provide
              real-time news updates through voice commands. Users can interact
              hands-free to search and filter news by categories, making the app
              accessible and easy to use. This project included technologies
              such as Alan AI SDK, JavaScript, APIs for news data.
            </h2>
            <div className="learn-more">
              <br></br>
              <a
                href="https://alan-bot-ai.netlify.app/"
                className="learn-more-link"
              >
                View App →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technology Section */}
      <div className="cards-container">
        <div className="title">
          <h1>Tools & Technology</h1>
          <h3>
            Dive into the tools and technologies that fuel my development
            journey
          </h3>
        </div>
        {/* Card items */}
        <div className="cards">
          {/* Card 1 */}
          <div className="card">
            <img src={Card1} alt="HTML" className="skill-icon" />
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src={Card2} alt="CSS" className="skill-icon" />
          </div>
          {/* Card 3 */}
          <div className="card">
            <img src={Card3} alt="Java" className="skill-icon" />
          </div>
          {/* Card 4 */}
          <div className="card">
            <img src={Card4} alt="JavaScript" className="skill-icon" />
          </div>
          {/* Card 5 */}
          <div className="card">
            <img src={Card5} alt="React JS" className="skill-icon" />
          </div>
          {/* Card 6 */}
          <div className="card">
            <img src={Card6} alt="Node JS" className="skill-icon" />
          </div>
          {/* Card 7 */}
          <div className="card">
            <img src={Card7} alt="SaaS" className="skill-icon" />
          </div>
          {/* Card 8 */}
          <div className="card">
            <img src={Card8} alt="Django" className="skill-icon" />
          </div>
          {/* Card 9 */}
          <div className="card">
            <img src={Card9} alt="Django" className="skill-icon" />
          </div>
          {/* Card 10 */}
          <div className="card">
            <img src={Card10} alt="Django" className="skill-icon" />
          </div>
          {/* Card 11 */}
          <div className="card">
            <img src={Card11} alt="Django" className="skill-icon" />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="timeline-section experience-section" id="experience">
        <h1>Experience</h1>
        <h3>
          Explore the projects and roles that have shaped my development
          journey, each one a step towards creating impactful digital solutions.
        </h3>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item experience-card ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div className="timeline-content">
                <div className="circle"></div>
                <h2>{exp.role}</h2>
                <h3>{exp.company}</h3>
                <span>{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog */}
      {/* <section className="blog-section" id="blog">
        <Blog posts={posts} />
      </section> */}

      {/* Contact Section */}
      <div className="contact-section" id="contacts">
        <h1>Contact Me</h1>
        <p>
          Whether you want to get in touch, talk about a project collaboration,
          or just say hi, feel free to drop a message!
        </p>

        <div className="contact-body">
          <div className="contact-body-img">
            <img src={Contact} alt="Contact" />
          </div>

          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="input-group">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {submissionMessage && (
                <p className="submission-message">{submissionMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about-footer">
            <h1>Let's Connect!</h1>
            <p>
              Ready to start a project or just want to say hello? Get in touch!
            </p>
          </div>

          <div className="footer-section contact-footer">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <i className="fas fa-envelope">jitalihhadiya@gmail.com</i>
                {/* <a href="/"></a> */}
              </li>
              {/* <li>
                <i className="fas fa-phone">+1 226 961 8754</i>
                {/* <a href="/"></a> 
              </li>
              <li>
                <i className="fas fa-map-marker-alt">Windsor, ON</i>
              </li> */}
            </ul>
          </div>

          <div className="footer-section social-footer">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/jitali-hadiya/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="social-image" />
              </a>
              <a
                href="https://github.com/Jitali24"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub" className="social-image" />
              </a>
              <a
                href="https://www.instagram.com/__sweet__angelhrtz__"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="social-image" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Jitali Hadiya | Designed with passion and code</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
