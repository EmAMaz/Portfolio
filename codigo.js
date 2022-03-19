// BOTON MENU
addEventListener('DOMContentLoaded', () => {
	const btn_menu = document.querySelector('.btn-menu')

	if(btn_menu) {
	   btn_menu.addEventListener('click',() => {
		   const navbar_items = document.querySelector('.navbar_items')
		   
		   navbar_items.classList.toggle('show')
	   })
	}
})

// SCROLL
window.addEventListener("scroll" , function () {
	var header = document.querySelector("header");
	header.classList.toggle("magic",window.scrollY > 0);
})

function funcionuno(){
	location.href = "index.html";
	window.open();
}

function funciondos(){
	location.href = "https://emamaz.github.io/steel-frame/";
}

function funciontres(){
	location.href = "https://emamaz.github.io/basic-online-calculator/";
}

