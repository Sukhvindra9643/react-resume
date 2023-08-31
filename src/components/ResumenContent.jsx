import React from "react";
import "../App.css";

const skills = [
  "Figma",
  "MS WORD",
  "MS EXCEL",
  "MS POWERPOINT",
  "SQL",
  "MongoDB",
  "JAVA",
  "NODEJS",
  "MENDIX",
  "REACTJS",
  "DSA",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "C",
  "C++",
  "RESTAPI",
  "REACT NATIVE",
];

const Hobbies = [
  "Explore new technologies",
  "Teaching",
  "Learn new Skills",
  "Coding",
];

function ResumenContent() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", padding: "10px" }}>
        <div>
          <h2>EDUCATION</h2>
          <div>
            <h3>Graduation</h3>
            <h4>Global Institute of Technology & Management</h4>
            <div>
              <span>07/2020 - present</span>
              <span>Gurgaon, India</span>
            </div>
            <span>Courses</span>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>- Bachelor of Computer Application</p>
              <p>-73.4%</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Academic</h3>
          <h4>M.L.B Inter College Jalaun</h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>07/2019 - 06/2020</span>
            <span>Jalaun, India</span>
          </div>
          <span>Courses</span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>- 12th UP Board</p>
            <p>-76.4%</p>
          </div>
        </div>
        <div>
          <h2>PERSONAL PROJECTS</h2>
          <div>
            <h3>Ecommerce Website (09/2022 - 10/2022)</h3>
            <p>- I made this website during the learning MERN Stack.</p>
            <p>- MERN Stack Technology used in this website</p>
            <p>
              -{" "}
              <a
                href="https://swagmart.live"
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#213547",
                }}
              >
                https://swagmart.live
              </a>
            </p>
          </div>
          <div>
            <h3>News Application (11/2022 - 12/2022)</h3>
            <p>
              - I made this website in react. React is a library of javascript.
            </p>
            <p>- I also use News API for daily news update</p>
          </div>
        </div>
        <div>
          <h2>WORK EXPERIENCE</h2>
          <h3>Freelancer</h3>
          <h4>Work From Home</h4>
          <span>03/2023 - present</span>
          <p>Achievement/Tasks</p>
          <p>- Nav-Nirmaan Bazaar Android Application</p>
          <p>
            <a href="https://play.google.com/store/apps/details?id=com.webhub.contructionbuddy"  style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "#213547",
                }}>
              - App Download Link
            </a>
          </p>
          <p>- Ecommerce website Using MERN Stack</p>
        </div>
      </div>
      <div style={{ width: "50%", padding: "10px" }}>
        <h2>SKILLS</h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: " wrap",
            gap: "5px",
          }}
        >
          {skills.map((name) => (
            <div className="badge">
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div>
          <h2>ACHIEVEMENTS</h2>
          <div>
            <h3>Tech Fest (04/2022 -04/2022)</h3>
            <p>I secured 3rd rank in coding comptetion</p>
          </div>
          <div>
            <h3>Competative Programming (01/2022 - 01/2023)</h3>
            <p>Codechef rating 2*</p>
          </div>
        </div>
        <div>
          <h2>CERTIFICATES</h2>
          <div>
            <h3>Mendix Rapid Daveloper (11/2022 - 01/2022)</h3>
            <p>
              This certificate proves that your knowledge level is high enough
              to join Mendix development team.
            </p>
          </div>
          <div>
            <h3>Advance Diploma In Computer Application (10/2021 - 10/2022)</h3>
            <p>
              I am very good in computer skills like programming, MS Office etc.
            </p>
          </div>
        </div>
        <div>
          <h2>LANGUAGE</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ lineHeight: "5px" }}>
              <p style={{ fontWeight: "600" }}>English</p>
              <p>Limited Working Proficiency</p>
            </div>
            <div style={{ lineHeight: "5px" }}>
              <p style={{ fontWeight: "600" }}>Hindi</p>
              <p>Full Professional Proficiency</p>
            </div>
          </div>
        </div>
        <h2>HOBBIES</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {Hobbies.map((name) => (
            <div
              style={{
                border: "1px solid black",
                textAlign: "center",
                width: "fit-content",
                padding: "0px 5px",
                lineHeight: "5px",
                borderRadius: "5px",
              }}
            >
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResumenContent;
