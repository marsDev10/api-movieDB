import { getAndAppendMovies } from '../petitions/getAndAppendMovies.js';
export const scrollInfiniteAdd = (movies,path,parentContainer, page) => {
    let lastMovie = movies[movies.length - 1];
    console.log(lastMovie);
    page++;
    const options = {
        threshold: 0.5,
        rootMargin: '0px'
    }

    const callback = (entries, observer) => {
        
        entries.forEach(entry =>{

            if(entry.isIntersecting){

                console.log("LastMovie Intersecting");
                observer.unobserve(entry.target);
                getAndAppendMovies(
                    path,
                    parentContainer,
                    {
                        page
                    },
                    {
                        clear: false,
                        scrollInfinite: false
                    });

            }
        });
    };  

    const observer = new IntersectionObserver(callback, options);


    observer.observe(lastMovie);

};