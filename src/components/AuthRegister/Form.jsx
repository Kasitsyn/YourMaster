import { useState } from "react";
import { Button } from "components/UI/buttons/Button";
import { Link } from "react-router-dom";
import "./Form.css";

export function Form({ title, handleClick }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
       
                <form action="" name="userReg" onSubmit={onSubmit}>
                    <h1>{title}</h1>
                    <input
                        className="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Пароль"
                    />

                    <Button
                        className={'form__submit-link'}
                        onClick={() => handleClick(email, pass)}
                        type="submit">{title}
                    </Button>

                    <br />
                    {title !== "Войти" ? <Link to={'/login'} >Уже есть аккаунт?</Link> : "" }
                    
                    <hr />
                    <p className="formPolicy">Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
                        <a href="#"> пользовательским соглашением</a> и даёте <a href="#">согласие на обработку персональных
                            данных.</a>
                    </p>
                </form>
          
    );
}