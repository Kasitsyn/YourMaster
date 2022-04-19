import React from "react";
import { Badge } from "../../UI/badge/Badge";
import "./Control.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";


export function Control() {
    return (
        <div className="controlBlock">
            <div className="bellBlock">
                <Link to="/notifications">
                    <Badge circle success value={2}/>
                    <img src={require("../../../img/bell.png")} alt="notifications" />
                </Link>
            </div>
            <div>
                <Link to="/settings">
                    <img src={require("../../../img/settings.png")} alt="settings" />
                </Link>
            </div>
        </div>
    );
}