// 
//	JS ÁNGEL GUARDÍAN 
//	CREADO POR NUVA HOLDINGS 
//	DERECHOS RESERVADOS
//
var values = {
	//Specify global container width in decimals
	//relative to window
	contWidth: 0.6,
	contHeight: 0,
	contPad:0.20, 
	headerHeight: 0.12,
}
function getWidth() {
	if (self.innerHeight) {
		return self.innerWidth;
	}

	if (document.documentElement && document.documentElement.clientHeight) {
		return document.documentElement.clientWidth;
	}

	if (document.body) {
		return document.body.clientWidth;
	}
}

function getHeight() {
	if (self.innerHeight) {
		return self.innerHeight;
	}

	if (document.documentElement && document.documentElement.clientHeight) {
		return document.documentElement.clientHeight;
	}

	if (document.body) {
		return document.body.clientHeight;
	}
}
function centerHeaderElements(){
	var x = document.getElementById('menu');
	var y = document.getElementById('header');
	var z = document.getElementById('logo');
	x.style.marginTop = (y.offsetHeight - x.offsetHeight)/2 ;
	x.style.marginBottom = (y.offsetHeight - x.offsetHeight)/2;
	z.style.marginTop = (y.offsetHeight - z.offsetHeight)/2 ;
	z.style.marginBottom = (y.offsetHeight - z.offsetHeight)/2;

	var a = document.getElementById('nuva');
	var b = document.getElementById('footer');
	var c = document.getElementById('aviso');
	a.style.marginTop = (b.offsetHeight - a.offsetHeight)/2;
	a.style.marginBottom = (b.offsetHeight - a.offsetHeight)/2;
	c.style.marginTop = (b.offsetHeight - c.offsetHeight)/2;
	c.style.marginBottom = (b.offsetHeight - c.offsetHeight)/2;

}
function setContainerWidth(){
	var x = document.getElementsByClassName("container");
	var y = document.getElementsByTagName("input");
	var z = document.getElementsByTagName("textarea");
	
	for (var i = 1; i < x.length; i++) {
		x[i].style.width = (getWidth() * values.contWidth) + 'px';
	};
	for (var i = 1; i < y.length; i++) {
		y[i].style.width = (getWidth() * values.contWidth) + 'px';
	};

}

function setContainerHeight(){
	var x = document.getElementById("header");
	x.style.height = getHeight() * values.headerHeight;
	var y = document.getElementsByClassName("content");
	for (var i = 1; i < y.length-1; i++) {
		y[i].style.paddingTop = (getHeight() * values.contPad) + 'px';
		y[i].style.paddingBottom = (getHeight() * values.contPad) + 'px';
	};
	centerHeaderElements();
}

// function centerVertical(){
// 	var centered = document.getElementsByClassName("center-y");
// 	var parent = document.getElementsByClassName("center-y");
// 	for (var i = 1; i < parent.length; i++) {
// 		parent[i] = parent[i].parentElement;
// 	}	
// 	for (var i= 1; i < centered.length; i++){
// 		centered[i].style.marginTop = (parent[i].offsetHeight - centered[i].offsetHeight)/2;
// 		centered[i].style.marginBottom = (parent[i].offsetHeight - centered[i].offsetHeight)/2;
// 	}
// }

if (getWidth()<768) {
	var values = {
	//Specify global container width in decimals
	//relative to window
	contWidth: 0.8,
	contHeight: 0,
	contPad:0.05,
	headerHeight: 0.15,
	}
} else{};
