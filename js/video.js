var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.10;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 > video.duration) {
		video.currentTime = 0;
		video.play;
	}
	else { 
		video.currentTime += 5;
	}
	console.log(video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
	let x = document.getElementById("mute").innerHTML;
	console.log(video.volume);
	if (x === "Mute"){
		document.getElementById("mute").innerHTML = "Unmute";
		video.volume = 0;
	}
	else if (x === "Unmute") {
		document.getElementById("mute").innerHTML = "Mute";
		video.volume = 1;
	}
});

