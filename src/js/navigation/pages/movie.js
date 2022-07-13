import { getMovie } from '../../petitions/getMovie.js';
import { getRelatedMovies } from '../../petitions/getRelatedMovies.js';

export const moviePage = (id) => {

    console.log("Movies!!");
    getMovie(id);
    
    $headerSection.classList.add('header-container--long');
    //$headerSection.style.background = '';
    $arrowBtn.classList.remove('inactive');
    $arrowBtn.classList.add('header-arrow--white');
    $headerTitle.classList.add('inactive');
    $headerCategoryTitle.classList.add('inactive');
    $searchForm.classList.add('inactive');
    
    $trendingPreviewSection.classList.add('inactive');
    $categoriesPreviewSection.classList.add('inactive');
    $genericSection.classList.add('inactive');
    $movieDetailSection.classList.remove('inactive');

    getRelatedMovies(id);
};