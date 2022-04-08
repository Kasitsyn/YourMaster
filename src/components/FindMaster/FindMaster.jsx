import React from "react";
import { BaseWorkCard } from "../BaseWorkCard/BaseWorkCard";
import { BaseWorkCardImg } from "../BaseWorkCard/BaseWorkCardImg/BaseWorkCardImg";
import { ClientDescription } from "../BaseWorkCard/ClientDescription/ClientDescription";
import { MasterDescription } from "../BaseWorkCard/MasterDescription/MasterDescription";
import { GeoLocation } from "../BaseWorkCard/Geolocation/Geolocation";
import { SimpleFilter } from "../SimpleFilter/SimpleFilter";
import "./FindMaster.css";

export function FindMaster(props) {
    return (
        <div className="container">
            <SimpleFilter />
            <BaseWorkCard />
            <BaseWorkCard />
            <BaseWorkCard />
            <BaseWorkCard />
        </div>
    );
}