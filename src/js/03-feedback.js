import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const keyStorage = `feedback-form-state`;

const dataStorage = JSON.parse(localStorage.getItem(keyStorage));

feedbackForm.addEventListener('input', throttle(handlerInput, 500));

if (dataStorage) {
  feedbackForm.elements.email.value = dataStorage.email;
  feedbackForm.elements.message.value = dataStorage.message;
}

function saveFormDataToLocalStorage(data) {
  localStorage.setItem(keyStorage, JSON.stringify(data));
}

function handlerInput() {
  const userInfo = {
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  };

  saveFormDataToLocalStorage(userInfo);
}

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;

  if (message.value === '' || email.value === '') {
    alert("Всі поля обов'язкові до заповнення.");
  } else {
    const dataToConsole = JSON.parse(localStorage.getItem(keyStorage));
    console.log(dataToConsole);

    localStorage.removeItem(keyStorage);

    feedbackForm.reset();
  }
}

feedbackForm.addEventListener('submit', handlerSubmit);
