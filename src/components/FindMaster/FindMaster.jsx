import React from "react";
import { BaseWorkCard } from "../BaseWorkCard/BaseWorkCard";
import { MasterDescription } from "../BaseWorkCard/MasterDescription/MasterDescription";
import { SimpleFilter } from "../SimpleFilter/SimpleFilter";
import "./FindMaster.css";

export function FindMaster(props) {
    return (
        <div className="container">
            <SimpleFilter />
            <BaseWorkCard description={<MasterDescription/>}/>
            <BaseWorkCard description={<MasterDescription/>}/>
            <BaseWorkCard description={<MasterDescription/>}/>
        </div>
    );
}