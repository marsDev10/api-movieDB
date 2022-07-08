export const trendsPage = () => {

    console.log("Trends!!");

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
};