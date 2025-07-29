import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Navbar />

      <motion.section id="home" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>Gokul N</h1>
        <p>Cybersecurity Engineering Student | Developer | Penetration Testing Enthusiast</p>
      </motion.section>

      <motion.section id="about" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
        <h2>About Me</h2>
        <p>
          I’m Gokul, a BE CSE (Cyber Security) student at RMK College of Engineering and Technology.
          I'm passionate about ethical hacking, penetration testing, and secure software development.
          My goal is to contribute to building a safer digital world.
        </p>
      </motion.section>

      <motion.section id="projects" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
        <h2>Projects</h2>
        <ul>
          <li><strong>Decoding Virtual Numbers – VoIP Tool:</strong> OSINT-based tool built with Electron.js, TShark, and NLP to trace VoIP data.</li>
          <li><strong>Cloud Encryption Comparison:</strong> Research study on AES, DES, and Hybrid encryption’s performance in cloud environments.</li>
          <li><strong>Accessibility App:</strong> Figma-based UI for users with visual, auditory, or mobility impairments.</li>
        </ul>
      </motion.section>

      <motion.section id="skills" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> Java, JavaScript, Python, MySQL<br />
          <strong>Frameworks:</strong> React, Electron.js<br />
          <strong>Cybersecurity Tools:</strong> BurpSuite, Nmap, Wireshark, Packet Tracer<br />
          <strong>Concepts:</strong> Networking, Linux, OSINT, OOPs, Pen Testing
        </p>
      </motion.section>

      <motion.section id="certifications" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
        <h2>Certifications</h2>
        <ul>
          <li>Ethical Hacking – NPTEL (86%) – Elite + Silver</li>
          <li>System and Usable Security – NPTEL (82%) – Elite + Silver, Top 5%</li>
          <li>Data Science for Python – NPTEL (77%) – Elite + Silver</li>
          <li>Python DSA – NPTEL (63%) – Elite</li>
          <li>Cybersecurity Intern – Prodigy InfoTech (July 2024)</li>
        </ul>
      </motion.section>

      <motion.section id="resume" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 1 }}>
        <h2>Resume</h2>
        <a href="/Gokul_resume.pdf" download className="resume-button">📄 Download Resume</a>
      </motion.section>

      <motion.section id="contact" className="section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
        <h2>Contact</h2>
        <p>
          📧 gokulcy18@gmail.com<br />
          🔗 <a href="https://linkedin.com/in/gokul-n-aa620226b">LinkedIn</a><br />
          💻 <a href="https://github.com/GokulCSECS">GitHub</a><br />
          📍 Tiruvannamalai, India
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
