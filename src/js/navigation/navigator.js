import { home } from './pages/home.js';
import { trends } from './pages/trends.js';
import { search } from './pages/search.js';
import { category } from './pages/category.js';
import { movie } from './pages/movie.js';

export const navigator = () => {
    
    console.log({ location });

    if(location.hash.startsWith('#trends')){
        
        trends();
    }else if(location.hash.startsWith('#search=')){
        
        search();
    }else if(location.hash.startsWith('#movie=')){
        
        movie();
    }else if(location.hash.startsWith('#category=')) {

        category();
    }else {

        home();
    }

    location.hash;
};

