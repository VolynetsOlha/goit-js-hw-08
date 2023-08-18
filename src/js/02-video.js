import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const onPlayer = ({ seconds }) => {
    localStorage.setItem("videoplayer-current-time", seconds);
  };
  
  if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
  }
  
  player.on('timeupdate', throttle(onPlayer, 1000));
