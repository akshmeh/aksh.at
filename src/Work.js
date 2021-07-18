import React, {useEffect} from 'react'
import "./Home.css";
import ssdp from "./ssdp.PNG";
import hcmdp from "./hcmdp.PNG";
import {
    Link
  } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Work = () => {
    useEffect(() => {
        AOS.init({ offset: 200, duration: 2000 });
      }, []);
    return (
        <>
        <div className="card mb-3 text-white col-11 mx-auto my-3 rounded-3" data-aos="fade-right">
        <img className="card-img-top my-3" src={ssdp} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">Shoezstop.com</h5>
            <h6 className="card-text">Description:</h6>
            <p className="card-text">May I present my final year project which is an E-commerce website that sells footwear and its accesories.<br/>
            It is an user-friendly UI/UX designed website. 
            </p>
            <h6 className="card-text">Technologies used for the devlopment:</h6>
            <ul className="tech-use">
                <br/>
            <p className="card-text">Frontend</p>
            <hr/>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <br/>
            <p className="card-text">Backend</p>
            <hr/>
                <li>Php</li>
                <br/>
            <p className="card-text">DataBase</p>
            <hr/>
                <li>MySQL</li>
            </ul>
            <br/><br/>
            <Link className="btn btn-outline-light btn-md disabled" npm run to="/aksh.at/work">Learn more</Link>
            <p className="card-text"><small className="text-muted">Currently not hosted yet</small></p>
        </div>
        </div>
        <div className="card mb-3 text-white col-11 mx-auto my-3 rounded-3" data-aos="fade-right">
        <img className="card-img-top my-3" src={hcmdp} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">HandyCraftoMania.com</h5>
            <h6 className="card-text">Description:</h6>
            <p className="card-text">It is a simple website for small business which sells hand made gifts.</p>
            <p className="card-text">Technologies used for the devlopment.</p>
            <ul className="tech-use">
            <p className="card-text">Frontend</p>
            <hr/>
                <li>Html</li>
                <li>Css</li>
                <li>Tailwind</li>
            <p className="card-text">DataBase</p>
            <hr/>
                <li>Instagram</li>
            </ul>
            <br/><br/>
            <Link className="btn btn-outline-light btn-md disabled" to="/aksh.at/work">Learn more</Link>
            <p className="card-text"><small className="text-muted">Currently not hosted yet</small></p>
            
        </div>
        </div>
        </>
    )

}
