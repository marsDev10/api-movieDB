import { getAndAppendMovies } from '../../petitions/getAndAppendMovies.js';

let page = 1;
export const trendsPage = () => {
    
    
    getAndAppendMovies(
        'trending/movie/day',
        $genericSection,
        {
            page
        },
        {
            lazyLoading: false,
            clear: true,
            scrollInfinite: true
        },
    );

    $headerSection.classList.remove('header-container--long');
    $headerSection.style.background = '';
    $arrowBtn.classList.remove('inactive');
    $arrowBtn.classList.remove('header-arrow--white');
    $headerTitle.classList.add('inactive');
    $headerCategoryTitle.classList.remove('inactive');
    $searchForm.classList.add('inactive');
    $headerCategoryTitle.textContent = "TRENDS";

    $trendingPreviewSection.classList.add('inactive');
    $categoriesPreviewSection.classList.add('inactive');
    $genericSection.classList.remove('inactive');
    $movieDetailSection.classList.add('inactive');

};