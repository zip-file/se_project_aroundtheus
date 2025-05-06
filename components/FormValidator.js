class FormValidator {
  constructor(validationSettings, formElement) {
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;

    this._form = formElement;
  }

  _showInputError(inputElem) {
    const errorMessageEl = this._form.querySelector(`#${inputElem.id}-error`);
    inputElem.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputElem.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputElem) {
    const errorMessageEl = this._form.querySelector(`#${inputElem.id}-error`);
    inputElem.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElem) {
    if (!inputElem.validity.valid) {
      return this._showInputError(inputElem);
    }

    this._hideInputError(inputElem);
  }

  _hasInvalidInput() {
    const inputElems = [...this._form.querySelectorAll(this._inputSelector)];
    return inputElems.some((inputElem) => !inputElem.validity.valid);
  }

  toggleButtonState() {
    const submitButton = this._form.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput()) {
      this._disableButton(submitButton);
      return;
    }

    this._enableButton(submitButton);
  }

  _disableButton(submitButton) {
    submitButton.classList.add(this._inactiveButtonClass);
    submitButton.disabled = true;
  }

  _enableButton(submitButton) {
    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.disabled = false;
  }

  _setEventListeners() {
    const inputElems = [...this._form.querySelectorAll(this._inputSelector)];
    inputElems.forEach((inputElem) => {
      inputElem.addEventListener("input", (e) => {
        this._checkInputValidity(inputElem);
        this.toggleButtonState();
      });
    });
  }

  resetValidation() {
    const submitButton = this._form.querySelector(this._submitButtonSelector);
    this._disableButton(submitButton);
    const inputElems = [...this._form.querySelectorAll(this._inputSelector)];
    inputElems.forEach((inputElem) => this._hideInputError(inputElem));
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }
}

export default FormValidator;
