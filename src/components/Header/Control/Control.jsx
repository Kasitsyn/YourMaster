import React from "react";
import { Badge } from "../../UI/badge/Badge";
import "./Control.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";


export function Control(props) {
    return (
        <div className="controlBlock">
            <div className="bellBlock">
                <Link to={props.bell}>
                    {props.bell === "./client-register"
                        ? <Badge noneBadge />
                        : <Badge circle success value={2}/>
                    }
                    <img src={require("../../../img/bell.png")} alt="notifications" />
                </Link>
            </div>
            <div>
                <Link to={props.settings}>
                    <img src={require("../../../img/settings.png")} alt="settings" />
                </Link>
            </div>
        </div>
    );
}