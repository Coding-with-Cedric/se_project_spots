const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant Terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain House",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const newPostBtn = document.querySelector(".profile__new-post-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const previewModal = document.querySelector("#preview-modal");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

const previewImageEl = previewModal.querySelector(".modal__image");
const previewCaptionEl = previewModal.querySelector(".modal__caption");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  modal.addEventListener("mousedown", handleOverlayClick);
  document.addEventListener("keydown", handleEscKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  modal.removeEventListener("mousedown", handleOverlayClick);
  document.removeEventListener("keydown", handleEscKey);
}

function handleOverlayClick(evt) {
  if (evt.target.classList.contains("modal")) {
    closeModal(evt.target);
  }
}

function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) closeModal(openedModal);
  }
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-btn_active");
  });

  cardDeleteBtnEl.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewImageEl.src = data.link;
    previewImageEl.alt = data.name;
    previewCaptionEl.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const editProfileForm = editProfileModal.querySelector(".modal__form");

editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent.trim();
  editProfileDescriptionInput.value = profileDescriptionEl.textContent.trim();
  openModal(editProfileModal);
});

editProfileModal.querySelector(".modal__close-btn").addEventListener("click", () => {
  closeModal(editProfileModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}
editProfileForm.addEventListener("submit", handleProfileFormSubmit);

const addCardForm = newPostModal.querySelector(".modal__form");
const captionInputEl = newPostModal.querySelector("#second-profile-description-input");
const linkInput = newPostModal.querySelector("#card-image-input");

newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

newPostModal.querySelector(".modal__close-btn").addEventListener("click", () => {
  closeModal(newPostModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    name: captionInputEl.value,
    link: linkInput.value,
  };

  const cardElement = getCardElement(newCardData);
  cardsList.prepend(cardElement);

  addCardForm.reset();
  closeModal(newPostModal);
}
addCardForm.addEventListener("submit", handleAddCardSubmit);

previewModal.querySelector(".modal__close-btn").addEventListener("click", () => {
  closeModal(previewModal);
});

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});