/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

setTimeout(function () {

	console.log('scalepicture.js loaded.');

	// Like Buttons
	var film1 = document.querySelector(".img-film0");
	var film2 = document.querySelector(".img-film1");
	var film3 = document.querySelector(".img-film2");
	var film4 = document.querySelector(".img-film3");
	var film5 = document.querySelector(".img-film4");
	var film6 = document.querySelector(".img-film5");

	film1.addEventListener("click", function () {
		film1.classList.toggle('verhaal-foto-fullscreen')
	});

	film2.addEventListener("click", function () {
		film2.classList.toggle('verhaal-foto-fullscreen')
	});

	film3.addEventListener("click", function () {
		film3.classList.toggle('verhaal-foto-fullscreen')
	});

	film4.addEventListener("click", function () {
		film4.classList.toggle('verhaal-foto-fullscreen')
	});

	film5.addEventListener("click", function () {
		film5.classList.toggle('verhaal-foto-fullscreen')
	});

	film6.addEventListener("click", function () {
		film6.classList.toggle('verhaal-foto-fullscreen')
	});

}, 1000);