import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import statisticsLogo from './images/statisticsLogo.png';
import loginLogo from './images/loginLogo.png';
import recodeLogo from './images/recodeLogo.png';
import moneystopLogo from './images/moneystopLogo.png';

const Navigation = () => {
  return (
    <div className="nav-bar">
      <div className='home-icon'>
        <Link to="/">
          <img src={moneystopLogo} alt='홈 로고' className='nav-icon' />
        </Link>
      </div>
      <div className='icons-container'>
        <Link to="/login">
          <img src={loginLogo} alt='로그인 페이지 로고' className='nav-icon' />
        </Link>
        <Link to="/transaction">
          <img src={recodeLogo} alt='수입 및 지출 내역 페이지 로고' className='nav-icon' />
        </Link>
        <img src={statisticsLogo} alt='통계 페이지 로고' className='nav-icon' />
      </div>
    </div>
  );
};

export default Navigation;
