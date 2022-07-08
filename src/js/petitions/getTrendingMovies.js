import { CustomAxios , d} from "../customAxios/customAxios.js";

export const getTrendingMoviesPreview = async () => {

    const { data } = await CustomAxios('trending/movie/day');
    const movies = data.results;

    const $trendingList = d.querySelector('.trendingPreview-movieList');
    const $fragment = d.createDocumentFragment();

    movies.map( movie => {
        const $movieContainer = d.createElement('div');
        $movieContainer.classList.add('movie-container');
        const $img = d.createElement('img');
        $img.classList.add('movie-img');
        $img.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
        $img.alt = `${movie.title}`;
        $movieContainer.appendChild($img);
        $fragment.appendChild($movieContainer);
    });

    $trendingList.innerHTML = '';
    $trendingList.appendChild($fragment);
    
}