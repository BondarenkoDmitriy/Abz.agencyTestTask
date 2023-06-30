import { CardDataFromServer } from '../types/cardDataFromServer';
import { client } from '../utils/fetchClient';

export const getNewestCards = (page: number, count: number) => {
  return client.get<CardDataFromServer>(`users?page=${page}&count=${count}`);
};
