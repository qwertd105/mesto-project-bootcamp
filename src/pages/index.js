import './index.css'; 

import {
  editButton,
  addButton,
  profilePopup,
  placePopup,
  profileForm,
  placeForm,
  placeInputsList,
  placeSubmit,
  closeButtonsList,
  popupsList,
  nameInput,
  professionInput,
  placeNameInput,
  linkInput,
  initialCards,
  parameters,
  openPopup,
  closePopup,
  profileName,
  profileProfession
} from "../components/utils.js"

import { enableValidation, toggleButton } from '../components/validate';

import { addPlace } from '../components/card';

import { setEventListenersForPopups, setEventListenersForCloses } from '../components/modal';

initialCards.forEach(function(element) {
  addPlace(element.name, element.link);
})

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
    toggleButton(placeInputsList, placeSubmit, parameters.inactiveButtonClass);
    openPopup(placePopup);
});

editButton.addEventListener('click', function(evt) {
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
    toggleButton(placeInputsList, placeSubmit, parameters.inactiveButtonClass);
    openPopup(profilePopup);
});

setEventListenersForCloses(closeButtonsList);

setEventListenersForPopups(popupsList);

enableValidation(parameters);