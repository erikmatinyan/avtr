const gallery = document.querySelector(".gallery__list");
let isDown = false;
let startX;
let scrollLeft;

gallery.addEventListener("mousedown", (e) => {
	isDown = true;
	startX = e.pageX - gallery.offsetLeft;
	scrollLeft = gallery.scrollLeft;
});
gallery.addEventListener("mouseleave", () => {
	isDown = false;
});
gallery.addEventListener("mouseup", () => {
	isDown = false;
});
gallery.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - gallery.offsetLeft;
	const walk = x - startX;
	gallery.scrollLeft = scrollLeft - walk;
});

document.querySelector("img").setAttribute("draggable", false);