const video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down video");
	video.playbackRate *= 0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead video");
	video.currentTime += 15;
	if (video.curentTime >= video.duration)
		{video.currentTime = 0};
	console.log("video current time is", video.currentTime);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

const mute = document.querySelector("#mute")
mute.addEventListener("click", function() {
	console.log("Mute Video");
	if (video.muted == true){
		video.muted = false
		mute.innerHTML = "Mute"
	}
	else {
		video.muted = true
		mute.innerHTML = "Unmute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Video");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove("oldSchool");
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume Slider");
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	video.volume = document.querySelector("#slider").value / 100;
});