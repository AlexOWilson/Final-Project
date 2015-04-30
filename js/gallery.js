Element.prototype.Slider = function (){

	var slider = this, 
	wrapper = slider.children[0],
	slides = wrapper.children,
	position = 0, 
	width = window.innerWidth, 
	upBtn.classList.add('up');
	downBtn.classList.add('dwn');

	upBtn.addEventListener('mousedown', function(){
		if(position > (width * (slide.length -1)) * -1){
			position = position - width;
			wrapper.style.marginTop = position + "px";
		}
	});

	dwnBtn.addEventListener('mouse', function(){
		if(position < 0) {
			position = position + width; 
			wrapper.style.marginBottom = position + "px;"
		}
	});

	slider.appendChild(upBtn);
	slider.appendChild(dwnBtn);
};