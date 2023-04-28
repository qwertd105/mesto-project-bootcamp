const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const viewerPopup = document.querySelector('.popup_viewer');
const profilePopup = document.querySelector('.popup_form_edit');
const placePopup = document.querySelector('.popup_form_add');

const profileForm = profilePopup.querySelector('.popup__form');
const placeForm = placePopup.querySelector('.popup__form');

const closeButtons = document.querySelectorAll('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
const profileSubmit = document.querySelector('.popup__form-submit-button[name="profile-submit"]');

const places = document.querySelector('.places');
const placeSubmit = document.querySelector('.popup__form-submit-button[name="place-submit"]')

const imageViewer = viewerPopup.querySelector('.popup__image');
const descriptionViewer = viewerPopup.querySelector('.popup__description');

const nameInput = profilePopup.querySelector('.popup__form-text-input[name="name"]');
const professionInput = profilePopup.querySelector('.popup__form-text-input[name="profession"]');
const placeNameInput = placePopup.querySelector('.popup__form-text-input[name="place-name"]');
const linkInput = placePopup.querySelector('.popup__form-text-input[name="photo"]');


const initialCards = [
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

  initialCards.forEach(function(element) {
    addPlace(element.name, element.link);
  })

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function editProfile(name, profession) {
    profileName.textContent = name.value;
    profileProfession.textContent = profession.value;
}

function createPlace(name, link) {
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

function addPlace(name, link) {
    const place = createPlace(name, link);
    places.prepend(place);
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

profileForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editProfile(nameInput, professionInput);
    closePopup(profilePopup);
});
placeForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
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
