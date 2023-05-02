import {
    places,
    viewerPopup,
    imageViewer,
    descriptionViewer,
    openPopup
} from "./utils.js"


export function createPlace(name, link) {
    const place = document.querySelector('#card-template').content.cloneNode(true);
    const image = place.querySelector('.place__image');
    place.querySelector('.place__title').textContent = name;
    image.src = link;
    image.alt = name;
  
    const likeButton = place.querySelector('.place__like-button');
    likeButton.addEventListener('click', function(evt) {
        evt.target.classList.toggle('place__like-button_active');
    });
  
    const trashButton = place.querySelector('.place__trash-button');
    trashButton.addEventListener('click', function(evt) {
        evt.target.closest('.place').remove();
    })
  
    image.addEventListener('click', function(evt) {
        imageViewer.src = link;
        imageViewer.alt = name;
        descriptionViewer.textContent = name;
        openPopup(viewerPopup);
    });
    return place;
  }

export function addPlace(name, link) {
    const place = createPlace(name, link);
    places.prepend(place);
}