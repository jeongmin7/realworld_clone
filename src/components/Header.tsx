import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Header = () => {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
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
