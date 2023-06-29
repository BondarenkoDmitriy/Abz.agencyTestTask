import React from 'react';
import './infoSection.scss';

export const InfoSection: React.FC = () => {
  return (
    <>
      <div className="container container__infoSection">
        <div className="infoSection">
          <h1>
            Test assignment for
            <br />
            front-end developer
          </h1>
          <p className="infoSection__textInfo">
            What defines a good front-end developer is
            <br />
            one that has skilled knowledge of HTML,
            <br />
            CSS, JS with a vast understanding of User
            <br />
            design thinking as they&apos;ll be building web
            <br />
            interfaces with accessibility in mind. They
            <br />
            should also be excited to learn, as the world
            <br />
            of Front-End Development keeps evolving.
          </p>
          <div className="button__user">
            <button className="button" type="button">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};
