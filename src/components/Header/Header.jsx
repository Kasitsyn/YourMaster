import React from "react";
import { Button } from "../UI/buttons/Button";
import { Nav } from "./NAV/Nav";
import "./Header.css";


export function Header(props) {

    const navForClient = [
        { id: 1, title: 'Найти мастера' },
        { id: 2, title: 'Разместить работу' },
        { id: 3, title: 'Текущие работы' },
    ];

    const navForMaster = [
        { id: 1, title: 'Найти работу' },
        { id: 2, title: 'Текущие работы' },
    ];

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-10 col-sm-8 col-7 logoBlock">
                        <p className="logo"><span>Твой</span>Мастер</p>
                    </div>
                    <div className="col-6 col-lg-8">
                        <ul className="nav justify-content-center">
                            {navForClient.map(item =>
                                <Nav key={item.id} item={item} />   
                            )}
                        </ul>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-4 col-5 loginBlock">
                        <Button className="btn-success">Войти</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}