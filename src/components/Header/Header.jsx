import React from "react";
import { Button } from "../UI/buttons/Button";
import { Nav } from "./NAV/Nav";
import "./Header.css";
import { Control } from "./Control/Control";
import { Link, Route, Routes } from "react-router-dom";
import { JobApplication } from "../JobApplication/JobApplication";
import { BaseWorkCard } from "../BaseWorkCard/BaseWorkCard";
import { MasterRegistration } from "../MasterRegistration/MasterRegistration";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";


export function Header(props) {

    const navForClient = [
        { id: 1, title: 'Найти мастера', link: '/find-master' },
        { id: 2, title: 'Разместить работу', link: '/find-job' },
        { id: 3, title: 'Текущие работы', link: '/current-works' },
    ];

    // const navForMaster = [
    //     { id: 1, title: 'Найти работу' },
    //     { id: 2, title: 'Текущие работы' },
    // ];

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-10 col-sm-8 col-7 logoBlock">
                        <p className="logo"><span>Твой</span>Мастер</p>
                    </div>
                    <div className="col-6 col-lg-7 menuBox">
                            <ul className="nav justify-content-center">
                                {navForClient.map(item =>
                                    <Nav link={item.link} key={item.id} item={item} />
                                )}
                            </ul>
                        <Control />
                        
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-5 loginBlock">
                        <Button className="btn-success">Войти</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}