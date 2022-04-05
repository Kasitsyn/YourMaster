import React from "react";
import "./MasterDescription.css";
import { Button } from "../../UI/buttons/Button";


export function MasterDescription(props) {
    return (
        <div className="baseWorkCardDescription">
            <h3 className="baseWorkCardName">Oleg Zhuravko</h3>
            <p><span>Марка:</span> Rolls-Royse</p>
            <p><span>Требуемый ремонт:</span> Удар в переднее правое крыло. Рихтовка покраска, замена рычага. Остальное после осмотра</p>
            <Button className="btn-simpleButton">ПОДАТЬ ЗАЯВКУ</Button>
        </div>
    );
}