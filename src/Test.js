import "./test.css";
import logo from "./common/inextLogo.svg"
import facebook from "./common/assest/icons/facebook.png";
import linkedin from "./common/assest/icons/linkedin.png";
import instagram from "./common/assest/icons/instagram.png";
import twitter from "./common/assest/icons/twitter.png";
export default function Test() {
  return (
    <div className=" foots">
      <div className="f-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="f-detail">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis libero molestiae maiores eaque, reprehenderit quaerat asperiores natus harum soluta?</p> */}
      </div>
      <div className="footer-menu">
        <ul>
        <li><a href="/contact">Contact us</a></li>
        <li><a href="/">SERVICES</a></li>
        <li><a href="/">LOCATION</a></li>
        <li><a href="/">BLOG</a></li>

        </ul>
      </div>
      <div className="follow-Us">
            <span>Follow Us</span>
            </div>
      <div className="social-icon d-flex">
        <div className="icon-img d-flex">
          
          <a href="fv">
            <img src={facebook} alt="loading"></img>
          </a>
        </div>
        <div className="icon-img">
          <a href="https">
            <img src={linkedin} alt="loading"></img>
          </a>
        </div>
        <div className="icon-img">
          <a href="ht">
            <img src={instagram} alt="loading"></img>
          </a>
        </div>
        <div className="icon-img">
          <a href="h">
            <img src={twitter} alt="loading"></img>
          </a>
        </div>
      </div>
      <div className="copy-right">
          <p>Copyright © 2023 Inext Softwares. All Rights Reserved.</p>
      </div>
    </div>
  );
}
