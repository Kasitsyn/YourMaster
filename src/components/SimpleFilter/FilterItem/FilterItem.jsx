import React from "react";
import "./FilterItem.css";

export function FilterItem(props) {
    return(
        <select className="cityJob" name="city" id="">
                <option disabled selected>город</option>
                <option value="киев">киев</option>
                <option value="одесса">одесса</option>
                <option value="харьков">харьков</option>
                <option value="львов">львов</option>
        </select>
    );
}