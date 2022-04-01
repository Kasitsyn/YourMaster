// Switcher for mobile menu
let	burger = $(".burger");
let mobMenu = $(".mobileMenu");
let close = $(".close");

action();
window.addEventListener('resize', action);

function action(){
	if (document.documentElement.clientWidth <= 991) {
		burger.css("display", "block");
		close.css("display", "none");
		mobMenu.css("margin-top", "-520px");
	} else if (document.documentElement.clientWidth >= 1086) {
		burger.css("display", "none");
		close.css("display", "none");
	}

}

let openMenu = burger.on("click", function() {
	burger.css("display", "none");
	close.css("display", "block");
	mobMenu.css("margin-top", "0");
});

let closeMenu = close.on("click", function() {
	burger.css("display", "block");
	close.css("display", "none");
	mobMenu.css("margin-top", "-520px");
});



