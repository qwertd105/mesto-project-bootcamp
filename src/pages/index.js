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
  parameters,
  openPopup,
  closePopup,
  profileName,
  profileProfession,
  profileInputsList,
  profileSubmit,
  avatarButton,
  avatarInputsList,
  avatarSubmit,
  avatarPopup,
  avatarForm,
  profileLinkInput,
  profileAvatar
} from "../components/utils.js"

import { enableValidation, toggleButton } from '../components/validate';

import { addPlace } from '../components/card';

import { setEventListenersForPopups, setEventListenersForCloses, editProfile, editAvatar } from '../components/modal';

import { getInitialCards, getUser, patchUser, postCard, patchAvatar, loading } from '../components/api';

// initialCards.forEach(function(element) {
//   addPlace(element.name, element.link);
// })

avatarButton.addEventListener('click', function(evt) {
  toggleButton(avatarInputsList, avatarSubmit, parameters.inactiveButtonClass);
  openPopup(avatarPopup);
});

addButton.addEventListener('click', function(evt) {
    toggleButton(placeInputsList, placeSubmit, parameters.inactiveButtonClass);
    openPopup(placePopup);
});

editButton.addEventListener('click', function(evt) {
    nameInput.value = profileName.textContent;
    professionInput.value = profileProfession.textContent;
    toggleButton(profileInputsList, profileSubmit, parameters.inactiveButtonClass);
    openPopup(profilePopup);
});

setEventListenersForCloses(closeButtonsList);

setEventListenersForPopups(popupsList);

enableValidation(parameters);

var me;
getUser()
  .then(function(result) {
    console.log(result.avatar)
    debugger;
    profileAvatar.src = result.avatar;
    me = result;
  })
  .catch((err) => {console.log(err)})


getInitialCards()
  .then(function(result) {
    console.log(result[0]);
    let myCard = false;
    result.forEach(function(cardElement) {
      if (cardElement.owner._id === me._id) {
        myCard = true;
      } else {
        myCard = false;
      }
//      console.log(cardElement._id)
      addPlace(cardElement.name, cardElement.link, cardElement.likes, myCard, cardElement._id, me._id);
    })
  })
  .catch((err) => {console.log(err)})

profileForm.addEventListener('submit', function(evt) {
  loading(profileSubmit, true);
  patchUser(nameInput.value, professionInput.value)
    .then(function(result) {
//      console.log(result);
      editProfile(result.name, result.about);
      closePopup(profilePopup);
    })
    .catch((err) => {console.log(err)})
    .finally(() => {loading(profileSubmit, false)});
});

placeForm.addEventListener('submit', function(evt) {
  loading(placeSubmit, true);
  postCard(placeNameInput.value, linkInput.value)
    .then(function(card) {
      console.log(card);
      addPlace(card.name, card.link, card.likes, true, card._id, me._id);
      closePopup(placePopup);
      evt.target.reset();
    })
    .catch((err) => {console.log(err)})
    .finally(() => {loading(placeSubmit, false)});
});

avatarForm.addEventListener('submit', function(evt) {
  loading(avatarSubmit, true);
  patchAvatar(profileLinkInput.value)
    .then(function(result) {
      console.log(result);
      editAvatar(result.avatar);
      closePopup(avatarPopup);
    })
    .catch((err) => {console.log(err)})
    .finally(() => {loading(avatarSubmit, false)});
})