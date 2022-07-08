import { CustomAxios , d} from '../customAxios/customAxios.js';

export const getAndAppendMovies = async (path, parentContainer, optionalConfig = {}) => {
    try {
        const { data } = await CustomAxios(path, optionalConfig);
        const movies = data.results;
        const $fragment = d.createDocumentFragment();
        
        console.log(data);
        if(data.total_results === 0) {

            parentContainer.innerHTML = `
                <h2 style="color: #f00; height: 60vh;">
                    Total de resultados: ${data.total_results}
                </h2>
            `;

            return;
        }

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
    }catch(err) {

        console.log(err);
    }
    
};