import React from 'react'
import "./Home.css";
import ssdp from "./ssdp.PNG";
import hcmdp from "./hcmdp.PNG";
import {
    Link
  } from "react-router-dom";
export const Work = () => {
    return (
        <>
        <div className="card mb-3 text-white col-11 mx-auto my-3 rounded-3">
        <img className="card-img-top my-3" src={ssdp} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">Shoezstop.com</h5>
            <p className="card-text">it is an e-commerce website for shoes and  shoes accessories with database and user-friendly and it has some basic features or modules.</p>
            <p className="card-text">Technologies use for delopment.</p>
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
        <div className="card mb-3 text-white col-11 mx-auto my-3 rounded-3">
        <img className="card-img-top my-3" src={hcmdp} alt="ssdp"/>
        <div className="card-body">
            <h5 className="card-title">HandyCraftoMania.com</h5>
            <p className="card-text">This website devlop for small buisness realted to hand craft.</p>
            <p className="card-text">Technologies use for devlopment.</p>
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
