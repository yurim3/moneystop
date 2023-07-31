import React from 'react';
import './Navigation.css';
import statisticsLogo from './images/statisticsLogo.png';
import loginLogo from './images/loginLogo.png';
import recodeLogo from './images/recodeLogo.png';
import moneystopLogo from './images/moneystopLogo.png';


const Navigation = () => {
  return (
    <div className="nav-bar">
        <div className='home-icon'>
            <img src={moneystopLogo} alt='홈 로고' className='nav-icon' />
        </div>
        <div className='icons-container'>
            <img src={loginLogo} alt='로그인 페이지 로고' className='nav-icon' />
            <img src={recodeLogo} alt='수입 및 지출 내역 페이지 로고' className='nav-icon' />
            <img src={statisticsLogo} alt='통계 페이지 로고' className='nav-icon' />
        </div>
    </div>
  );
};

export default Navigation;
