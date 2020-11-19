function removeTransition(e){
	if(e.propertyName !== 'transform') return;

	this.classList.remove('playing');

}

function theDomHasLoaded(e) {

	const keys = document.querySelectorAll('.keys');
	console.log(keys);
	keys.forEach(key => key.addEventListener('transitionend',removeTransition));
}

window.addEventListener('keydown',function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);

	if(!audio) return;
	audio.currentTime = 0;
	audio.play();


	key.classList.add('playing');
});

document.addEventListener("DOMContentLoaded",theDomHasLoaded,false);


