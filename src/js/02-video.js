import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';

// Функция для сохранения времени в localStoragе

function saveTime(event) {
    console.log(event.seconds);
    localStorage.setItem(localStorageKey, event.seconds);
} 
// функция для обновления времени
player.on("timeupdate", saveTime);

const getTime = localStorage.getItem(localStorageKey);
player.setCurrentTime(getTime);
