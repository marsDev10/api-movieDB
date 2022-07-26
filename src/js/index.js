import { navigator } from './navigation/navigator.js';
import { btnsTrends } from './interactive/btnsTrends.js';
const d = document;
const w = window;

d.addEventListener('DOMContentLoaded', e => {
    
    navigator();
}, false);

w.addEventListener('hashchange', e => {

    navigator();
}, false);

d.addEventListener('click', e => {

    if(e.target.matches('.btnsTrending--button')){

        let parent = e.target.parentNode;
        
        //Comparasión sobre el contenedor padre
        //del elemento
        if(parent === d.querySelector('.relatedMovies-container')){
            btnsTrends($relatedMoviesContainer, e.target.textContent);
        }else {
            btnsTrends($trendingMoviesPreviewList,e.target.textContent);
        }
    }


});