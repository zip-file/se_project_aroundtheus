const initialCards = [
  {
    name: "Maryland",
    link: "https://unsplash.com/photos/man-in-black-jacket-riding-on-motorcycle-on-road-during-daytime-EIN81690PWM",
  },
  {
    name: "Philidelphia",
    link: "https://unsplash.com/photos/city-skyline-during-night-time-PORWKRAI55U",
  },
  {
    name: "Los Angeles",
    link: "https://unsplash.com/photos/red-vehicle-on-the-road-photograph-Zvnf63bvOxk",
  },
  {
    name: "Washington D.C.",
    link: "https://unsplash.com/photos/a-pole-with-a-street-sign-on-it-in-front-of-a-building-FPWNqgCw2",
  },
  {
    name: "Florida",
    link: "https://unsplash.com/photos/brown-brick-pathway-eYA4DHQi8BI",
  },
  {
    name: "New York",
    link: "https://unsplash.com/photos/cars-on-road-K9set5TFE5U",
  },
];

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#modal-edit-button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");

function closePopup() {
  profileEditModal.classList.remove("modal__opened");
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal__opened");
});

profileEditCloseButton.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
});
