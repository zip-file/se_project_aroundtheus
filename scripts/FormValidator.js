class FormValidator {
  constructor(validationSettings, formElement) {
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;

    this._form = formElement;
  }

  _showInputError(inputElems) {
    this._errorMessageEl = this._form.querySelector(`#${inputElem.id}-error`);
    inputElems.classList.add(this._inputErrorClass);
    this._errorMessageEl.textContent = inputElems.validationMessage;
    this._errorMessageEl.classList.add(this._errorClass);
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disabledButton();
      return;
    }
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElem) => !inputElem.validity.valid);
  }

  _checkInputValidity() {
    if (!inputElem.validity.valid) {
      return this._showInputError(inputElem);
    }

    this.hideInputError(inputElem);
  }

  _setEventListeners() {
    this._inputElems = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputElems.forEach((inputElem) => {
      inputElem.addEventListener("input", (e) => {
        this._checkInputValidity(this._form, inputElem, options);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    setEventListeners(formElems, options);
  }
}

const editFormValidator = new FormValidator();
editFormValidator.enableValidation();

export default FormValidator;

/*const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm);*/
