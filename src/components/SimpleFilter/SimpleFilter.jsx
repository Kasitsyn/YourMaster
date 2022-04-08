import React from "react";
import { FilterItem } from "./FilterItem/FilterItem";
import "./SimpleFilter.css";

export function SimpleFilter(props) {
    return (
        <div className="container">
            <div className="simpleFilterBlock">
                <p>Отфильтровать:</p>
                <div className="filters">
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                    <FilterItem />
                </div>
            </div>
        </div>
    );
}