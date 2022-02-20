// Menu
const menuIcon = document.querySelector(".menu__icon");
const closeMenu = document.querySelector(".close");
const menuOverlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", openCloseMenu);
menuOverlay.addEventListener("click", openCloseMenu);
closeMenu.addEventListener("click", openCloseMenu);

function openCloseMenu() {
	menuIcon.classList.toggle("open");
	menuOverlay.classList.toggle("open");
	menu.classList.toggle("open");
	document.body.classList.toggle("menu-open");
}

// Navigation
function makeNavLinksSmooth() {
	const menuLinks = document.querySelectorAll(".menu__link");

	for (let n in menuLinks) {
		if (menuLinks.hasOwnProperty(n)) {
			menuLinks[n].addEventListener("click", (e) => {
				e.preventDefault();
				document.querySelector(menuLinks[n].hash).scrollIntoView({
					behavior: "smooth",
				});

				openCloseMenu();
			});
		}
	}
}

makeNavLinksSmooth();

// Video
const videoPreviewImage = document.querySelector(".video__background-image");
const videoPlayIcon = document.querySelector(".play");
const video = document.querySelector(".video-media");

videoPlayIcon.addEventListener("click", (e) => {
	e.preventDefault();
	videoPreviewImage.classList.add("hide");
	video.classList.add("show");
});
