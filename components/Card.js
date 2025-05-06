class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._cardName = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;

    this._cardElement = null;
    this._likeButton = null;
    this._deleteButton = null;
    this._cardImageEl = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImageEl.addEventListener("click", () => {
      this._handleImageClick(this._link, this._cardName);
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getElement() {
    this._cardElement = this._getTemplate();

    const cardTitleEl = this._cardElement.querySelector(".card__title");
    this._cardImageEl = this._cardElement.querySelector(".card__image");
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(".card__trash-button");

    cardTitleEl.textContent = this._cardName;
    this._cardImageEl.src = this._link;
    this._cardImageEl.alt = this._cardName;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
