/**
 * JS - Responsive Slide Show
 * @author Carlos Pinho
 * 
 */

//Setting interval var for setTimeout shift pace
var gap = 3000;

//Defining 3 functions that will switch one another throughout an internal setTimeout method

function slide1(){
	//using DOM concept to reach banner by id and change its src
	document.getElementById("banner").src = "Imgs/car-stock.jpg";
	//Setting time gap before switching to the next function slide2()
	setTimeout("slide2()",gap);
}

function slide2(){
	//using DOM concept to reach banner by id and change its src
	document.getElementById("banner").src = "Imgs/conceptual-pic.jpg";
	//Setting time gap before switching to the next function slide3()
	setTimeout("slide3()",gap);
}

function slide3(){
	//using DOM concept to reach banner by id and change its src
	document.getElementById("banner").src = "Imgs/keyboard-hands.jpg";
	/*Setting time gap before switching to the next function slide1(),
	  thus restarting the whole loop in an infinite cycle 
	*/
	setTimeout("slide1()",gap);
}