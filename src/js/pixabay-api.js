import axios from 'axios';

export function getImagesByQuery(query) {
    return axios(`https://pixabay.com/api/`, {
        params: {
            key: '50835877-ebd7ce95b33653090cfe69fe8',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    })
        .then(response =>
            response.data
     )
}