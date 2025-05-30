import pairfound from "../../assets/sounds/pairfound.wav";
import timer from "../../assets/sounds/10sectimer.mp3";
import badpair from "../../assets/sounds/badpair.mp3";
import gamestart from "../../assets/sounds/GameStart.wav";
import gamewin from "../../assets/sounds/Win.wav";
import losepopup from "../../assets/sounds/GameOver.wav";

function SoundManager(sound) {
  function playSound(gamesound) {
    let audio;

    switch (gamesound) {
      case "pairfound":
        audio = new Audio(pairfound);
        break;
      case "10sec":
        audio = new Audio(timer);
        break;
      case "badpair":
        audio = new Audio(badpair);
        break;
      case "gamestart":
        audio = new Audio(gamestart);
        break;
      case "gamewin":
        audio = new Audio(gamewin);
        break;
      case "losepopup":
        audio = new Audio(losepopup);
        break;
      default:
        break;
    }

    audio.play();
  }
  playSound(sound);
}

export default SoundManager;
