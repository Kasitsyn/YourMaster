import React from "react";
import "./Control.css";

export function Control() {
    return (
        <ul className="controlBlock">
            <li>
                <a href="#">
                    <img src={require("../../../img/bell.png")} alt="notifications" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={require("../../../img/settings.png")} alt="settings" />
                </a>
            </li>
        </ul>
    );
}