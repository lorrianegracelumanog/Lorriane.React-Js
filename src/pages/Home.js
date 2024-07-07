import "./Home.css";


import Navbar from "./Navbar";
import home from "../img/home.jpg";
import Me from "../img/Me.png";
import Ressetting from "../img/re.jpg";
import Repairing from "../img/rep.jpg";
import Formatting from "../img/as.jpg";


const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
  <div className="overlay">
    <div class="container1">
      <div id="banner" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ok"> 
              <div className="card">
                <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                <h1 className="text display-4 fw-bold">
                  Lorriane Grace
                </h1>
                <br />
                <p className="self text-light">
                  I'm 22 years old,
                  Taking up Bachelor of Science in Information Technology
                </p>
                
              </div>
            </div>
            <div className="col-lg-6 zoom-effect"> 
              <div className="card">
                <img
                  src={home}
                  alt="Profile Picture of Lorriane Grace A. Lumanog"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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
          <p class="text-white">"I am a fourth-year BSIT college student at Central Philippines State University-Main Campus. Throughout my academic journey, I have faced challenges in programming, but my willingness to learn has remained steadfast. Completing an On-the-Job Training (OJT) provided me with practical experience and insights into the industry. As I graduate on August 5, 2024, I am eager
             to apply my skills and knowledge in a professional setting, continuing to grow and contribute to the field of Information Technology."</p>
          <p class="text-white"></p>
          <a href="/About" class="btn btn-brand"> Know More</a>
        </div>
      </div>
    </div>
  </section>

      <section id="experience">
      <div class="text-center">
         <h3 class="display-2 text-white"><strong>On-the-Job Training</strong></h3></div> 
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Ressetting} alt="" />
                <h4 className="text-center text-dark">Resetting the printer</h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Formatting} alt="" />
                <h4 className="text-center text-dark">Format the PC</h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Repairing} alt="" />
                <h4 className="text-center text-dark">Repairing Laptop</h4>
              </div>
            </div>
            <p class="text-white"></p>
            <a href="/Experience"class="btn btn-brand"> View All</a>
          </div>
     </div>
      </section>
      
    </>
  );
};

export default Home;
