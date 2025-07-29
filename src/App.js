import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Gokul N</h1>
        <p>BE CSE (Cyber Security) | Cybersecurity Enthusiast</p>
        <p className="contact">
          <a href="mailto:gokulcy18@gmail.com">gokulcy18@gmail.com</a> |
          <a href="tel:+919344132869"> +91 93441 32869</a> |
          Tiruvannamalai, India
        </p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/gokul-n-aa620226b">LinkedIn</a>
          <a href="https://leetcode.com/u/GOKUL_N_18/">LeetCode</a>
          <a href="https://tryhackme.com/p/GOKULN18">TryHackMe</a>
          <a href="https://github.com/GokulCSECS">GitHub</a>
        </div>
      </header>

      <section className="section">
        <h2>Objective</h2>
        <p>
          To apply my skills and innovative ideas in a globally competitive
          environment, contribute significantly to the growth of the
          organization, and embrace a challenging position where I can utilize
          and enhance my technical skills.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li><strong>R.M.K College of Engineering and Technology</strong> — BE CSE (Cyber Security), CGPA: 7.7 (2022–2026)</li>
          <li><strong>Bhagavan Higher Secondary School</strong> — 12th Grade, 90.5% (2021–2022)</li>
          <li><strong>Gandhinagar Matric H.S. School</strong> — 10th Grade, 72.8% (2020–2021)</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Decoding Virtual Numbers - VoIP Intelligence Tool</strong><br/>
            Cyber Forensics software using TShark, OSINT, Python, Electron.js, FFmpeg, IPinfo.
          </li>
          <li>
            <strong>Encryption Algorithm Performance in Cloud</strong><br/>
            Presented at an International Conference – Compared AES, DES, and Hybrid for cloud speed/security.
          </li>
          <li>
            <strong>Accessibility Enhancement App</strong><br/>
            Designed in Figma for users with visual, auditory, and mobility impairments.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> Java, JavaScript, MySQL<br/>
          <strong>Frameworks/Tools:</strong> React, BurpSuite, Nmap, Wireshark, Packet Tracer<br/>
          <strong>Knowledge:</strong> Networking, Linux, OOPs
        </p>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <p><strong>Cyber Security Intern – Prodigy InfoTech (Remote, July 2024)</strong></p>
        <ul>
          <li>Completed 4 projects: keylogger, password checker, image encryption, Caesar cipher tool.</li>
          <li>Used Python to implement real-world cybersecurity use cases.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Achievements</h2>
        <ul>
          <li>Ethical Hacking – NPTEL 86% (Elite + Silver)</li>
          <li>System & Usable Security – NPTEL 82% (Top 5%)</li>
          <li>Data Science with Python – NPTEL 77%</li>
          <li>Programming in Python – NPTEL 63%</li>
          <li>2nd Prize – Anna University Zonal Hockey (2023–2024)</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Gokul N | Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
