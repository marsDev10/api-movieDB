import { homePage } from './pages/home.js';
import { trendsPage } from './pages/trends.js';
import { searchPage } from './pages/search.js';
import { categoryPage } from './pages/category.js';
import { moviePage } from './pages/movie.js';

let idCategory;
let titleCategory;
let idMovie;

document.addEventListener('click', e => {
    e.preventDefault();
    
    if(e.target === $searchFormBtn){

        location.hash = `#search=${$searchForm.search.value}`;
        if(!$searchFormInput.value) return;
    }

    if(e.target === $trendingBtn){

        location.hash = "#trends";
        console.log("Trends");
    }

    if(e.target === $arrowBtn){
        window.scrollTo(0,0);
        $headerSection.style.background = '';
        window.history.back();
    }

    if(e.target.matches('.category-container *')){

        idCategory = e.target.dataset.id;
        titleCategory = e.target.textContent;

        location.hash = `category=${e.target.dataset.id}-${e.target.textContent.toLowerCase()}`;
    }

    if(e.target.matches('.movie-container *')){

        window.scrollTo(0,0);
        location.hash = `#movie=${e.target.dataset.id}-${e.target.alt}`;
    }   
});

export const navigator = () => {
    
    console.log({ location });

    if(location.hash.startsWith('#trends')){
        
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        
        let searchValue = location.hash.split('=')[1]; 
        searchPage(searchValue);
    }else if(location.hash.startsWith('#movie=')){

        idMovie = location.hash.split('=')[1].split('-')[0];
        moviePage(idMovie);
    }else if(location.hash.startsWith('#category=')) {
        
        $headerCategoryTitle.textContent = titleCategory;
        categoryPage(idCategory);
    }else {

        homePage();
    }

    location.hash;
};

