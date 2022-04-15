import React from "react";
import { Link } from "react-router-dom";
import "./ClientLandingPage.css";

export function ClientLandingPage() {
    return (
        <div className="clientLandingPage">
            <div className="professions">
                <div className="container">
                    <div className="row">
                        <div className="col">Маляр</div>
                        <div className="col">Слесарь</div>
                        <div className="col">Рихтовщик</div>
                        <div className="col">Электрик</div>
                        <div className="col">Газовщик</div>
                        <div className="col">Моторист</div>
                        <div className="col">Диагност</div>
                        <div className="col">Кондиционерщик</div>
                    </div>
                </div>
            </div>

            <div className="mainBlock">
                <div className="container">
                    <p>Проверенные профессионалы для ремонта и обслуживания вашего автомобиля</p>
                    <h1>НАЙДИ СВОЕГО МАСТЕРА</h1>
                    <ul>
                        <li>
                            <button className="setJob">Разместить работу</button>
                        </li>
                        <li>
                            <button className="btn btn-light howItWork">Как это работает</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="findMasterBlock">
                <br />
                <h4>Найдите мастера или сервис</h4>
                <div className="container">
                    <div className="findMasterCell">
                        <ul>
                            <li>
                                <img src={require('../../img/maliar.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Покраска</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/sleser.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Слесарные работы</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/rihtovka.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Рихтовка</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/detailing.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Детейлинг</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/elektrik.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Автоэлектрика</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/diagnost.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Диагностика</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/gbo.jpg')} alt="" />
                            </li>
                            <li>
                                <p>ГБО</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={require('../../img/zvuk.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Автозвук</p>
                            </li>
                        </ul>
                    </div>
                    <div className="reserveBlock">
                        <ul>
                            <li>
                                <img src={require('../../img/razval.jpg')} alt="" />
                            </li>
                            <li>
                                <p>Развал-схождение</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <h5>Не нашли нужную вам категорию? <a href="#">Смотрите полный каталог</a></h5>
            </div>

            <div className="howItworksBlock">
                <div className="container">
                    <h2>Как Это Работает?</h2>
                    <p className="firstP">Найдите мастера для ремонта и обслуживания вашего автомобиля в уже сейчас</p>
                    <div className="howItWorksContainer">
                        <div className="howItWorksInfo">
                            <div></div>
                            <div>
                                <h3>Опишите Вашу Проблему</h3>
                                <div className="imgHid">
                                    <img src={require('../../img/vector-auto/describe.jpg')} alt="" />
                                </div>
                                <p>Заполните форму. Опишите проблему, которая возникла с вашим автомобилем. Начните получать сообщения от
                                    мастеров либо свяжитесь с ними самостоятельно</p>
                            </div>
                            <div><img src={require('../../img/vector-auto/describe.jpg')} alt="" /></div>
                            <div></div>
                        </div>
                        <ul className="correctedUl firstUl">
                            <li>1</li>
                        </ul>
                        <div className="howItWorksInfo secondBlock">
                            <div></div>
                            <div>
                                <h3>Получите Оценку </h3>
                                <div className="imgHid"><img src={require('../../img/vector-auto/describe.jpg')} alt="" /></div>
                                <p>Получите оценку стоимости ремонта/обслуживания вашего автомобиля. Вы начнётё получать предложения от
                                    мастеров и СТО которые в состоянии решить вашу проблему сразу после размещения заявки</p>
                            </div>
                            <div><img src={require('../../img/vector-auto/yourvalue.jpg')} alt="" /></div>
                            <div></div>
                        </div>
                        <ul className="secondUl">
                            <li>2</li>
                        </ul>
                        <div className="howItWorksInfo thirdBlock">
                            <div></div>
                            <div>
                                <h3>Выберите Своего Мастера</h3>
                                <div className="imgHid"><img src={require('../../img/vector-auto/describe.jpg')} alt="" /></div>
                                <p>Выберите мастера или СТО которому вы хотите поручить ремонт вашего автомобиля. Для более чёткого выбора
                                    вам доступны отзывы и подробное описание мастеров и СТО. Вам доступна полная информация.</p>
                            </div>
                            <div><img src={require('../../img/vector-auto/takeyourmaster.jpg')} alt="" /></div>
                            <div></div>
                        </div>
                        <ul className="thirdUl">
                            <li>3</li>
                        </ul>
                        <div className="howItWorksInfo">
                            <div></div>
                            <div>
                                <h3>Оставьте Отзыв</h3>
                                <div className="imgHid"><img src={require('../../img/vector-auto/describe.jpg')} alt="" /></div>
                                <p>Оставьте отзыв и порекомендуйте исполнителя на “Твой Мастер” своим друзьям и знакомым.</p>
                            </div>
                            <div><img src={require('../../img/vector-auto/review.jpg')} alt="" /></div>
                            <div></div>
                        </div>
                        <ul className="correctedUl fourthUl">
                            <li>4</li>
                        </ul>
                    </div>
                </div>
                <p className="lastP">Вы оказываете услуги, представляете СТО или автомастерскую и хотите стать участником</p>
                <button className="howItWorksBtn">Узнать больше</button>
            </div>

            <div className="descriptionBlock">
                <div className="container">
                    <h2>Получите расценки на  обслуживание и ремонт автомобиля</h2>
                    <p>Сравните цены у более чем 2390 мастеров и СТО</p>
                    <br />
                    <p><span>Вашему автомобилю необходимо обслуживание, ремонтные работы или вы хотите установить ГБО?</span></p>
                    <p>Сравните цены у более чем 2390 мастеров и СТО на “Твой Мастер”</p>
                    <br />
                    <p><span>Это быстро и просто.</span></p>
                    <p>Сначала опишите, какой сервис требуется для вашего автомобиля, например: кузовной ремонт, обслуживание и ТО, замена сцепления, тонировка или многие другие виды технического обслуживания.
                    </p>
                    <p>После этого местные мастера и СТО свяжутся с вами и предложат конкурентоспособные цены. Один из экспертов нашего сервиса обязательно подойдёт для решения вашего вопроса</p>
                    <p>Итак, вашему автомобилю нужен мастер или СТО? Вы ищите выгодную цену и порядочного исполнителя? Это именно то, чем мы занимаемся, нажмите сдесь и начните поиск вашего мастера</p>
                    <br />
                    <p><span>Вы представляете СТО или вы самозянятый механик, который оказывает услуги на дому и вы заитересованы в новых клиентах и увеличении дохода? Нажмите здесь, чтобы узнать больше.</span></p>
                </div>
            </div>

            <div className="reviewBlock">
                <h2>Последние отзывы</h2>
                <p>Отзывы клиентов “Твой Мастер”</p>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="reviewRight">
                                <ul>
                                    <li>
                                        <ul className="reviewStars">
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><p>BMW M5 - замена масла и фильтров</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="avatarBlock">
                                            <div className="avatarReview"><img src={require('../../img/revue.jpg')} alt="" /></div>
                                            <div>
                                                <p>Сергей Иванович рекомендует</p>
                                                <p>СТО “АвтоСистемы”</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>Отличный сервис. Замену масла и фильтров произвели быстро,
                                            полностью накрыли салон, автомобиль остался чистый после ремонта.
                                            На очереди замена колодок, поеду только сюда! Всем рекомендую.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="reviewLeft">
                                <p>12.03.2020</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="reviewRight">
                                <ul>
                                    <li>
                                        <ul className="reviewStars">
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><p>Porshe Cayman - покраска кузова</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="avatarBlock">
                                            <div className="avatarReview"><img src="autoImg/rocky.jpg" alt="" /></div>
                                            <div>
                                                <p>Роки Бальбоа рекомендует</p>
                                                <p>СТО “Painer”</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>Очень понравилось качество работ, покраска выполнена на 100%.
                                            На очереди замена колодок, поеду только сюда! Всем рекомендую.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="reviewLeft">
                                <p>12.03.2020</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="reviewRight">
                                <ul>
                                    <li>
                                        <ul className="reviewStars">
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><img src={require('../../img/star.png')} alt="star" /></li>
                                            <li><p>Lexus LX470 - замена двигателя</p></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="avatarBlock">
                                            <div className="avatarReview"><img src={require('../../img/brad.jpg')} alt="" /></div>
                                            <div>
                                                <p>Брэд Питт рекомендует</p>
                                                <p>СТО “АвтоРемонт”</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>Качественный сервис. Но были нюансы, поэтому ставлю 4 звезды!</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="reviewLeft">
                                <p>12.03.2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="beforeFooterMenu">
                <h2>Выберите мастера или сто по популярным локациям, маркам автомобиля или специфике услуг</h2>
                <div className="container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <ul className="preFooterItems">
                                <li>ТО</li>
                                <li>Замена масла</li>
                                <li>Покраска Кузова</li>
                                <li>Рихтовка</li>
                            </ul>
                            <ul className="preFooterItems">
                                <li>ТО</li>
                                <li>Замена масла</li>
                                <li>Покраска Кузова</li>
                                <li>Рихтовка</li>
                            </ul>
                            <ul className="preFooterItems">
                                <li>ТО</li>
                                <li>Замена масла</li>
                                <li>Покраска Кузова</li>
                                <li>Рихтовка</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <ul className="preFooterItems">
                                <li>Toyota</li>
                                <li>Subaru</li>
                                <li>BMW</li>
                                <li>Mersedes-Benz</li>
                            </ul>
                            <ul className="preFooterItems">
                                <li>Toyota</li>
                                <li>Subaru</li>
                                <li>BMW</li>
                                <li>Mersedes-Benz</li>
                            </ul>
                            <ul className="preFooterItems">
                                <li>Toyota</li>
                                <li>Subaru</li>
                                <li>BMW</li>
                                <li>Mersedes-Benz</li>
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <ul className="preFooterItems">
                                <li>Киев</li>
                                <li>Харьков</li>
                                <li>Днепр</li>
                                <li>Одесса</li>
                            </ul>
                            <ul className="preFooterItems">
                                <li>Киев</li>
                                <li>Харьков</li>
                                <li>Днепр</li>
                                <li>Одесса</li>
                            </ul>
                            <ul className="preFooterItems">
                                <li>Киев</li>
                                <li>Харьков</li>
                                <li>Днепр</li>
                                <li>Одесса</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="takeYourValue">
                <div className="container">
                    <h2>
                        Получите оценку прямо сейчас
                    </h2>
                    <button className="btn btn-success setJob takeYourValueBtn">Разместить работу</button>
                </div>
            </div>
        </div>
    );
}