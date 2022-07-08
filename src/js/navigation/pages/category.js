// import { getMoviesByCategory } from '../../petitions/getMoviesByCategory.js';
import { getAndAppendMovies } from '../../petitions/getAndAppendMovies.js';

export const categoryPage = (id) => {

    $headerCategoryTitle.textContent = location.hash.split('-')[1].toUpperCase().split('%')[0];
    $headerSection.classList.remove('header-container--long');
    $headerSection.style.background = '';
    $arrowBtn.classList.remove('inactive');
    $arrowBtn.classList.remove('header-arrow--white');
    $headerTitle.classList.add('inactive');
    $headerCategoryTitle.classList.remove('inactive');
    $searchForm.classList.add('inactive');

    $trendingPreviewSection.classList.add('inactive');
    $categoriesPreviewSection.classList.add('inactive');
    $genericSection.classList.remove('inactive');
    $movieDetailSection.classList.add('inactive');

    //getMoviesByCategory(id);
    getAndAppendMovies('discover/movie', $genericSection, {
        params: { 
            with_genres: id,
        }
    })
};

