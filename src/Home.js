import React from "react";
import person from "./person.png";
import facebook from "./facebook.jpeg";
import instagram from "./instagram.jpeg";
import snapchat from "./snapchat.jpeg";
import linkedin from "./linkedin.jpeg";
import ss from "./ss.jpg";
import hcm from "./hcm.jpg";
import "./Home.css";
import {
    Link
  } from "react-router-dom";
export const Home = () => {
    return (
        <>
            <div className="avatar img-fluid">
                <img className="avatar__image" src={person} alt="person"/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#353434" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,170.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            <div className="person-details text-white text-left">
                <p>
                    <div className="fs-3 has-animation animation-rtl" data-delay="3000">
                    <h1>Hello,</h1>
                    <br/>My name is Akshat Mehta,
                    <br />I am a Web Devloper and UI/UX Designer.
                    <br />I had completed my graduation of BSc in Information Technology at UPG College, Vileparle(West).
                    <br/>
                    <br/>
                    </div>
                    <h1>My Skills</h1>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-5 col-lg-6">
                                    <h2>Basic Skills</h2>
                                        <ul className="skills">
                                            <li>Leadership</li>
                                            <li>Time management</li>
                                            <li>Problem-solving</li>
                                            <li>Active listening</li>
                                            <li>Management skills</li>
                                            <li>Teamwork</li>
                                            <li>Creativity</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-md-5 col-lg-6">
                                    <h2>Technical Skills</h2>
                                <ul className="skills">
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>Javascript</li>
                                    <li>Php</li>
                                    <li>Python</li>
                                    <li>MySQL</li>
                                    <li>Laravel</li>
                                    <li>React.js</li>
                                </ul>
                            </div>
                            </div>
                        </div>           
          {/* Learn More
          <br/>
          <Link className="btn btn-outline-light btn-lg" to="/aksh.at/about">About Me</Link> */}
        </p>
            </div>
            <div className="container-desc text-white text-center mb-4">
          <br/>
          {/* <h1>I have Done Couple of Projects</h1>
           <br/><Link className="btn btn-outline-light btn-lg" to="/aksh.at/work">See My Project</Link> */}
           <br/>
           <br/>
            </div>
            <div id="droplet"></div>
            <div className="mt-2 container-nav text-white text-center">
            <h1 className="mt-3 mb-2">My work</h1>
                <br/><br/>
            </div>
            <div className="social row row-cols-1 row-cols-md-2 row-cols-lg-2 g-2">
                <div className="col">
                    <div className="card h-100">
                    <h5 class="card-title text-white text-center">Shoezstop.com</h5>
                    <img src={ss} className="card-img-top" alt="ss"/>
                    <div className="card-body text-white text-center"><br/>
                        <Link className="btn btn-outline-light btn-lg" to="/aksh.at/work">Learn more</Link>
                    </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card h-100">
                    <h5 class="card-title text-white text-center">HandyCraftoMania.com</h5>
                    <img src={hcm} className="card-img-top" alt="ss"/>
                    <div className="card-body text-white text-center"><br/>
                        <Link className="btn btn-outline-light btn-lg" to="/aksh.at/work">Learn more</Link>
                    </div>
                    </div>

                </div>
            </div>
            <div className="container-desc mb-4">
             <br/>
             <br/>
             <br/>
            </div>
            <div id="droplet"></div>
            <div className="mt-2 container-nav text-white text-center">
                <h1 className="mt-3 mb-2">Social Media</h1>
                <br/><br/>
            </div>
            <div className="social row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
                <div className="col">
                    <div className="card h-100">
                    <h5 class="card-title text-white text-center">Facebook</h5>
                    <p className="text-white text-center">Scan QR code</p>
                    <img src={facebook} className="card-img-top" alt="..."/>
                    <div className="card-body text-white text-center">
                        <h6>OR</h6><br/>
                        <Link className="btn btn-outline-light btn-lg" target="_blank" to="/aksh.at/facebook">Click Here</Link>
                    </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card h-100">
                    <h5 class="card-title text-white text-center">Instagram</h5>
                    <p className="text-white text-center">Scan QR code</p>

                    <img src={instagram} className="card-img-top" alt="..."/>
                    <div className="card-body text-white text-center">
                        <h6>OR</h6><br/>
                        <Link className="btn btn-outline-light btn-lg" target="_blank" to="/aksh.at/instagram">Click Here</Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <h5 class="card-title text-white text-center">Snapchat</h5>
                    <p className="text-white text-center">Scan QR code</p>

                    <img src={snapchat} className="card-img-top" alt="..."/>
                    <div className="card-body text-white text-center">
                        <h6>OR</h6><br/>
                        <Link className="btn btn-outline-light btn-lg" target="_blank" to="/aksh.at/snapchat">Click Here</Link>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <h5 class="card-title text-white text-center">Linkedin</h5>
                    <p className="text-white text-center">Scan QR code</p>

                    <img src={linkedin} className="card-img-top" alt="..."/>
                    <div className="card-body text-white text-center">
                        <h6>OR</h6><br/>
                        <Link className="btn btn-outline-light btn-lg" target="_blank" to="/aksh.at/linkedin">Click Here</Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container-desc mb-5">
             <br/>
             <br/>
             <br/>
            </div>
            <div id="droplet"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#353434" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,170.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <section id="contact">
            <div className="container pt-1">
                <div className="content-wrapper text-center">
                <div className="content">
                    <h2>Contact Me</h2>
                    <p>The website is me. It's a reflection of my personality and my interests. It's the perfect marriage of my skills and experiences.</p>
                    <p className="mail fs-4">Email id : rishimehta257428@gmail.com </p>
                    <p className="mail fs-4">Phone : +91 887990xxxx</p>
                </div>
                </div>
            </div>
            </section>
        </>
    );
};
