class Card {
  constructor(
    cardData,
    cardSelector,
    imagePreviewImage,
    imageName,
    openPopup,
    imagePreviewModal
  ) {
    this._cardName = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
    this._imagePreviewImage = imagePreviewImage;
    this._imageName = imageName;
    this._openPopup = openPopup;
    this._imagePreviewModal = imagePreviewModal;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__trash-button");
    this._cardImageEl = this._cardElement.querySelector(".card__image");

    this._cardImageEl.addEventListener("click", () => {
      this._handleImagePreviewClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });
  }

  _handleImagePreviewClick() {
    this._imagePreviewImage.src = this._link;
    this._imagePreviewImage.alt = this._cardName;
    this._imageName.textContent = this._cardName;
    this._openPopup(this._imagePreviewModal);
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getElement() {
    this._cardElement = this._getTemplate();

    const cardImage = this._cardElement.querySelector(".card__image");
    const cardTitleEl = this._cardElement.querySelector(".card__title");

    cardTitleEl.textContent = this._cardName;
    cardImage.src = this._link;
    cardImage.alt = this._cardName;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
