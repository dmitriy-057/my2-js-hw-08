import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";
const formData = {};
const formEl = document.querySelector(".feedback-form"); 

formEl.addEventListener("input", throttle(onHandleInputForm, 500));
formEl.addEventListener("submit", onFormSubmit);
// Вызов ф-ции для заполнения инпутов если данные записаны в локальное хр-ще
populateData();
// task 1
function onHandleInputForm(event) {
    //записывает в обьект данные с инпутов
    formData[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};
// Получаем значение из хранилища. Если там что-то было обновляем DOM.
function populateData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if(savedData) {
     const parsedData = JSON.parse(savedData);
     console.log('parsedData',parsedData);

     if(parsedData.email) {
       formEl.elements["email"].value = parsedData.email;
     }
     if(parsedData.message) {
        formEl.elements["message"].value = parsedData.message;
     }
    }

} 
// task 3
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Submit form');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
