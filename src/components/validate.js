export function hasInvalidInput(inputsList) {
    return inputsList.some(function(inputElement) {
      return !inputElement.validity.valid;
    });
  }
  
 export function toggleButton(inputsList, buttonElement, inactiveButtonClass) {
    if (hasInvalidInput(Array.from(inputsList))) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else  {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  
 export function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }
  
 export function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  }
  
 export function enableValidation(parameters) {
    const formsList = Array.from(document.querySelectorAll(parameters.formSelector));
    formsList.forEach(function(formElement) {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      const inputsList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
      const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
      toggleButton(inputsList, buttonElement, parameters.inactiveButtonClass);
  
      inputsList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function(evt) {
          toggleButton(inputsList, buttonElement, parameters.inactiveButtonClass);
          if (!inputElement.validity.valid) {
            showInputError(formElement, inputElement, inputElement.validationMessage, parameters.inputErrorClass, parameters.errorClass);
          } else {
            hideInputError(formElement, inputElement, parameters.inputErrorClass, parameters.errorClass);
          }
        })
      })
    });
  }