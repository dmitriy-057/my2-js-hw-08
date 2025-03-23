import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";
const formData = {};
const formEl = document.querySelector(".feedback-form"); 

formEl.addEventListener("input", throttle(onHandleInputForm, 500));
formEl.addEventListener("submit", onFormSubmit);

// task 1
function onHandleInputForm(event) {
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    populateData();
};
// Получаем значение из хранилища. Если там что-то было обновляем DOM.
function populateData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if(savedData) {
     console.log('savedData', savedData);
    }
    const parsedData = JSON.parse(savedData);
// нужно записать данные в обьект при перезагрузе стр
} 
// task 3
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Submit form');
    evt.currentTarget.reset();

}
