// Signup.js (프론트엔드)
import React, { useState } from 'react';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginLogoB from './images/loginLogoB.png';
import axios from 'axios';

const Signup = () => {
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignUp = () => {
    // 회원가입 버튼을 클릭했을 때 실행되는 함수
    console.log('회원가입 시도');
    console.log('아이디:', newUserId);
    console.log('비밀번호:', newPassword);

    // 서버로 회원가입 정보 전달
    axios.post('/signup', { newUserId, newPassword })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('회원가입 오류:', error.response.data.error);
      });
  };

  return (
    <div>
      <div className='signup-container'>
        <img src={loginLogoB} alt="로그인 로고" className='logo-image' />
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='아이디'
            value={newUserId}
            onChange={(e) => setNewUserId(e.target.value)}
          />
          <input
            type='password'
            className='form-control'
            placeholder='비밀번호'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className='btn btn-success' onClick={handleSignUp}>
            회원가입
          </button>
          <a href="/" className='login-btn'>로그인</a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
