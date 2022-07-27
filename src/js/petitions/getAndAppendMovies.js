import { CustomAxios , d} from '../customAxios/customAxios.js';
import { addImage } from '../lazyLoading/observerImage.js';

export const getAndAppendMovies = async (
    path,
    parentContainer,
    optionalConfig = {}
    ,{ 
        lazyLoading = false,
        clear =  false
     } = {}
     ) => {
    try {
        const { data } = await CustomAxios(path, optionalConfig);
        const movies = data.results;
        const $fragment = d.createDocumentFragment();
        
        //console.log(data);
        if(data.total_results === 0) {

            parentContainer.innerHTML = `
                <h2 style="color: #f00; height: 60vh;">
                    Total de resultados: ${data.total_results}
                </h2>
            `;
            return;
        }

        if(clear) parentContainer.innerHTML = '';

        movies.map( movie => {

            let posterImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

            console.log("Pelicula creada!");
            const $movieContainer = d.createElement('div');
            $movieContainer.classList.add('movie-container');

            const $img = d.createElement('img');
            $img.classList.add('movie-img');
            $img.dataset.image = posterImage;
            $img.dataset.id = movie.id;
            $img.alt = `${movie.title}`;
            $movieContainer.appendChild($img);
            $fragment.appendChild($movieContainer);
            
            //Lazymode - Cargar imagenes en mediante el foco
            if(lazyLoading) {
                addImage($img);
            }else {
                $img.src = (!posterImage.includes('null')) ? posterImage : `https://via.placeholder.com/150/FFFF00/000000?text=${movie.title}`
            }
                
        });
        parentContainer.appendChild($fragment);
    }catch(err) {

        console.log(err);
    }
    
};