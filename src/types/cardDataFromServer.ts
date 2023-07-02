import { CardData } from './carddata';
import { LinkFromCardData } from './linkFromCardData';

export interface CardDataFromServer {
  data(data: any): unknown;
  success: boolean,
  total_pages: number,
  total_users: number,
  count: number,
  page: number,
  links: LinkFromCardData,
  users: CardData[],
}
