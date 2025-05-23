import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const initialCards = [
  {
    name: "Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1pw.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// DOM Elements
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#modal-edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#modal-add-button");
const addNewCardEditForm = addNewCardModal.querySelector(".modal__form");
const newCardTitleInput = addNewCardEditForm.querySelector(
  ".modal__input_type_title"
);
const newCardLinkInput = addNewCardEditForm.querySelector(
  ".modal__input_type_link"
);

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const profileEditCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);

const addCardCloseButton = addNewCardModal.querySelector(".modal__close");
const imagePreviewModal = document.querySelector("#modal-image-preview");
const imagePreviewImage = imagePreviewModal.querySelector("#preview-image");
const imagePreviewCloseButton = document.querySelector(
  "#image-preview-close-button"
);
const imageName = imagePreviewModal.querySelector(".modal__image_name");
const everyModals = document.querySelectorAll(".modal");

const cardSelector = "#card-template";

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
editFormValidator.enableValidation();

let addFormValidator;
if (addNewCardEditForm) {
  addFormValidator = new FormValidator(validationSettings, addNewCardEditForm);
  addFormValidator.enableValidation();
}

function openPopup(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", closeWithEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEscape);
}

function openImagePreviewModal(imageUrl, name) {
  imagePreviewImage.src = imageUrl;
  imagePreviewImage.alt = name;
  imageName.textContent = name;
  openPopup(imagePreviewModal);
}

function closeImagePreviewModal() {
  closeModal(imagePreviewModal);
}

function handleImageClick(imageUrl, name) {
  imagePreviewImage.src = imageUrl;
  imagePreviewImage.alt = name;
  imageName.textContent = name;
  openPopup(imagePreviewModal);
}

function renderCard(cardData, wrapper) {
  const card = new Card(cardData, cardSelector, handleImageClick);
  wrapper.prepend(card.getElement());
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = newCardTitleInput.value;
  const link = newCardLinkInput.value;

  if (name && link) {
    renderCard({ name, link }, cardListEl);
  }

  newCardTitleInput.value = "";
  newCardLinkInput.value = "";
  addFormValidator.resetValidation();
  closeModal(addNewCardModal);
}

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addNewCardButton.addEventListener("click", () => {
  newCardTitleInput.value = "";
  newCardLinkInput.value = "";
  openPopup(addNewCardModal);
  addFormValidator.resetValidation();
  addFormValidator.toggleButtonState();
});

addCardCloseButton.addEventListener("click", () => closeModal(addNewCardModal));

addNewCardEditForm.addEventListener("submit", handleAddCardSubmit);

imagePreviewCloseButton.addEventListener("click", closeImagePreviewModal);

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

everyModals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closeModal(modal);
    }
  });
});

function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  }
}

// if you see this yes thank you, first code you reviewed I realized it was my same old code then
// I instantly remembered to update my code in github lol
