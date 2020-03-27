const URL = 'http://www.omdbapi.com/';
const API_KEY = '1bb17a09';

export async function getImdbMovie(name) {
  const url = `${URL}?t=${name}&apikey=${API_KEY}`;
  return fetch(url).then(response => response.json());
}
