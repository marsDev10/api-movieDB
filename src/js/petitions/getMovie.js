import { CustomAxios, d } from '../customAxios/customAxios.js';

export const getMovie = async (id) => {
    try {
        console.log(id);
        const { data } = await CustomAxios(`movie/${id}`);

        console.log(data);

        $headerSection.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`;
        $movieDetailTitle.textContent = data.title;
        $movieDetailScore.textContent = data.vote_average;
        $movieDetailDescription.textContent = data.overview;

        const $fragment = d.createDocumentFragment();

        data.genres.map( category => {

            const $categoryContainer = d.createElement('div');
            $categoryContainer.classList.add('category-container');
            const $title = d.createElement('h3');
            $title.classList.add('category-title');
            $title.textContent = `${category.name}`;
            $title.id = `id${category.id}`;
            $title.dataset.id = category.id;
            $categoryContainer.appendChild($title);

            $fragment.appendChild($categoryContainer);
            console.log(category);
        });

        $movieDetailCategorieList.innerHTML = '';
        $movieDetailCategorieList.appendChild($fragment);
    }catch(err){

        console.log(err);
    }
    
}