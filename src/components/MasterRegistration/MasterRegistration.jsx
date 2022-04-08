import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Button } from "../UI/buttons/Button";
import "./MasterRegistration.css";




export function MasterRegistration(props) {
    const navigate = useNavigate()

    const onSubmit = () => navigate('/admin-panel')

    return (
        <div class="registrationBlock">
            <div class="container">
                <form action="" name="userReg">
                    <h1>Регистрация</h1>
                    <input type="tel" name="phoneNumber" placeholder="Телефон" />
                    <br />
                    <input type="email" name="email" placeholder="Email" />
                    <br />
                    <label for="master"><input class="form-check-input" type="radio" name="status" id="master"
                        value="master" checked /><span>Индивидуальный мастер</span></label>
                    <br />
                    <label for="station"><input class="form-check-input" type="radio" name="status" id="station"
                        value="station" /><span>Автосервис</span></label>
                    <br />
                    <input type="text" name="companyName" placeholder="Имя/Название компании" />
                    <br />
                    <select name="city" id="">
                        <option disabled selected>Город</option>
                        <option value="kiev">Киев</option>
                        <option value="lvov">Львов</option>
                        <option value="kharkov">Харьков</option>
                        <option value="odessa">Одесса</option>
                    </select>
                    <br />
                    <input type="password" name="" id="" placeholder="Пароль" />
                    <br />
                    <input type="password" name="" id="" placeholder="Повторите пароль" />
                    <br />
                    <Button className={'form__submit-link'} onClick={onSubmit} type="submit">Зарегистрироваться</Button>
                    {/* <Link className="form__submit-link" to={'/admin-panel'}>Зарегистрироваться</Link> */}
                    
                    <br />
                    <a href="#">Уже есть аккаунт?</a>
                    <hr />
                    <p class="formPolicy">Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
                        <a href="#">Пользовательским соглашением</a> и даёте <a href="#">Согласие на обработку персональных
                            данных.</a>
                    </p>
                </form>
            </div>
        </div>

    );
}

MasterRegistration.defaultProps = {

};