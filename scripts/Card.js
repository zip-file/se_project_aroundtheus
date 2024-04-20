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
    this._cardName = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__trash-button");
    this._cardImageEl = this._cardElement.querySelector(".card__image");

    this._cardImageEl.addEventListener("click", () => {
      this._handleImagePreviewClick(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
  }

  _handleImagePreviewClick(imageUrl, cardName) {
    this._imagePreviewImage.src = imageUrl;
    this._imagePreviewImage.alt = cardName;
    this._imageName.textContent = cardName;
    this._openPopup(imagePreviewModal);
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getTemplate() {
    return (this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true));
  }

  getElement() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".card__image");
    const cardTitleEl = this._element.querySelector(".card__title");
    cardTitleEl.textContent = this._cardName;
    cardImage.src = this._link;
    cardImage.alt = this._cardName;
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
