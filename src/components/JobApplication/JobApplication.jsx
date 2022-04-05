/* eslint-disable */
import React, { Fragment } from 'react';
import TabBar from '../UI/tabbar/TabBar';
import TabBarItem from '../UI/tabbar/TabBarItem';
import "./JobApplication.css"

export const JobApplication = () => (
  <Fragment>
    <TabBar className='tab-bar-wrapper'>
      <TabBarItem label='1' >
        <div class="jobApplicationBlock">
          <div class="container">
            <form action="">
              <p class="progressBlock">Заявка<span> Шаг 1/3</span>
              </p>

              <p class="typeAuto">Тип транспорта</p>
              <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
              <label class="btn btn-secondary" for="option1"><img src={require('../../img/car1.png')} alt="" /> легковое авто</label>

              <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
              <label class="btn btn-secondary" for="option2"><img src={require('../../img/car1.png')} alt="" /> коммерческое авто</label>
              <p class="autoParametres">Выберите параметры автомобиля</p>
              <select name="marka" id="">
                <option disabled selected>марка</option>
                <option value="toyota">toyota</option>
                <option value="bmw">bmw</option>
                <option value="audi">audi</option>
                <option value="subaru">subaru</option>
              </select>
              <br />
              <select name="model" id="">
                <option disabled selected>модель</option>
                <option value="x1">x1</option>
                <option value="x2">x2</option>
                <option value="x3">x3</option>
                <option value="x4">x4</option>
              </select>
              <br />
              <select name="year" id="">
                <option disabled selected>год выпуска</option>
                <option value="toyota">2001</option>
                <option value="bmw">2002</option>
                <option value="audi">2003</option>
                <option value="subaru">2004</option>
              </select>
              <br />
              <input class="jobApplicationButton1" type="submit" value="ПРОДОЛЖИТЬ" />
            </form>
          </div>
        </div>
      </TabBarItem>
      <TabBarItem label='2'>
        <div class="jobApplicationBlock2">
          <div class="container">
            <form action="">
              <div class="title-wrapper">
                <p class="progressBlock">Заявка<span> Шаг 2/3</span></p>
                <span class="currentCar">Subaru Forester, 2016</span>
              </div>
              <p class="describeJob">Опишите работы по вашему автомобилю</p>
              <textarea name="" id="" cols="80" rows="5"
                placeholder="Покраска капота, покраска переднего бампера"></textarea>
              <br />
              <label for="photo">Загрузите фото подтверждения</label>
              <br />
              <input class="fileUploader" type="file" id="photo" title=" " />
              <p class="moreInfoFirst">Дополнительная информация</p>
              <p class="moreInfoSecond">Укажите больше информации, это поможет точнее оценить ремонт авто</p>
              <input type="text" placeholder="номер авто" />
              <input type="text" placeholder="VIN - код автомобиля" />
              <br />
              <div class="form-check form-check-inline checkBox2Step">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="avacuation" />
                <label class="form-check-label" for="inlineCheckbox1">Нужна эвакуация</label>
              </div>
              <div class="form-check form-check-inline checkBox2Step">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="details" />
                <label class="form-check-label" for="inlineCheckbox2">Свои запчасти</label>
              </div>

              <div class="formButtons2">
                <input type="submit" value="ВЕРНУТЬСЯ" />
                <input type="submit" value="ПРОДОЛЖИТЬ" />
              </div>
            </form>
          </div>
        </div>
      </TabBarItem>
      <TabBarItem label='3'>
        <div class="jobApplicationBlock">
          <div class="container">
            <form action="">
              <div class="title-wrapper">
                <p class="progressBlock">Заявка<span> Шаг 3/3</span></p>
                <span class="currentCar">Subaru Forester, 2016</span>
              </div>
              <p class="cityChoice">Выберите город в котором вы хотите получить услугу:</p>
              <select class="cityJob" name="city" id="">
                <option disabled selected>город</option>
                <option value="киев">киев</option>
                <option value="одесса">одесса</option>
                <option value="харьков">харьков</option>
                <option value="львов">львов</option>
              </select>
              <br />
              <p class="date">Желаемая дата ремонта</p>
              <label for="date"><img src={require("../../img/calendar.png")} alt="" /></label>
              <input class="dateInput" id="date" type="date" placeholder="444" />
              <br />
              <p class="phoneNumber">Номер телефона для получения SMS уведомлений с предложениями</p>
              <p class="phoneNumber2">Бесплатная услуга для владельцев авто</p>
              <label for="tel"><img src={require("../../img/mobile-phone.png")} alt="" /></label>
              <input id="tel" type="tel" />
              <p class="agremant3">Нажимая кнопку "Продолжить", вы подтверждаете свое согласие с
                <span>Пользовательским соглашением</span> и даёте <span>Согласие на обработку персональных
                  данных.</span>
              </p>
              <div class="formButtons2">
                <input type="submit" value="ВЕРНУТЬСЯ" />
                <input type="submit" value="ПРОДОЛЖИТЬ" />
              </div>
            </form>
          </div>
        </div>
      </TabBarItem>
      


    </TabBar>
  </Fragment >
);


/* eslint-enable */
