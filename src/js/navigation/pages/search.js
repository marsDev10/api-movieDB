import { getAndAppendMovies } from '../../petitions/getAndAppendMovies.js';

export const searchPage = (searchValue) => {

    console.log("Search!!");

    $headerCategoryTitle.textContent = searchValue;
    $headerSection.classList.remove('header-container--long');
    //$headerSection.style.background = '';
    $arrowBtn.classList.remove('inactive');
    $arrowBtn.classList.remove('header-arrow--white');
    $headerTitle.classList.add('inactive');
    $headerCategoryTitle.classList.remove('inactive');
    $searchForm.classList.remove('inactive');

    $trendingPreviewSection.classList.add('inactive');
    $categoriesPreviewSection.classList.add('inactive');
    $genericSection.classList.remove('inactive');
    $movieDetailSection.classList.add('inactive');

    getAndAppendMovies('search/movie', $genericSection, {
        params: {
            query: searchValue
        }
    },
    {
        lazyLoading: false,
        clear: true,
        scrollInfinite: true
    });
};