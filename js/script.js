

$('.btn-link , .wav').on('click', function(event){
	$(this).toggleClass('active');
});


// $('.btn-link').click(function(){
// 	if(!$(this).hasClass('active')){
// 	$(this).siblings().removeClass('active');
// 	$(this).addClass('active');
// 	}
// });



var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});



// window.onload = function () {
// 	//ищем элемент по селектору
// 	var a = document.querySelector('.header');
// 	//вешаем на него события
// 	a.onmouseout = function(e) {
// 	  document.getElementById('header').style.display='flex';
// 	}
  
// 	a.onmouseover = function(e) {
// 	  document.getElementById('header').style.display='none';
// 	};
//   };


let gaybtn = document.querySelector('.gay-btn')



$(gaybtn).on('click', function(){
	alert("are");
	alert("wonderful");
	window.location.reload();
});



