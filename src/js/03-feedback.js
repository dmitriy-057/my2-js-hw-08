import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";
const formData = {};
const formEl = document.querySelector(".feedback-form");

formEl.addEventListener("input", throttle(onHandleInputForm, 500));

function onHandleInputForm(event) {
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
