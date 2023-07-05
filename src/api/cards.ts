import { CardDataFromServer } from '../types/cardDataFromServer';
import { FormValues } from '../types/formTypes';
import { PositionTypes } from '../types/positionTypes';
import { client } from '../utils/fetchClient';
import { TokenType } from '../types/tokenType';

export const getNewestCards = (page: number, count: number) => {
  return client.get<CardDataFromServer>(`users?page=${page}&count=${count}`);
};

export const getToken = () => {
  // eslint-disable-next-line no-console
  console.log(client.get<TokenType>('token'));

  return client.get<TokenType>('token');
};

export const postSubmitedCard = async (data: FormValues) => {
  const { token } = await getToken();

  // eslint-disable-next-line no-console
  console.log('Token:', token);

  return client.post<CardDataFromServer>('users', data, token);
};

// export const postSubmitedCard = async (data: FormValues) => {
//   const { token } = await getToken();

//   const formData = new FormData();

//   Object.entries(data).forEach(([key, value]) => {
//     formData.append(key, value);
//   });

//   return client.post<CardDataFromServer>('users', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

export const getPositions = () => {
  return client.get<PositionTypes[]>('api/v1/positions');
};
