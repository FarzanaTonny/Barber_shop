var menu = document.querySelector('#menu');
var menu_btn = document.querySelector('#menu_btn');
var menu_img = document.querySelector('#menu_img');

menu.style.right = '-250px';

menu_btn.onclick = function(){
	if(menu.style.right == '-250px'){
		menu.style.right = '0';
		menu_img.src = 'images/close.png';
		
	}else{
		menu.style.right = '-250px';
		menu_img.src = 'images/menu.png';
	}
}