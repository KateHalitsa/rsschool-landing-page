import "./main-B0TLzWk1.js";
//#region src/js/slider.js
var sliderLine = document.querySelector(".slider-line");
var slides = document.querySelectorAll(".slider-img");
var btnPrev = document.querySelector(".prev.controlls");
var btnNext = document.querySelector(".next.controlls");
var currentIndex = 0;
var totalSlides = slides.length;
function updateSlider() {
	sliderLine.style.transform = `translateX(${-currentIndex * calculateWidth()}px)`;
}
btnNext.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= totalSlides) currentIndex = 0;
	updateSlider();
});
btnPrev.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) currentIndex = totalSlides - 1;
	updateSlider();
});
function calculateWidth() {
	return Math.min(500, window.innerWidth - 40);
}
function handleSliderLayout() {
	updateSlider(calculateWidth());
}
handleSliderLayout();
window.addEventListener("resize", handleSliderLayout);
//#endregion

//# sourceMappingURL=main-Cjwhf9js.js.map