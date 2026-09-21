import "./main-DUkWHV44.js";
//#region src/js/catalog.js
document.querySelectorAll(".description").forEach((description) => {
	const button = description.querySelector(".description__button");
	button.addEventListener("click", () => {
		description.classList.toggle("description--expanded");
		const isExpanded = description.classList.contains("description--expanded");
		button.textContent = isExpanded ? "Less" : "More";
	});
});
var options = document.querySelectorAll(".option");
options.forEach((option) => {
	option.addEventListener("click", () => {
		options.forEach((item) => {
			item.classList.remove("active");
		});
		option.classList.add("active");
	});
});
//#endregion

//# sourceMappingURL=catalog-B9EYPzNB.js.map