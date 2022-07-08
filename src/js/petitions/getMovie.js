import { CustomAxios, d } from '../customAxios/customAxios.js';

export const getMovie = async (id) => {

    console.log(id);
    const { data } = await CustomAxios(`movie/${id}`);

    console.log(data);
}