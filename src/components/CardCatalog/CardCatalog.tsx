import React from 'react';
import './cardCatalog.scss';
import photoCard from '../../pictures/temp/photoCard.png';

export const CardCatalog: React.FC = () => {
  return (
    <>
      <div className="container container__cardCatalog">
        <h1 className="cardCatalog__header">Working with GET request</h1>
        <div className="card__container">
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
          <div className="cardCatalog__card">
            <div className="cardCatalog__card__photo">
              <img src={photoCard} alt="card__photo" />
            </div>
            <div className="cardCatalog__card__name">
              Salvador Stewart Flynn Thomas Salva...
            </div>
            <div className="cardCatalog__card__info">
              {/* <p className="cardCatalog__card__info-position"></p>
              <p className="cardCatalog__card__info-email"></p>
              <p className="cardCatalog__card__info-phone"></p> */}
              Leading specialist of the department o...
              <br />
              JeromeKlarkaJeromeKlarka19233623...
              <br />
              +38 (098) 278 76 24
            </div>
          </div>
        </div>
        <div className="button__show-more">
          <button className="button" type="button">Show more</button>
        </div>
      </div>
    </>
  );
};
