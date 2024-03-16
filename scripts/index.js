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
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
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

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#modal-edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const openModal = document.querySelector("modal_opened");
const addNewCardButton = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#modal-add-button");

const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const profileEditCloseButton = profileEditModal.querySelector(
  "#modal-close-button"
);

const addCardCloseButton = addNewCardModal.querySelector(".modal__close");

function closePopup(modal) {
  profileEditModal.classList.remove("modal_opened");
}

/* function closePopup(modal) {
  addNewCardCloseButton.classList.remove("modal_opened");
} */

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");

  cardTitleEl.textContent = cardData.name;
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;

  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", closePopup);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addNewCardButton.addEventListener("click", openModal);
addNewCardButton.addEventListener("click", () => {
  addNewCardModal.classList.add("modal_opened");
});
addCardCloseButton.addEventListener("click", () => {
  addNewCardModal.classList.remove("modal_opened");
});

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle(".card__like-button_active");
  });
});
