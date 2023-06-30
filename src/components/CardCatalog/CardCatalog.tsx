import React, { useEffect, useState } from 'react';
import './cardCatalog.scss';
import Preloader from '../../pictures/Preloader.png';
import { getNewestCards } from '../../api/cards';
import { CardData } from '../../types/carddata';
import { CardDataFromServer } from '../../types/cardDataFromServer';

export const CardCatalog: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 5000));
        const newestCards: CardDataFromServer = await getNewestCards(currentPage, 6);

        // eslint-disable-next-line no-console
        console.log(newestCards.users);

        setCards(prevCards => [...prevCards, ...newestCards.users]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching newest cards:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [currentPage]);

  const handleShowMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div className="container container__cardCatalog">
        <h1 className="cardCatalog__header">Working with GET request</h1>
        <div className="card__container">
          {cards.map(({
            id,
            photo,
            name,
            position,
            email,
            phone,
          }) => {
            const processedName = name.length > 25 ? `${name.slice(0, 25)}...` : name;

            const processedPosition = position.length > 20 ? `${position.slice(0, 20)}...` : position;

            const processedEmail = email.length > 30 ? `${email.slice(0, 25)}...` : email;

            // const processedPhone = phone.length > 12 ? `${phone.slice(0, 12)}...` : phone;

            return (
              <div className="cardCatalog__card" key={id}>
                <div>
                  <img className="cardCatalog__card__photo" src={photo} alt="card__photo" />
                </div>
                <div className="cardCatalog__card__name">{processedName}</div>
                <div className="cardCatalog__card__info">
                  {processedPosition}
                  <br />
                  {processedEmail}
                  <br />
                  {phone}
                </div>
              </div>
            );
          })}
        </div>
        {loading ? (
          <div className="loader">
            <img className="loader__img" src={Preloader} alt="Loading..." />
          </div>
        ) : (
          <div className="button__show-more">
            <button
              className="button"
              type="button"
              onClick={handleShowMore}
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </>
  );
};
