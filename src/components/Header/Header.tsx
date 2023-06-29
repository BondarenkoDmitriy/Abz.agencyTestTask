/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.scss';
import Logo from '../../pictures/Logo.svg';

export const Header: React.FC = () => {
  return (
    <>
      <div className="container container__header">
        <div className="header">
          <div className="header__logo">
            <a href="#">
              <img
                src={Logo}
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <div className="header__buttons">
            <div className="button__user">
              <button className="button" type="button">User</button>
            </div>
            <div className="button__user">
              <button className="button" type="button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
