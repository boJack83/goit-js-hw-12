import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector('.form');


form.addEventListener('submit', event => {
    event.preventDefault();
    const input = event.target.elements['search-text'].value.trim(); 

    if (input === "") {
        return;
    }

    clearGallery();
    showLoader();

    getImagesByQuery(input)
        .then(data => {
            const images = data.hits;
            if (images.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                  });
            } else {
                createGallery(images);
            }
            form.reset();
        })
        .catch(error => {
            iziToast.error({
                message: 'Request error!',
                position: 'topRight',
              });
        })
        .finally(() => {
            hideLoader();
    })
})
