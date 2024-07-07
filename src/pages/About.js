import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import Me from "../img/Me.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      
      <section id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
        <img
                  src={Me}
                  alt="Profile Picture of Lorriane Grace A. Lumanog"
                />
        </div>
        <div class="col-lg-6">
          <h2 class="display-2 text-white"><strong> About</strong></h2>
          <p class="text-white">"I am a fourth-year BSIT college student at Central Philippines State University-Main Campus. Throughout my academic journey, I have faced challenges in programming, but my willingness to learn has remained steadfast. Completing an On-the-Job Training (OJT) provided me with practical experience and insights into the industry. As I graduate on August 5, 2024, 
            I am eager to apply my skills and knowledge in a professional setting, continuing to grow and contribute to the field of Information Technology."</p>

        </div>
      </div>
    </div>
  </section>

  <section id="education">
      <div class="text-center">
         <h6 class="display-2 text-black"><strong>Education</strong></h6></div> 
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2019</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                      Camansi National High School
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camansi, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Camansi Elementary School</h4>
                      <p className="text-secondary">
                        Brgy. Camansi, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      </br>
      <br>
      </br>

      <section id="skill" className="bg-secondary">
        <div className="col skills">
        <div class="text-center">
        <h6 class="display-2 text-white"><strong>Skills</strong></h6></div>
          <div class="row justify-content-center">
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">HTML</h5>
              <p className="text-center">80%</p>
              <span class="bar">
                <span class="html"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">CSS</h5>
              <p className="text-center">70%</p>
              <span class="bar">
                <span class="css"></span>
              </span>
            </div>
            <div class="col-lg-4 mb-4">
              <h5 class="card-title fw-bold text-center mt-5">JAVASCRIPT</h5>
              <p className="text-center">30%</p>
              <span class="bar">
                <span class="javascript"></span>
              </span>

              <h5 class="card-title fw-bold text-center mt-5">PHP</h5>
              <p className="text-center">30%</p>
              <span class="bar">
                <span class="php"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default About;
