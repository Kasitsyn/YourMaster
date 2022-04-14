import React from "react";
import { Button } from "../UI/buttons/Button";
import { Nav } from "./NAV/Nav";
import "./Header.css";
import { Control } from "./Control/Control";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { JobApplication } from "../JobApplication/JobApplication";
import { BaseWorkCard } from "../BaseWorkCard/BaseWorkCard";
import { MasterRegistration } from "../MasterRegistration/MasterRegistration";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/authSlice";



export function Header(props) {
    const navigate = useNavigate()
    const navForClient = [
        { id: 1, title: 'Найти мастера', link: '/find-master' },
        { id: 2, title: 'Разместить работу', link: '/place-work' },
        { id: 3, title: 'Панель управления', link: '/admin-panel' },
    ];

    const isAuth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()
    const handleButtonClick = () => navigate('/client-registration')
    const handleButtonClickLogOut = () => {
        dispatch(signUp(false))
        navigate('/login')
    }
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-10 col-sm-8 col-7 logoBlock">
                        <Link to="/admin-panel">
                            <p className="logo"><span>Твой</span>Мастер</p>
                        </Link>
                    </div>
                    <div className="col-6 col-lg-8 menuBox">
                        <ul className="nav justify-content-center">
                            {navForClient.map(item =>
                                <Nav link={item.link} key={item.id} item={item} />
                            )}
                        </ul>
                        <Control />

                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-5 loginBlock">
                        {isAuth
                            ? <Button onClick={handleButtonClickLogOut} className="btn-success">Выйти</Button>
                            : <Button onClick={handleButtonClick} className="btn-success">Войти</Button>}
                    </div>
                </div>
            </div>
        </header>
    );
}