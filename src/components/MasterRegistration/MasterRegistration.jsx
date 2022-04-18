import { SignUp } from 'components/AuthRegister/SignUp';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Button } from "../UI/buttons/Button";
import "./MasterRegistration.css";

export function MasterRegistration(props) {


    return (
        <div className="registrationBlock">
            <div className="container">
                <SignUp />
            </div>
        </div>

    );
}

MasterRegistration.defaultProps = {

};