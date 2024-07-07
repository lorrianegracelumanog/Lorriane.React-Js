import "./Experience.css";
import Navbar from "./Navbar";
import Ressetting from "../img/re.jpg";
import Repairing from "../img/rep.jpg";
import Formatting from "../img/as.jpg";
import Filing from "../img/file.jpg";
import Printing from "../img/print.jpg";
import Troubleshooting from "../img/trouble.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container5">
  
          </div>
          <section id="experience">
      <div class="text-center">
         <h2 class="display-2 text-white"><strong>Experiences</strong></h2></div>
         <div class="text-center">
         <h6><p class="text-white">During my on-the-job training, I learned a lot by doing tasks with guidance from mentors in real-life situations at URC-Sonedco.</p></h6></div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Ressetting} alt="" />
                <h4 className="text-center text-dark">Reset Printer</h4>
                
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
                <h4 className="text-center text-dark">Repair Laptop</h4>
              </div>
            </div>
            
          </div>
        </div>

    

        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Printing} alt="" />
                <h4 className="text-center text-dark">Print Documents</h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Filing} alt="" />
                <h4 className="text-center text-dark">Filing Documents</h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={Troubleshooting} alt="" />
                <h4 className="text-center text-dark">Troubleshoot Internet</h4>
              </div>
            </div>
            
          </div>
        </div>
      </section>
         
        </div>
      </div>
    </>
  );
};

export default Experience;
