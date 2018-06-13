import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

/* eslint-disable import/prefer-default-export, no-use-before-define */
export function getUsers() {
  return get('users');
}

/**
 * Deletes a user specified by its id.
 * @param {number} id ID of user to delete.
 */
export function deleteUser(id) {
  return del(`users/${id}`);
}

/**
 * Function used as a callback for fetch's `then` method. It returns the JSON from the response.
 */
function onSuccess(response) {
  console.log(response.json()); // eslint-disable-line no-console
  return response.json();
}

/**
 * Function used as a callback for fetch's `then` method. If `then` fails, we log the error.
 */
function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

/**
 * Gets the full URL depending on the environment.
 */
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

/**
 * Delete
 * Can't call the function `delete` since it is a reserved word
 *
 * @param {string} url URL of element to delete
 */
function del(url) {
  const request = new Request(baseUrl + url, { method: 'DELETE' });

  return fetch(request).then(onSuccess, onError);
}
