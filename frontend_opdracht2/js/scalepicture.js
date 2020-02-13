/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('scalepicture.js loaded.');

// Like Buttons
var film1 = document.querySelector(".film1");
var film2 = document.querySelector(".film2");
var film3 = document.querySelector(".film3");
var film4 = document.querySelector(".film4");

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
