var video = document.querySelector('#player1');

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Looping is set to " + video.loop)
});


document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Video speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate *= 1.1;
	console.log("Video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Skip 10 seconds. Current time is: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted == true) {
		console.log("unmute");
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else {
		console.log("unmute");
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	console.log("Video speed is " + video.playbackRate);
});

var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value;
slider.oninput = function () {
	video.volume = slider.value / 100;
	output.innerHTML = slider.value + "%";
}

document.querySelector("#vintage").addEventListener("click", function () {
	document.querySelector(".video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	document.querySelector(".video").classList.remove("oldSchool");
});