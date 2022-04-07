import React from "react";
import { Badge } from "../../UI/badge/Badge";
import "./Control.css";

export function Control() {
    return (
        <div className="controlBlock">
            <div className="bellBlock">
                <a href="#">
                    <Badge circle success value={2}/>
                    <img src={require("../../../img/bell.png")} alt="notifications" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={require("../../../img/settings.png")} alt="settings" />
                </a>
            </div>
        </div>
    );
}