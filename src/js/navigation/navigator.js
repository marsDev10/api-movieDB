import { homePage } from './pages/home.js';
import { trendsPage } from './pages/trends.js';
import { searchPage } from './pages/search.js';
import { categoryPage } from './pages/category.js';
import { moviePage } from './pages/movie.js';
import { getMovie } from '../petitions/getMovie.js';

let idCategory;
let titleCategory;
let searchValue;

document.addEventListener('click', e => {
    e.preventDefault();


    if(e.target === $searchFormBtn){

        if(!$searchFormInput.value) return;
        searchValue = $searchFormInput.value.trim().toLowerCase();
        location.hash = `#search=${searchValue}`;
    }

    if(e.target === $trendingBtn){

        location.hash = "#trends";
    }

    if(e.target === $arrowBtn){
        window.scrollTo(0,0);

        console.log(window.history.length);
        window.history.back();
    }

    if(e.target.matches('.category-container *')){

        idCategory = e.target.dataset.id;
        titleCategory = e.target.textContent;

        location.hash = `category=${e.target.dataset.id}-${e.target.textContent.toLowerCase()}`;
    }

    if(e.target.matches('.movie-container *')){
        console.log(e.target);
        getMovie(e.target.dataset.id);
    }   
});

export const navigator = () => {
    
    console.log({ location });

    if(location.hash.startsWith('#trends')){
        
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        
        searchPage(searchValue);
    }else if(location.hash.startsWith('#movie=')){
        
        moviePage();
    }else if(location.hash.startsWith('#category=')) {
        console.log(titleCategory);

        $headerCategoryTitle.textContent = titleCategory;
        categoryPage(idCategory);
    }else {

        homePage();
    }

    location.hash;
};

