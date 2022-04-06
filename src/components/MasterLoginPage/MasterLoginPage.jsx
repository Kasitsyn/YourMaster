import "./MasterLoginPage.css";

export function MasterLoginPage() {

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
                    <input type="submit" value="Зарегестрироваться" />
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

MasterLoginPage.defaultProps = {

};