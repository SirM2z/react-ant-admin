import React from "react";
import { USER_TOKEN } from 'constant';
import { setLS } from 'utils';

const Login = () => {
  // 登录
  setLS(USER_TOKEN, 'login');
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
};

export default Login;
