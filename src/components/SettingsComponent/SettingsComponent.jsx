import React from "react";
import "./SettingsComponent.css";
import { Button } from "../UI/buttons/Button";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export function SettingsComponent(props) {
    const navigate = useNavigate();

    const onSubmit = () => {
        alert("You had change your data!");
        navigate("/admin-panel");
    }

    return (
        <div class="settingsBlock">
            <div class="container">
                <form action="" name="userReg">
                    <h1>Отредактируйте свои данные</h1>
                    <input type="tel" name="phoneNumber" placeholder="063 134 92 77" />
                    <br />
                    <input type="email" name="email" placeholder="test@gmail.com" />
                    <br />
                    <input type="text" name="settingsName" placeholder="Сергей" />
                    {/* <br /> */}
                    <input type="text" name="settingsSurame" placeholder="Иванов" />
                    {/* <br /> */}
                    <select name="city" id="">
                        <option disabled selected>Одесса</option>
                        <option value="kiev">Киев</option>
                        <option value="lvov">Львов</option>
                        <option value="kharkov">Харьков</option>
                        <option value="odessa">Одесса</option>
                    </select>
                    <br />
                    <input type="password" name="" id="" placeholder="**********" className="settingsPass"/>
                    <br />
                    <input type="password" name="" id="" placeholder="Повторите пароль" />
                    <br />
                    <Button className={'form__submit-link'} onClick={onSubmit} type="submit">Сохранить данные</Button>
                    {/* <Link className="form__submit-link" to={'/admin-panel'}>Зарегистрироваться</Link> */}

                    <br />
                    <hr />
                </form>
            </div>
        </div>
    );
}