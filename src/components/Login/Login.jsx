import { LoginForAll } from 'components/AuthRegister/LoginForAll';
import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Button } from "../UI/buttons/Button";
import "./Login.css";


export function Login(props) {

    return (
        <div className="registrationBlock">
            <div className='container'>
                <LoginForAll />
            </div>
        </div >

    );
}

Login.defaultProps = {

};