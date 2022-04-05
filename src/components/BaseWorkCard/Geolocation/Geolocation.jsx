import { Icon } from "../../UI/Icon/Icon";
import React from "react";
import "./Geolocation.css";

export function GeoLocation(props) {
    return (
        <div className="geoLocation">
            <div className="geoIcon">
                <Icon name="location-dot" size={2}/>
            </div>
            <p className="geo">Boston</p>
        </div>
    );
}