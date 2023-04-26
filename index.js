const edit_button = document.querySelector('.profile__edit-button');
const add_button = document.querySelector('.profile__add-button');

const viewer_popup = document.querySelector('.popup_viewer');
const edit_popup = document.querySelector('.popup_form_edit');
const add_popup = document.querySelector('.popup_form_add');

const close_viewer = viewer_popup.querySelector('.popup__close-button');
const close_edit = edit_popup.querySelector('.popup__close-button');
const close_add = add_popup.querySelector('.popup__close-button');

const profile_name = document.querySelector('.profile__name');
const profile_profession = document.querySelector('.profile__profession');
const profile_submit = document.querySelector('.popup__form-submit-button[name="profile-submit"]');

const places = document.querySelector('.places');
const place_submit = document.querySelector('.popup__form-submit-button[name="place-submit"]')

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

function popupChangeCondition(popup) {
    console.log(popup);
    popup.classList.toggle('popup_opened');
}

function editProfile(name, profession) {
    profile_name.textContent = name.value;
    profile_profession.textContent = profession.value;
}

function addPlace(name, link) {
    const place = document.querySelector('#card-template').content.cloneNode(true);
    place.querySelector('.place__title').textContent = name;
    place.querySelector('.place__image').src = link;

    const like_button = place.querySelector('.place__like-button');
    like_button.addEventListener('click', function(evt) {
        evt.target.classList.toggle('place__like-button_active');
    });

    const trash_button = place.querySelector('.place__trash-button');
    trash_button.addEventListener('click', function(evt) {
        evt.target.closest('.place').remove();
    })

    const image = place.querySelector('.place__image');
    image.addEventListener('click', function(evt) {
        viewer_popup.querySelector('.popup__image').src = link;
        viewer_popup.querySelector('.popup__description').textContent = name;
        popupChangeCondition(viewer_popup);
    });

    places.prepend(place);
}


profile_submit.addEventListener('click', function() {
    const name_input = edit_popup.querySelector('.popup__form-text-input[name="name"]');
    const profession_input = edit_popup.querySelector('.popup__form-text-input[name="profession"]');

    editProfile(name_input, profession_input);
    popupChangeCondition(edit_popup);
});
place_submit.addEventListener('click', function(evt) {
    const name_input = add_popup.querySelector('.popup__form-text-input[name="place-name"]');
    const link_input = add_popup.querySelector('.popup__form-text-input[name="photo"]');

    addPlace(name_input.value, link_input.value);
    popupChangeCondition(add_popup);
});
close_add.addEventListener('click', function(evt) {
    popupChangeCondition(add_popup);
});
add_button.addEventListener('click', function(evt) {
    popupChangeCondition(add_popup);
});
close_edit.addEventListener('click', function(evt) {
    popupChangeCondition(edit_popup);
});
edit_button.addEventListener('click', function(evt) {
    popupChangeCondition(edit_popup);
});
close_viewer.addEventListener('click', function(evt) {
    popupChangeCondition(viewer_popup);
});