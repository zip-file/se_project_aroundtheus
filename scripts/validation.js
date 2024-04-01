// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formElems, inputElem, { inputErrorClass, errorClass }) {
  const errorMessageEl = formElems.querySelector(`#${inputElem.id}-error`);
  inputElem.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputElem.validationMessage;
  errorMessageEl.classList.add(errorClass);
}

function hideInputError(formElems, inputElem, { inputErrorClass, errorClass }) {
  const errorMessageEl = formElems.querySelector(`#${inputElem.id}-error`);
  inputElem.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
}

function checkInputValidity(formElems, inputElem, options) {
  if (!inputElem.validity.valid) {
    return showInputError(formElems, inputElem, options);
  }

  hideInputError(formElems, inputElem, options);
}

function hasInvalidInput(inputList) {
  return !inputList.every((inputElem) => inputElem.validity.valid);
}

function toggleButtonState(inputElems, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput(inputElems)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
    return;
  }

  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function setEventListeners(formElems, options) {
  const { inputSelector } = options;
  const inputElems = [...formElems.querySelectorAll(inputSelector)];
  const submitButton = formElems.querySelector(".modal__button");

  inputElems.forEach((inputElem) => {
    inputElem.addEventListener("input", (e) => {
      checkInputValidity(formElems, inputElem, options);
      toggleButtonState(inputElems, submitButton, options);
    });
  });
}

function enableValidation(options) {
  const formElems = [...document.querySelectorAll(options.formSelector)];
  formElems.forEach((formElems) => {
    formElems.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElems, options);
    // look for all inputs inside of form
    // loop through all the inputs to see if all are valid
    //if input is not valid
    // grab the validdation message
    //add error class to input
    //display error message
    // disable button
    //if all inputs are valid
    //enable button
    // rest error message
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);

// make disableButton
// make enableButton

// use overlay click to close out modal
// use esc key to close out modal
