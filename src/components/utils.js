export const parameters = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-text-input',
  submitButtonSelector: '.popup__form-submit-button',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'popup__form-text-input_type_error',
  errorClass: 'popup__form-error_active'
}

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const avatarButton = document.querySelector('.profile__avatar-editor');

export const viewerPopup = document.querySelector('.popup_viewer');
export const profilePopup = document.querySelector('.popup_form_edit');
export const placePopup = document.querySelector('.popup_form_add');
export const avatarPopup = document.querySelector('.popup_avatar');

export const placeInputsList = placePopup.querySelectorAll(parameters.inputSelector);
export const placeSubmit = placePopup.querySelector(parameters.submitButtonSelector);

export const profileInputsList = profilePopup.querySelectorAll(parameters.inputSelector);
export const profileSubmit = profilePopup.querySelector(parameters.submitButtonSelector);

export const avatarInputsList = avatarPopup.querySelectorAll(parameters.inputSelector);
export const avatarSubmit = avatarPopup.querySelector(parameters.submitButtonSelector);

export const profileForm = profilePopup.querySelector('.popup__form');
export const placeForm = placePopup.querySelector('.popup__form');
export const avatarForm = avatarPopup.querySelector('.popup__form');

export const closeButtonsList = document.querySelectorAll('.popup__close-button');
export const popupsList = document.querySelectorAll('.popup');


export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');
export const profileAvatar = document.querySelector('.profile__avatar');

export const places = document.querySelector('.places');

export const imageViewer = viewerPopup.querySelector('.popup__image');
export const descriptionViewer = viewerPopup.querySelector('.popup__description');

export const nameInput = profilePopup.querySelector('.popup__form-text-input[name="name"]');
export const professionInput = profilePopup.querySelector('.popup__form-text-input[name="profession"]');
export const profileLinkInput = avatarPopup.querySelector('.popup__form-text-input');
export const placeNameInput = placePopup.querySelector('.popup__form-text-input[name="place-name"]');
export const linkInput = placePopup.querySelector('.popup__form-text-input[name="photo"]');


export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

export function addEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', addEscape);
  }
  
 export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', addEscape);
  }