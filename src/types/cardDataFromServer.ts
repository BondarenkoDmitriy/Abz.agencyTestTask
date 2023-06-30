import { CardData } from './carddata';
import { LinkFromCardData } from './linkFromCardData';

export interface CardDataFromServer {
  success: boolean,
  total_pages: number,
  total_users: number,
  count: number,
  page: number,
  links: LinkFromCardData,
  users: CardData[],
}
