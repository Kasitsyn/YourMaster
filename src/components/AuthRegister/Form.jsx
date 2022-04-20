import { useState } from "react";
import { Button } from "components/UI/buttons/Button";
import { Link } from "react-router-dom";

import "./Form.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";




export function Form({ title, handleClick }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const error = useSelector(state => state.user.error)

    const {
        register,
        formState: {
            errors,

        },
        handleSubmit,

    } = useForm({

    })

    const onSubmit = () => {
        handleClick(email, pass)

    }

    return (

        <form className="registrationForm" action="" name="userReg" onSubmit={handleSubmit(onSubmit)}>
            <h1>{title}</h1>



            <input
                {...register("email", {
                    required: true,

                })}
                className="email"
                type="email"
                // name="email"
                placeholder="Email"
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />


            {errors?.email ? <p className="error">введите email</p>
                : error?.code === "auth/user-not-found" ? <p className="error">пользователь не найден</p>
                    : error?.code === "auth/email-already-in-use" ? <p className="error">email зарегистрирован</p>
                    : error?.code === "auth/invalid-email" ? <p className="error">некорректный email</p> : ''}
            <input
                {...register("password", {
                    required: true,

                })}
                type="password"
                // name="password"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль"
            />
            {errors?.password ? <p className="error">введите пароль</p>
                : (error?.code === "auth/weak-password") ? <p className="error">ненадежный пароль</p>
                    : (error?.code === "auth/wrong-password") ? <p className="error">неверный пароль</p> : ''}
            <input value={'Отправить'}
                className={'form__submit-link'}
                type="submit" />

            <br />
            {title !== "Войти" ? <Link to={'/login'} >Уже есть аккаунт?</Link> : ""}

            <hr />
            <p className="formPolicy">Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
                <a href="#"> пользовательским соглашением</a> и даёте <a href="#">согласие на обработку персональных
                    данных.</a>
            </p>
        </form>

    );
}