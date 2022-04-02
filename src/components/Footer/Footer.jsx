import { Button } from "../UI/buttons/Button";
import { Icon } from "../UI/Icon/Icon";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <h3>
              <span>Твой</span>Мастер
            </h3>
            <a href="tel:+380631349272">
              <Icon name="phone" />
              +38063 134 92 72
            </a>
            <ul className="footerFirst">
              <li>
                <a href="">О нас</a>
              </li>
              <li>
                <a href="">Помощь</a>
              </li>
              <li>
                <a href="">Блог</a>
              </li>
              <li>
                <a href="">Пресса</a>
              </li>
              <li>
                <a href="">Связаться с нами</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 col-12">
            <p>Мы в социальных сетях</p>
            <ul className="footerImgBlock">
              <li>
                <a href="https://linkedin.com">
                  <Icon name="linkedin" size={3} />
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <Icon name="facebook" size={3} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <Icon name="instagram" size={3} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <Icon name="twitter" size={3} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <p>Вы мастер или СТО?</p>
            <Button className="howItWorksBtn">Узнать больше</Button>
          </div>
        </div>

        <div className="row lastFooterInfo g-3">
          <div className="col-lg-5 col-sm-12 col-12">
            © 2021 twoimaster.com.ua
          </div>
          <div className="col-lg-3 col-sm-12 col-12">Правовая информация</div>
          <div className="col-lg-4 col-sm-12 col-12">
            Политика использования файлов cookie
          </div>
        </div>
      </div>
    </footer>
  );
}
