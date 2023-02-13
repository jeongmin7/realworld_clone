import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [userinfo, setUserinfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});

  const userInfoHandler = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };
  const signupHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users`, {
        user: {
          username: userinfo.name,
          email: userinfo.email,
          password: userinfo.password,
        },
      })
      .then(res => localStorage.setItem('token', res.data.user.token))
      .then(() => alert('회원가입이 완료되었습니다.'))
      .catch(error => setError(error.response.data.errors));
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <a href="/signin">Have an account?</a>
            </p>
            {Object.keys(error).includes('username') && (
              <ul className="error-messages">
                <li>That username is already taken</li>
              </ul>
            )}
            {Object.keys(error).includes('email') && (
              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>
            )}

            <form onSubmit={signupHandler}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  onChange={userInfoHandler('name')}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  onChange={userInfoHandler('email')}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  onChange={userInfoHandler('password')}
                />
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
