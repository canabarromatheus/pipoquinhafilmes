import { http } from './api'

export default {
  findAll: () => {
    return http.get('movies');
  },
  findById: (movie) => {
    return http.get(`movies/${movie.id}`, { data: movie});
  },
  save: (movie) => {
    return http.post('movies', movie);
  },
  delete: (movie) => {
    return http.delete(`movies/${movie.id}`, { data: movie});
  },
  update: (movie) => {
    return http.put(`movies`, movie);
  }
}
