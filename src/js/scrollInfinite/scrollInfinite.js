import { getAndAppendMovies } from '../petitions/getAndAppendMovies.js';

export const scrollInfiniteAdd = (movies,path,parentContainer, page) => {
    
    let lastMovie = movies[movies.length - 1];

    const options = {
        threshold: 0.5,
        rootMargin: '0px'
    }

    //Incrementamos la pagina de 1 en 1;
    page++;

    if(page >= 5) return; 

    const callback = (entries, observer) => {
        
        entries.forEach(entry =>{

            if(entry.isIntersecting){

                //Quitamos el observador al ultimo elemento.
                observer.unobserve(entry.target);
                
                //Volvemos a generar una lista nueva de peliculas
                getAndAppendMovies(
                    path,
                    parentContainer,
                    {
                        params: {
                            page,
                        }
                    },
                    {
                        clear: false,
                        scrollInfinite: true
                    });
            }
        });
    };  

    const observer = new IntersectionObserver(callback, options);
    observer.observe(lastMovie);
};