/* eslint-disable */

import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};
type UserData = {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
};

type UpdateData = {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  password: string;
};
const Settings = (props: Props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    email: '',
    username: '',
    bio: '' || null,
    image: '',
    token: '',
  });
  const [updatedData, setUpdatedData] = useState<UpdateData>({
    email: '',
    password: '',
    username: '',
    bio: '',
    image: '',
  });
  const localStorageToken: any = localStorage.getItem('token');

  const getUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`, {
        headers: {
          authorization: `Bearer ${localStorageToken}`,
        },
      })
      .then(res => setUserData(res.data.user));
  };

  const { email, username, bio, image } = userData;
  useEffect(getUserInfo, []);

  const updatedDataHandler = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedData({ ...updatedData, [key]: e.target.value });
  };

  const updateUserInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user`,
        {
          user: { updatedData },
        },
        {
          headers: {
            authorization: `Bearer ${localStorageToken}`,
          },
        }
      )
      .then(() => navigate('/'));
  };
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <form onSubmit={updateUserInfo}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="URL of profile picture"
                    onChange={updatedDataHandler('image')}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    defaultValue={username}
                    onChange={updatedDataHandler('username')}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows={8}
                    placeholder="Short bio about you"
                  >
                    {bio}
                  </textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    defaultValue={email}
                    onChange={updatedDataHandler('email')}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    onChange={updatedDataHandler('password')}
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger">Or click here to logout.</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
