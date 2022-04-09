import React from "react";
import "./BaseWorkCard.css";
import { BaseWorkCardImg } from "./BaseWorkCardImg/BaseWorkCardImg";
import { ClientDescription } from "./ClientDescription/ClientDescription";
import { GeoLocation } from "./Geolocation/Geolocation";
import { MasterDescription } from "./MasterDescription/MasterDescription";

export function BaseWorkCard(props) {
    return (
        <div className="baseWorkCardBlock">
            <BaseWorkCardImg />
                {props.description}
            <GeoLocation />
        </div>
    );
}