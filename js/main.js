var mySong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function () {
	if (mySong.paused) {
		mySong.play();
		icon.classList.remove("far");
		icon.classList.remove("fa-play-circle");

		icon.classList.add("fas");
		icon.classList.add("fa-pause");
	} else {
		mySong.pause();
		icon.classList.remove("fas");
		icon.classList.remove("fa-pause");

		icon.classList.add("far");
		icon.classList.add("fa-play-circle");
	}
};
