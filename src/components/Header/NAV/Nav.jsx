import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";



export function Nav(props) {
  return (
    <li className="nav-item">
      <Link to={props.link} href="#" className="nav-link" aria-current="page">
        <p>{props.item.title}</p>
      </Link>
    </li>
  );
}
