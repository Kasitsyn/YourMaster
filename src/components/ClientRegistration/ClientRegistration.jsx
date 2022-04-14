import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { signUp } from '../../store/authSlice';
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Button } from "../UI/buttons/Button";
import "./ClientRegistration.css";

export function ClientRegistration(props) {

    const [formData, setFormData] = useState({
        id: '',
        phone: '',
        email: '',
        name: '',
        city: '',
        password: '',
        password2: ''

    })

    const { phone, email, name, city, password, password2 } = formData

    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const registerUser = () => localStorage[`${email}`] = JSON.stringify({ ...formData, id: uuidv4() });

    const onSubmit = (e) => {
        e.preventDefault()
        registerUser()
        dispatch(signUp(true))
        navigate('/admin-panel')
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
                <form action="" name="userReg" onSubmit={onSubmit}>
                    <h1>Регистрация</h1>
                    <input type="tel" name="phone" placeholder="Телефон" id='phone' value={phone} onChange={onChange} />
                    <input className="email" type="email" name="email" placeholder="Email" id='email' value={email} onChange={onChange} />
                    <select name="city" id="city" value={city} onChange={onChange}>
                        <option disabled selected>Город</option>
                        <option value="kiev">Киев</option>
                        <option value="lvov">Львов</option>
                        <option value="kharkov">Харьков</option>
                        <option value="odessa">Одесса</option>
                    </select>
                    <br />
                    <input type="password" name="password" id="password" value={password} onChange={onChange} placeholder="Пароль" />
                    <br />
                    <input type="password" name="password2" id="password2" value={password2} onChange={onChange} placeholder="Повторите пароль" />
                    <br />
                    <Button className={'form__submit-link'} onClick={onSubmit} type="submit">Зарегистрироваться</Button>
                    {/* <Link className="form__submit-link" to={'/admin-panel'}>Зарегистрироваться</Link> */}

                    <br />
                    <Link to={'/login'} >Уже есть аккаунт?</Link>
                    <hr />
                    <p class="formPolicy">Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
                        <a href="#"> пользовательским соглашением</a> и даёте <a href="#">согласие на обработку персональных
                            данных.</a>
                    </p>
                </form>
            </div>
        </div>

    );
}

ClientRegistration.defaultProps = {

};