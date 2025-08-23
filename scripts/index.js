const  initialCards = [ //Object 1

    { 
        name: "Golden Gate Bridge", 
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",

    }, 
    {       
        name: "val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },

//Object 2
    {       
        name: "Restaurant Terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },

//Object 3
    {       
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },


//Object 4
    {       
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },

//Object 5
    {       
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
 //Object 6
    {       
        name: "Mountain House",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
];


const editProfileBtn = document.querySelector(".profile__edit-btn"); 
const editProfileModal = document.querySelector("#edit-profile-modal");

const previewModal = document.querySelector("#preview-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileFormEl = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
    "#profile-name-input"
); 

const imageCloseBtn = previewModal.querySelector(".modal__close-btn");

const cardTemplate = document.querySelector("#card-template")
.content.querySelector(".card"); 
const cardsList = document.querySelector(".cards__list"); 

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
 cardDeleteBtnEl.closest(".card").remove(); 
  }); 

  cardImageEl.addEventListener("click", () => {
previewImageEl.src = data.link;
previewModal.src = data.link;
previewModalCloseBtn.src = data.link;
previewCaptionEl.src = data.link;
openModal(previewModal); 
}); 


    return cardElement; 
}

const editProfileDescriptionInput = editProfileModal.querySelector(
    "#profile-description-input"); 

editProfileBtn.addEventListener("click", function () {
    // editProfileModal.classList.add("modal_is-opened");
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent; 
    openModal(editProfileModal); 
});

editProfileCloseBtn.addEventListener("click", function () {
    closeModal(editProfileModal); 
});

imageCloseBtn.addEventListener("click", function () {
    closeModal(previewModal); 
});





// Submission Handler 

function handleProfileFormSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault(); 
 
profileNameEl.textContent = editProfileNameInput.value; 
profileDescriptionEl.textContent = editProfileDescriptionInput.value; 

  // Close the modal.
//    editProfileModal.classList.remove("modal_is-opened");
   closeModal(editProfileModal); 
}

editProfileFormEl.addEventListener("submit", handleProfileFormSubmit); 

initialCards.forEach(function (card) {
    console.log(card.name); 
})

// New Post JavaScript //

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector ("#new-post-modal"); 
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");


// Select form and both inputs

// Select the necessary form elements. You should select
// these from inside the modal, not the document.
const addCardFormElement = newPostModal.querySelector(".modal__form"); 
const captionInputEl = newPostModal.querySelector("#card-image-input"); 
const linkInput = newPostModal.querySelector("#second-profile-description-input"); 
const previewModalCloseBtn = previewModal.querySelector(".modal__close"); 
const previewImageEl = previewModal.querySelector(".modal__image"); 
const previewCaptionEl = previewModal.querySelector(".modal__caption"); 

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
    evt.preventDefault ();

    const inputValues = {
        name: captionInputEl.value,
        link: linkInput.value,
    };


    const cardElement = getCardElement (inputValues); 
    cardsList.prepend(cardElement); 

    
 

  // Close the modal.
    //  newPostModal.classList.remove("modal_is-opened");
   closeModal(newPostModal); 
}

// Create the submit listener.
addCardFormElement.addEventListener('submit', handleAddCardSubmit);    






newPostBtn.addEventListener("click", function () {
    openModal(newPostModal); 
});

newPostCloseBtn.addEventListener("click", function () {
    newPostModal.classList.remove("modal_is-opened"); 
    closeModal(editProfileModal); 
});

// Spots Stage 6 Part 1
const profileNameEl = document.querySelector(".profile__name"); 
const profileDescriptionEl = document.querySelector(".profile__description"); 

// Open Modal 
function openModal (modal) {
    modal.classList.add("modal_is-opened"); 
}

// Close Modal 
function closeModal (modal) {
    modal.classList.remove("modal_is-opened"); 

}

initialCards.forEach(function (item) {
    const cardElement = getCardElement(item); 
    cardsList.prepend(cardElement);
}); 

addCardFormEl.addEventListener("submit", function (evt) {
    evt.preventDefault ();

    const inputValues = {
        name: captionInputEl.value,
        link: linkInput.value,
    };


    const cardElement = getCardElement (inputValues); 
    cardsList.prepend(cardElement); 

    
    addCardModal.classList.remove("modal_is-opened"); 
    });

initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement); 
}); 




// Part 4 Like Button 
    const cardLikeBtnEl = cardElement.querySelector("card__like-btn_active"); 
 
    