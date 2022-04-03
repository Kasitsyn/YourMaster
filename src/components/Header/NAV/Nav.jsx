import React from "react";
import "./Nav.css";

export function Nav(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href="#">
        <p>{props.item.title}</p>
      </a>
    </li>
  );
}
