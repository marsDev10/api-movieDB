import { getTrendingMoviesPreview } from '../../petitions/getTrendingMovies.js';
import { getCategoriesList } from '../../petitions/getCategorieList.js';

export const home = () => {

    getTrendingMoviesPreview();
    getCategoriesList();
    console.log("Home!!");
};