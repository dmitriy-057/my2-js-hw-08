import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = 'videoplayer-current-time';

// Функция для сохранения времени в localStoragе

function saveTime(event) {
    console.log('время обновилось -', event);
    localStorage.setItem(localStorageKey, event.seconds);
};

player.on('timeupdate',throttle(saveTime,1000));

// Получаем сохраненное время
const getTime = localStorage.getItem(localStorageKey);

if(getTime) {
    player.setCurrentTime(parseFloat(getTime));
}

function clearTime() {
console.log('Видео завершилось, время очищено');
localStorage.removeItem(localStorageKey);
};
player.on("ended", clearTime);
