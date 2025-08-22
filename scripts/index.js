const  initialCards = [ //Object 1
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
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileFormEl = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
    "#profile-name-input"
); 

const editProfileDescriptionInput = editProfileModal.querySelector(
    "#profile-description-input"); 

editProfileBtn.addEventListener("click", function () {
    // editProfileModal.classList.add("modal_is-opened");
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent; 
    openModal(editProfileModal); 
});

editProfileCloseBtn.addEventListener("click", function () {
    // editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal); 
    
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
const nameInput = newPostModal.querySelector("#card-image-input"); 
const linkInput = newPostModal.querySelector("#second-profile-description-input"); 

// Create the form submission handler.
function handleAddCardSubmit(evt) {
  // Prevent default browser behavior.
  evt.preventDefault(); 
 
  // Log both input values to the console.
console.log(nameInput.value); 
console.log(linkInput.value); 

  // Close the modal.
    //  newPostModal.classList.remove("modal_is-opened");
   closeModal(editProfileModal); 
}

// Create the submit listener.
addCardFormElement.addEventListener('submit', handleAddCardSubmit);






newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add("modal_is-opened");
    openModal(editProfileModal); 
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
    openModal(editProfileModal); 
}

// Close Modal 
function closeModal (modal) {
    modal.classList.remove("modal_is-opened"); 
    closeModal(editProfileModal); 
}


