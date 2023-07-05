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

  //   const formatedFile = {
  //     'lastModified': data?.photo?.lastModified,
  //     'lastModifiedDate': data?.photo?.lastModifiedDate,
  //     'name': data?.photo?.name,
  //     'size': data?.photo?.size,
  //     'type': data?.photo?.type,
  //  };
  //   }

  if (data) {
    options.body = JSON.stringify(data);

    // eslint-disable-next-line no-console
    console.log('-----------------------');
    // eslint-disable-next-line no-console
    console.log(options.body);
    options.headers = {
      'Content-Type': 'application/json',
      // 'Media type': 'application/json',
    };
  }

  if (token) {
    // eslint-disable-next-line no-console
    console.log('token', token);

    options.headers = {
      ...options.headers,
      // Token: `Bearer ${token}`,
      // 'Media-type': 'application/json',
      Token: token,
    };
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
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
