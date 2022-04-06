import React from "react";
import "./AdminPanel.css";
import { CurrentWorkPreview } from "./CurrentWorkPreview/CurrentWorkPreview";
import { FindMasterPreview } from "./FindMasterPreview/FindMasterPreview";
import { UnderSearchPreview } from "./UnderSearchPreview/UnderSearchPreview";
import { WithoutWorkBlock } from "./WithoutWorkBlock/WithoutWorkBlock";

export function AdminPanel(props) {
    return (
        <div className="container">
            <div className="adminPanelBlock">
                <h1>Панель управления</h1>
                <h3>Мои текущие работы</h3>
                <div className="adminSectionsBlock">
                    <CurrentWorkPreview />
                    <CurrentWorkPreview />
                    <CurrentWorkPreview />
                    <CurrentWorkPreview />
                    <CurrentWorkPreview />
                </div>
                <h3>Работы в поиске мастера</h3>
                <div className="adminSectionsBlock">
                    {/* <WithoutWorkBlock/> */}
                    <UnderSearchPreview />
                    <UnderSearchPreview />
                    <UnderSearchPreview />
                    <UnderSearchPreview />
                </div>
                <h3>Найди автомастера или сервис</h3>
                <div className="adminSectionsBlock">
                    <FindMasterPreview />
                    <FindMasterPreview />
                    <FindMasterPreview />
                    <FindMasterPreview />
                </div>
            </div>
        </div>
    );
}