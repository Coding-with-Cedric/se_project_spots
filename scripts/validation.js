const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

const showInputError = ( formEl, inputEl, errorMsg ) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = document.querySelector("#" + errorMsgID); 
    errorMsgEl.textContent = errorMsg; 
    inputEl.classList.add("modal__input_type_error"); 

}; 

const hideInputError = (formEl, inputEl) => {
    const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`); 
    errorMsgEl.textContent = ""; 
    inputEl.classList.remove("modal__input_type_error"); 
}; 

const checkInputValidity = ( formEl, inputEl) => { 
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
        hideInputError(formEl, inputEl); 
    }
}; 

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid; 
     }); 
}; 

const toggleButtonState = (inputList, buttonEl ) => {
    if (hasInvalidInput (inputList)) {
        disableButton(buttonEl); 
        // Add a modifier class to the buttonEl to make it grey with the CSS 
    } else {
        buttonEl.disabled = false; 
        // remove the disabled class
    }
}; 


const disableButton = ( buttonEl  ) => {
    buttonEl.disabled = true; 

}; 

const setEventListeners = ( formEl, config) => {
    const inputList = Array.from([ ...formEl.querySelectorAll(config.inputSelector)]); 
    const buttonElement = formEl.querySelector(config.submitButtonSelector); 
    console.log(buttonElement); 

    toggleButtonState(inputList, buttonElement, config); 


    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formEl, inputElement, config);
            toggleButtonState(inputList, buttonElement, config); 
        }); 
    }); 
}; 

const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector); 
    formList.forEach((formEl) => {
        setEventListeners(formEl, config); 
         }); 
    }; 

enableValidation(settings);
 
