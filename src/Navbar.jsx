import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleClick = () => {
    // Your click handler logic here
  };

  return (
    <nav>
      <div className="nav__logo">
        <a href="/assets/stayhealthy.png">
          StayHealthy
          <svg xmlns="https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/299431559_448580837288628_4926803580560452916_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFbSPOMNO9G-ehcknkcdT6ve0NCs9wvhVF7Q0Kz3C-FUVNS1SQnx-nR4vcVg9SkT1wN3FNSLUp5FCSrAl3PSDhG&_nc_ohc=C60LdjncvgYQ7kNvgGQIFcL&_nc_ht=scontent.fmnl37-1.fna&oh=00_AfAsyU0c0ebYC1BNEqNOoECxwSBX_jj3E2KZoSrP9rwgxw&oe=66354AFE" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
            <title>Doctor With Stethoscope SVG icon</title>
            <g>
              <g>
                <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44.4,77.2-89.2v-158c-90.5-15.2-160.1-94-160.8-188.9c-89.4,11.5-158.2,87.9-158.2,180.5V910c0,44.2,35.8,80,80,80h542.6c44.2,0,80.1-35.8,80.1-80V575.5C851.4,483,782.6,406.6,693.2,395z"></path>
              </g>
            </g>
          </svg>
        </a>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>
      <ul className="nav__links active">
        <li className="link">
          <a href="../Landing_Page/LandingPage.html">Home</a>
        </li>
        <li className="link">
          <a href="#">Appointments</a>
        </li>
        <li className="link">
          <a href="../Sign_Up//Sign_Up.html">
            <button className="btn1">Sign Up</button>
          </a>
        </li>
        <li className="link">
          <a href="../Login/Login.html">
            <button className="btn1">Login</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
