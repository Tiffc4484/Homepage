function imageGallery() {
	const highlight = document.querySelector(".galary_highlight");
	const previews = document.querySelectorAll(".preview img");
	previews.forEach((preview) => {
		preview.addEventListener("click", function () {
			const smallSrc = this.src;

			const bigSrc = smallSrc.replace("small", "large");

			highlight.src = bigSrc;
			preview.forEach((preview) => preview.classList.remove("image_active"));

			preview.classList.add("image_active");
		});
	});
}

imageGallery();
