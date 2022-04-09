import React from "react";
import "./MasterDescription.css";
import { Button } from "../../UI/buttons/Button";

export function MasterDescription(props) {
    return (
        <div className="baseWorkCardDescription">
            <h3 className="baseWorkCardName">Ivav Ivanov</h3>
            <p><span>Специализация:</span> рихтовщик, автомаляр</p>
            <p><span>О себе:</span> Нормально рихтую. Опыт работы в этой сфере 20 лет.</p>
            <p className="baseWorkCardBrands">Opel, VW, SEAT</p>
            <p><span>График работы:</span> Пн-Пт с 9.00 до 18.00</p>
            <Button className="btn-simpleButton">ПРЕДЛОЖИТЬ РАБОТУ</Button>
        </div>
    );
}