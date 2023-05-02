import './index.css'; 

import {
  editButton,
  addButton,
  profilePopup,
  placePopup,
  profileForm,
  placeForm,
  closeButtonsList,
  popupsList,
  nameInput,
  professionInput,
  placeNameInput,
  linkInput,
  initialCards,
  parameters,
  openPopup,
  closePopup
} from "../components/utils.js"

import { enableValidation } from '../components/validate';

import { addPlace } from '../components/card';

import { closeAllPopups, setEventListenersForPopups, setEventListenersForCloses } from '../components/modal';

  initialCards.forEach(function(element) {
    addPlace(element.name, element.link);
  })

setEventListenersForCloses(closeButtonsList);

profileForm.addEventListener('submit', function(evt) {
    editProfile(nameInput, professionInput);
    closePopup(profilePopup);
});
placeForm.addEventListener('submit', function(evt) {
    addPlace(placeNameInput.value, linkInput.value);
    closePopup(placePopup);

    evt.target.reset();
});

addButton.addEventListener('click', function(evt) {
    openPopup(placePopup);
});

editButton.addEventListener('click', function(evt) {
    openPopup(profilePopup);
});

setEventListenersForPopups(popupsList);

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    closeAllPopups(popupsList);
  }
})

enableValidation(parameters);