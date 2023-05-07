import {
    places,
    viewerPopup,
    imageViewer,
    descriptionViewer,
    openPopup
} from "./utils.js"

import { deleteCard, deleteLike, putLike } from "./api.js";

export function createPlace(name, link, likes, myCard, _id, myId) {
    const place = document.querySelector('#card-template').content.cloneNode(true);
    const image = place.querySelector('.place__image');
    place.querySelector('.place__title').textContent = name;
    image.src = link;
    image.alt = name;
    
    const likeCounter = place.querySelector('.place__like-counter');
    likeCounter.textContent = likes.length;

    const likeButton = place.querySelector('.place__like-button');
    if (likes.some(function(element) {
        return element._id === myId; 
    }))
    {
        likeButton.classList.add("place__like-button_active");
    }

    likeButton.addEventListener('click', function(evt) {
        if (evt.target.classList.contains("place__like-button_active")) {
            deleteLike(_id)
                .then(function(res) {
                    evt.target.classList.remove('place__like-button_active');
                    likeCounter.textContent = res.likes.length;
                })
                .catch((err) => {console.log(err)})
        } else {
            putLike(_id)
                .then(function(res) {
                    evt.target.classList.add('place__like-button_active');
                    likeCounter.textContent = res.likes.length;
                })
                .catch((err) => {console.log(err)})
        }
    });
    
    

    const trashButton = place.querySelector('.place__trash-button');
    trashButton.addEventListener('click', function(evt) {
        const place = evt.target.closest('.place');
        deleteCard(_id)
            .then(function(card) {
                place.remove();
            })
            .catch((err) => {console.log(err)})
    })

    if (!myCard) {
        trashButton.remove();
    }
  
    image.addEventListener('click', function(evt) {
        imageViewer.src = link;
        imageViewer.alt = name;
        descriptionViewer.textContent = name;
        openPopup(viewerPopup);
    });
    return place;
  }

export function addPlace(name, link, likes, myCard, _id, myId) {
    const place = createPlace(name, link, likes, myCard, _id, myId);
    places.prepend(place);
}