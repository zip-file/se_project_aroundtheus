function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_opened");
    closeModal(openModal);
  }
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeWithEscape);
}

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__trash-button");

    cardImageEl.addEventListener("click", () => {
      this._handleImagePreviewClick(this._cardData);
    });

    deleteButton.addEventListener("click", () => {
      this._handleDeleteCard;
    });

    likeButton.addEventListener("click", () => {
      this._handleLikeIcon;
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleImagePreviewClick() {
    imagePreviewImage.src = imageUrl;
    imagePreviewImage.alt = name;
    imageName.textContent = name;
    openPopup(imagePreviewModal);
  }

  _getTemplate() {
    return (this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true));
  }

  getElement() {
    this._element = this._getTemplate();
    this._setEventListeners;
  }
}

export default Card;
