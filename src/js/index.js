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

        console.log('click');
        btnsTrends($trendingMoviesPreviewList,e.target.textContent);
    }
});