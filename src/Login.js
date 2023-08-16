import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginLogoB from './images/loginLogoB.png';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('로그인 시도');
        console.log('아이디:', id);
        console.log('비밀번호:', password);
    };

    return (
        <div>
            <div className='login-container'>
                <img src={loginLogoB} alt="로그인 로고" className='logo-image' />
                <form>
                    <input type='id' className='form-control' id='exampleFormControlInput1' placeholder='아이디' value={id}
                        onChange={(e) => setId(e.target.value)} />
                    <input type='password' className='form-control' id='exampleFormControlInput2' placeholder='비밀번호' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className='btn btn-success' onClick={handleLogin}>
                        로그인
                    </button>
                    <p>
                        회원이 아니신가요?  <Link to="/signup" className='signup-link'>회원가입</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
