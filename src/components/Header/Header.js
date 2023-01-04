import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return <header>
    <div className='container'>
      <div className='header-up'>
        <Link to=''>
          <span>+8801878116232</span>
        </Link>
        <div>
          <div>
            <Link to=''>বাংলা</Link>
            <Link to=''><i class="fa-solid fa-user"></i> Sign In</Link>
            <Link to=''><i class="fa-solid fa-user-plus"></i> Sign Up</Link>
          </div>
          <div>
            <Link to=''><i class="fa-brands fa-facebook-f"></i></Link>
            <Link to=''><i class="fa-brands fa-youtube"></i></Link>
            <Link to=''><i class="fa-brands fa-twitter"></i></Link>
            <Link to=''><i class="fa-brands fa-instagram"></i></Link>
            <Link to=''><i class="fa-brands fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
      <div className='header-down-main'>
        <div className='header-down'>
          <div className='bg-light'>
            <Link className='header-logo' to=''><img src='https://onetakameal.org/uploads/ahar_settings/logo.jpg' alt=''></img></Link>
            <ul className='header-mid'>
              <li><Link to=''><span>Bidyanondo</span></Link></li>
              <li><Link to=''><span>Special Meal</span></Link></li>
              <li className='position-relative'><Link to=''>
                DONATIONS
                <i class="fa-solid fa-angle-down"></i>
                <ul className='position-absolute'>
                  <li><Link to=''>DONATE NOW</Link></li>
                  <li><Link to=''>SPONSOR NOW</Link></li>
                  <li><Link to=''>DONATION CLARIFICATION</Link></li>
                  <li><Link to=''>BANK INFORMATION</Link></li>
                </ul>
              </Link></li>
              <li><Link to=''>FOOD PROJECTS<i class="fa-solid fa-angle-down"></i></Link></li>
              <li><Link to=''>MEDIA<i class="fa-solid fa-angle-down"></i></Link></li>
              <li><Link to=''>ABOUT<i class="fa-solid fa-angle-down"></i></Link></li>
              <li><Link to=''>SIGN IN<i class="fa-solid fa-angle-down"></i></Link></li>
            </ul>
          </div>
          <button className='header-button'>
            <span>DONATE NOW</span>
          </button>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
