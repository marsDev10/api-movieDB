import { getAndAppendMovies } from './getAndAppendMovies.js';

export const getRelatedMovies = async (id) => {
    getAndAppendMovies(`movie/${id}/similar`, $relatedMoviesContainer);
};