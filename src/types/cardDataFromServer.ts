import { CardData } from './carddata';
import { FormValues } from './formTypes';
import { LinkFromCardData } from './linkFromCardData';

export interface CardDataFromServer {
  data(data: FormValues): unknown;
  success: boolean,
  total_pages: number,
  total_users: number,
  count: number,
  page: number,
  links: LinkFromCardData,
  users: CardData[],
}
