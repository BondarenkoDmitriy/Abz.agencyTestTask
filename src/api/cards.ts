import { CardDataFromServer } from '../types/cardDataFromServer';
import { FormValues } from '../types/formTypes';
import { PositionTypes } from '../types/positionTypes';
import { client } from '../utils/fetchClient';

export const getNewestCards = (page: number, count: number) => {
  return client.get<CardDataFromServer>(`users?page=${page}&count=${count}`);
};

export const getToken = () => {
  return client.get<string>('token');
};

export const postSubmitedCard = (data: FormValues) => {
  return client.post<CardDataFromServer>('users', data);
};

export const getPositions = () => {
  return client.get<PositionTypes[]>('api/v1/positions');
};
