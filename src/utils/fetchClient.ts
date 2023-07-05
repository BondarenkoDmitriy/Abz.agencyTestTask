/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormValues } from '../types/formTypes';
import { BASE_URL } from './globalVariables';

type RequestMethod = 'GET' | 'POST';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: FormValues | null = null,
  token?: string,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    // options.body = JSON.stringify(data);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // options.headers = {
    //   'Content-Type': 'application/json',
    //   'Media type': 'application/json',
    // };
    options.body = formData;
  }

  if (token) {
    // eslint-disable-next-line no-console
    console.log('token', token);

    options.headers = {
      ...options.headers,
      // Token: `Bearer ${token}`,
      // 'Media-type': 'application/json',
      Token: token,
      // Authorization: `Bearer ${token}`,
    };
  }

  return fetch(BASE_URL + url, options)
    .then(async response => {
      if (!response.ok) {
        const errorData = await response.json();

        throw new Error(`Request failed with status ${response.status}: ${errorData.message}`);
      }

      return response.json();
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log('Error:', error);
      throw error;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: FormValues, token: string) => request<T>(url, 'POST', data, token),
};
