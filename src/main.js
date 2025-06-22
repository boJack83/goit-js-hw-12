import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, } from './js/render-functions';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.js-load-more')
let page = 1;
let inputValue = null;
hideLoader();
let allPages = 0;

form.addEventListener('submit', async event => {

    event.preventDefault();
    const input = event.target.elements['search-text'].value.trim();
    inputValue = input;
    page = 1;
    hideLoadMoreButton();

    if (input === "") {
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(inputValue, page)
        const images = data.hits;
        allPages = Math.ceil(data.totalHits / 15);
        if (images.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        } else {
            createGallery(images);

            if (page >= allPages) {
                iziToast.warning({
                    message:
                      'We are sorry, but you have reached the end of search results.',
                    position: 'topRight',
                    color: 'blue',
                });
            } else {
                showLoadMoreButton();       
            }
        }
        form.reset();
    } catch (error) {
        iziToast.error({
            message: 'Request error!',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
});

loadMore.addEventListener('click', async () => {
    page += 1;
    showLoader();
    hideLoadMoreButton();


    try {
        const data = await getImagesByQuery(inputValue, page);

        createGallery(data.hits);

        // const allPages = Math.ceil(data.totalHits / 15);
        if (page >= allPages) {
            iziToast.warning({
                message:
                  'We are sorry, but you have reached the end of search results.',
                position: 'topRight',
                color: 'blue',
            });
        } else {
            showLoadMoreButton();
        }

    } catch (error) {
        iziToast.error({
            message: 'Request error!',
            position: 'topRight',
        });
    } finally {
        hideLoader();


        const card = document.querySelector('.gallery-item');
        const cardHeight = card.getBoundingClientRect().height;
    
        window.scrollBy({
          left: 0,
          top: cardHeight * 2,
          behavior: 'smooth',
        });
    }
})
