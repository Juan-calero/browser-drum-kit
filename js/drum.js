function playSound(e){
    const play_audio = document.querySelector(`audio[key-data="${e.code}"]`)
    const key = document.querySelector(`.drum__key[key-data="${e.code}"]`);
    key.classList.add("playing")
    play_audio.currentTime = 0;
    play_audio.play();
    if(!play_audio) return;
    }
function stopAnimation(key){
    this.classList.remove("playing");
}

var keys = document.querySelectorAll('.drum__key');
keys.forEach(key => {
    key.addEventListener('transitionend', stopAnimation);
});

window.addEventListener('keydown', playSound);