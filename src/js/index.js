import { navigator } from './navigation/navigator.js';
import { btnsTrends } from './interactive/btnsTrends.js';

const d = document;
const w = window;

const $btnScrollTop = d.querySelector('.btn-scrollTop');

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

    if(e.target.matches('.btn-scrollTop')){

        console.log(e.target);
        w.scrollTo(0,0);
    }

});


d.addEventListener('scroll', e => {

    if(w.pageYOffset > 500){
        $btnScrollTop.classList.remove('hidden');
        return;
    }
    $btnScrollTop.classList.add('hidden');
    return;
});