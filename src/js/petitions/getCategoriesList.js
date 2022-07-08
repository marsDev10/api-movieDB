import { CustomAxios, d } from '../customAxios/customAxios.js';

export const getCategoriesList = async () => {

    const { data } = await CustomAxios('genre/movie/list');
    const cateogies = data.genres;
    const $fragment = d.createDocumentFragment();

    cateogies.map( categorie => {
        const $categoryContainer = d.createElement('div');
        $categoryContainer.classList.add('category-container');
        const $title = d.createElement('h3');
        $title.classList.add('category-title');
        $title.textContent = `${categorie.name}`;
        $title.id = `id${categorie.id}`;
        $title.dataset.id = categorie.id;
        $categoryContainer.appendChild($title);

        $fragment.appendChild($categoryContainer);
    });

    $categoriesPreviewList.innerHTML = '';
    $categoriesPreviewList.appendChild($fragment);
}