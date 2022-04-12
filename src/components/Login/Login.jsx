import { useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Button } from "../UI/buttons/Button";
import "./Login.css";


export function Login(props) {

    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        status: '',
        name: '',
        city: '',
        password: '',
        password2: ''

    })

    const { phone, email, status, name, city, password, password2 } = formData

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const navigate = useNavigate()

    // const onSubmit = () => navigate('/admin-panel')

    const onChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div class="registrationBlock">
            <div class="container">
                <form action="" name="login" onSubmit={onSubmit}>
                    <h1>Вход</h1>
                    <input type="email" name="email" placeholder="Email" id='email' value={email} onChange={onChange} />
                    <br />
                    <input type="password" name="password" id="password" value={password} onChange={onChange} placeholder="Пароль" />
                    <br />
                    <Button className={'form__submit-link'} onClick={onSubmit} type="submit">Войти</Button>
                    {/* <Link className="form__submit-link" to={'/admin-panel'}>Зарегистрироваться</Link> */}

                    <br />
                    <Link to={'/registration'}>Регистрация</Link>
                    <hr />

                </form>
            </div>
        </div >

    );
}

Login.defaultProps = {

};