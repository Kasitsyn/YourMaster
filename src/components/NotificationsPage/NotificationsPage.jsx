import React from "react";
import { Icon } from "../UI/Icon/Icon";
import "./NotificationsPage.css";

export function NotificationsPage(props) {
    return (
        <div className="container">
            <div className="notificationsBlock">
                <h3>Уведомления</h3>
                <div className="notificationsBody">
                    <div className="notificationsIcon">
                        <Icon name="wrench" size={3} />
                    </div>
                    <div className="notificationsDescription">
                        <p>Мастер Василий начал работу по вашему контракту</p>
                        <p><span>02.04.2022</span></p>
                    </div>
                </div>
                <div className="notificationsBody">
                    <div className="notificationsIcon">
                        <Icon name="wrench" size={3} />
                    </div>
                    <div className="notificationsDescription">
                        <p>Мастер Василий начал работу по вашему контракту</p>
                        <p><span>02.04.2022</span></p>
                    </div>
                </div>
                <div className="notificationsBody">
                    <div className="notificationsIcon">
                        <Icon name="wrench" size={3} />
                    </div>
                    <div className="notificationsDescription">
                        <p>Мастер Василий начал работу по вашему контракту</p>
                        <p><span>02.04.2022</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

