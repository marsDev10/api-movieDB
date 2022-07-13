import { getCategoriesList } from '../../petitions/getCategoriesList.js';
import { getAndAppendMovies } from '../../petitions/getAndAppendMovies.js';

export const homePage = () => {

    //getTrendingMoviesPreview();
    getAndAppendMovies('trending/movie/day', $trendingMoviesPreviewList);
    getCategoriesList();

    $headerSection.classList.remove('header-container--long');
    $headerSection.style.background = '';
    $arrowBtn.classList.add('inactive');
    $arrowBtn.classList.remove('header-arrow--white');
    $headerTitle.classList.remove('inactive');
    $headerCategoryTitle.classList.add('inactive');
    $searchForm.classList.remove('inactive');

    $trendingPreviewSection.classList.remove('inactive');
    $categoriesPreviewSection.classList.remove('inactive');
    $genericSection.classList.add('inactive');
    $movieDetailSection.classList.add('inactive');


    console.log("Home!!");
};