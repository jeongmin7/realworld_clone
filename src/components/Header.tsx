/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { loginActions } from '../store/Loginslice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  const logoutHandler = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch(loginActions.logout());
    navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              {/* <!-- Add "active" className= when you're on that page" --> */}
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            {isLogin ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/editor">
                    <i className="ion-compose"></i>&nbsp;New Article
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="settings">
                    <i className="ion-gear-a"></i>&nbsp;Settings
                  </a>
                </li>
                <li className="nav-item" onClick={logoutHandler}>
                  <div className="nav-link">
                    <i className="ion-gear-a"></i>&nbsp;Logout
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/signin">
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign up
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
