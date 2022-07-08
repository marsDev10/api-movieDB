import { CustomAxios , d} from '../customAxios/customAxios.js';

export const getAndAppendMovies = async (path, parentContainer, optionalConfig = {}) => {

    const { data } = await CustomAxios(path, optionalConfig);
    const movies = data.results;
    const $fragment = d.createDocumentFragment();
   
    movies.map( movie => {

        const $movieContainer = d.createElement('div');
        $movieContainer.classList.add('movie-container');

        const $img = d.createElement('img');
        $img.classList.add('movie-img');
        $img.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
        $img.dataset.id = movie.id;
        $img.alt = `${movie.title}`;
        $movieContainer.appendChild($img);
        $fragment.appendChild($movieContainer);
    });

    parentContainer.innerHTML = '';
    parentContainer.appendChild($fragment);
};