import './Footer.css';
import logo from '../../image/logo.png';
function Footer() {
      return (
            <footer className="footer">
                  <div className="footer__addr">
                        <div className="icon"><img src={logo} alt="" /></div>
                        <h1 className="footer__logo">Something</h1>

                        <h2>Liên Hệ</h2>

                        <address>
                        76/16, Đường Dương Văn Cam ,Quận Thủ Đức<br />

                              <a className="footer__btn" href="mailto:example@gmail.com">Email</a>
                        </address>
                  </div>

                  <ul className="footer__nav">
                        <li className="nav__item">
                              <h2 className="nav__title">Trang Chủ</h2>

                              <h2 className="nav__title">Giới Thiệu</h2>
                        </li>

                        <li className="nav__item nav__item--extra">
                              <h2 className="nav__title">Thời Trang Nam</h2>

                              <ul className="nav__ul nav__ul--extra">
                                    <li>
                                          <a href="#"></a>
                                    </li>

                                    <li>
                                          <a href="#">Giày Nam</a>
                                    </li>

                                    <li>
                                          <a href="#">Áo Nam</a>
                                    </li>

                                    <li>
                                          <a href="#">Quần Nam</a>
                                    </li>

                                    <li>
                                          <a href="#">Quần Thể Thao Nam</a>
                                    </li>

                                    
                              </ul>
                        </li>

                        <li className="nav__item">
                              <h2 className="nav__title">Thời Trang Nữ</h2>

                              <ul className="nav__ul">
                                    <li>
                                          <a href="#">Giày Nữ</a>
                                    </li>

                                    <li>
                                          <a href="#">Áo Nữ</a>
                                    </li>

                                    <li>
                                          <a href="#">Quần Nữ</a>
                                    </li>

                                    <li>
                                          <a href="#">Quần Thể Thao Nữ</a>
                                    </li>
                              </ul>
                        </li>
                  </ul>

                  <div className="legal">
                        <p>&copy; 2022 Copyright &copy;</p>

                        <div className="legal__links">
                              <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                        </div>
                  </div>
            </footer>
      );
}

export default Footer;
