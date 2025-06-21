import axios from 'axios';

export async function getImagesByQuery(query, page) {
    const { data } = await axios(`https://pixabay.com/api/`, {
        params: {
            key: '50835877-ebd7ce95b33653090cfe69fe8',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page
        }
    });
    return data;
}