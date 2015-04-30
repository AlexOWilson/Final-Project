Element.prototype.Contact = function(){

var contact = this,
	form = document.getElementById('c-form')
	submit = document.getElementById('contact-submit'),
	wrapper =document.getElementById('form-wrapper');

	submit.addEventListener("mousedown", function(){
		var link = 'mailto:megpie@gmail.com?subject=Message from' +
		form.children[3].value+
		'&body='+
		form.children[4].value;

		window.location.href= link;
		wrapper.innerHTML= '<div class="center"><h2>Thanks!</h2></div>';


	});
};