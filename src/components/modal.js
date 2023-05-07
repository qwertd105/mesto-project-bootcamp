import { closePopup } from "./utils";

import { profileName, profileProfession, profileAvatar } from "./utils";

export function setEventListenersForPopups(popups) {
    Array.from(popups).forEach(function(popupElement) {
      popupElement.addEventListener('click', function(evt) {
        if (evt.target === popupElement) {
          closePopup(popupElement);
        }
        evt.stopPropagation();
      })
    });
  }

export function setEventListenersForCloses(closeButtonsList) {
    closeButtonsList.forEach((button) => {
      const popup = button.closest('.popup');
      button.addEventListener('click', () => closePopup(popup));
    });  
  }

export  function editProfile(name, profession) {
    profileName.textContent = name;
    profileProfession.textContent = profession;
}

export function editAvatar(link) {
    profileAvatar.src = link;
}