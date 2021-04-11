function playAudio(e){
    const audio = document.querySelector(`audio[key-data="${e.code}"]`);
    const key = document.querySelector(`.drum__key[key-data="${e.code}"]`);
    key.classList.add("playing");
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}
function animateKey(key){ 
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".drum__key");
keys.forEach(key => {
    key.addEventListener('transitionend', animateKey)});


window.addEventListener('keydown', playAudio);

