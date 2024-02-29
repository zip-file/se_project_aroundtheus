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

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal__opened");
});

const profileModalCloseButton = profileEditModal("#modal-closed-button");

profileModalCloseButton.addEventListener("click", () => {
  profileEditModal.classList.remove("modal__opened");
});
