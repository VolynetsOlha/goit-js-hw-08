import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe")
const customKey = "videoplayer-current-time";

const player = new Player(iframe);

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime({ seconds }) {
    localStorage.setItem(customKey,seconds);
}

player.setCurrentTime(localStorage.getItem(customKey) || 0)
