/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormValues } from '../types/formTypes';
import { BASE_URL } from './globalVariables';

type RequestMethod = 'GET' | 'POST';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: FormValues | null = null,
  token?: any,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      'Media type': 'application/json',
    };
  }

  if (token && token.success) {
    // eslint-disable-next-line no-console
    console.log('token', token);

    options.headers = {
      ...options.headers,
      // Token: `Bearer ${token}`,
      'Media type': 'application/json',
      Token: token.token,
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: FormValues, token = '') => request<T>(url, 'POST', data, token),
};
