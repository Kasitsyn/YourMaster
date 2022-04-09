import React from "react";
import { BaseWorkCard } from "../BaseWorkCard/BaseWorkCard";
import { ClientDescription } from "../BaseWorkCard/ClientDescription/ClientDescription";
import { SimpleFilter } from "../SimpleFilter/SimpleFilter";
import "./FindJob.css";

export function FindJob(props) {
    return (
        <div className="container">
            <SimpleFilter />
            <BaseWorkCard description={<ClientDescription />} />
            <BaseWorkCard description={<ClientDescription />} />
        </div>
    );
}