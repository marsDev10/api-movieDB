import { getTrendingMoviesPreview } from './petitions/getTrendingMovies.js';
import { getCategoriesList } from './petitions/getCategorieList.js';
import { navigator } from './navigation/navigator.js';

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', e => {
    
    navigator();
    
}, false);

w.addEventListener('hashchange', e => {

    navigator();
}, false);


d.addEventListener('click' , e => {

});