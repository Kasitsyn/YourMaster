import React from "react";
import { Link } from "react-router-dom";
import "./MasterLandingPage.css";

export function MasterLandingPage() {
    return (
        <div className="masterLandingPage">
            <div className="firstMasterBlock">
                <div className="container">
                    <div className="firstMasterBlockInfo">
                        <h2>Присоединяйся к крупнейшей бирже автоуслуг</h2>
                        <p>Получите доступ к более <span>300,000</span> клиентов.
                            Вы платите только микро комиссию от выполненных вами услуг.
                            “Твой Мастер” предоставляет дополнительный сервис для ваших клиентов. Узнайте больше про возможности
                            сервиса.</p>
                        <ul>
                            <li>
                                <button className="btn btn-success setJob">Создать аккаунт</button>
                            </li>
                            <li>
                                <button className="btn btn-light howItWork">Заказать звонок</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="advantages">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 advantegesItems">
                            <img src={require('../../img/phoneCall.png')} alt="" />
                            <h3>Больший поток клиентов</h3>
                            <p>Просто зарегестрируйтесь и начните общение с новыми клиентами</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 advantegesItems">
                            <img src={require('../../img/money.png')} alt="" />
                            <h3>$230 средний чек</h3>
                            <p>Это ваш самый выгодный способ привлечения клиентов</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 advantegesItems">
                            <img src={require('../../img/userLove.png')} alt="" />
                            <h3>Преданность клиентов</h3>
                            <p>85% клиентов на бирже продолжают сотрудничество с мастером окозавшим услугу высокого качества</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="callToAction">
                <div className="container">
                    <button className="btn btn-success setJob">Создать аккаунт</button>
                </div>
            </div>


            <div className="howItWorkBlock">
                <div className="container">
                    <h3>Как работает “ТвойМастер”?</h3>
                    <div className="container px-4">
                        <div className="row g-5">
                            <div className="col-xl-3 col-lg-6 col-md-6 firstHowItWorkBlock">
                                <div className="p-4 border bg-light firstHowItWorkBlock">
                                    <h4>Размещение</h4>
                                    <p>Клиенты размещают требуемые работы для своих автомобилей </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4 border bg-light">
                                    <h4>Заявка</h4>
                                    <p>Дождитесь предложения или подайте заявку на интересующую вас работу</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4 border bg-light">
                                    <h4>Запись</h4>
                                    <p>Уточните детали работы и запишите клиента на свободную дату.</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4 border bg-light">
                                    <h4>Отзыв</h4>
                                    <p>Получите отличный отзыв и повысьте доверие к своему профилю еще больше</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ourPrevelagesBlock">
                <div className="container">
                    <h3>Как мы можем быть полезны вашему бизнесу?</h3>
                    <p className="prevelagesDescription">Мы хотим не только помочь найти вам клиентов, но нам важно выстроить для
                        вас новый постоянный источник поступления работы.</p>
                    <div className="container px-4">
                        <div className="row g-5">
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4">
                                    <h4>Новые клиенты</h4>
                                    <img src={require('../../img/scredriver.png')} alt="" />
                                    <p>Подавайтесь на любое количество заявок от сотен клиентов в вашем городе</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4">
                                    <h4>Станьте узнаваемыми</h4>
                                    <img src={require('../../img/loc.png')} alt="" />
                                    <p>Ваш профиль это отличный способ претставить свои услуги в интернете</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4">
                                    <h4>Управляйте графиком</h4>
                                    <img src={require('../../img/clock.png')} alt="" />
                                    <p>Записывайте ваших клиентов на те даты, которые вам удобны, прямо в чате приложения</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="p-4">
                                    <h4>Сарафанное радио</h4>
                                    <img src={require('../../img/reletions.png')} alt="" />
                                    <p>Довольные клиенты будут рекомендовать вас своим друзьям и вас будет очень просто найти
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="partnerRevievsBlock">
                <div className="container">
                    <h3>Что говорят наши партнёры</h3>
                    <img src={require('../../img/revue.jpg')} alt="" />
                    <p>“ТвойМастер” даёт около 45% всех заказов для нашего СТО. Мы просто отлично делаем нашу работу, а наши
                        клиенты находят нас сами через площадку.
                        Это удобно потому, что мы можем моментально дать консультацию в чате “ТвойМастер”</p>
                    <p>Сергей Иванович, владелец СТО “Гайкокрут”</p>
                    <a href="">Посмотреть все отзывы</a>
                    <br />
                    <button className="btn btn-success setJob">Присоединиться</button>
                </div>
            </div>


            <div className="takeYourValue">
                <div className="container">
                    <h2>
                        Станьте партнёром уже сегодня
                    </h2>
                    <button className="btn btn-success setJob takeYourValueBtn">Создать аккаунт</button>
                </div>
            </div>

        </div>

    );
}