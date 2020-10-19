$(function() {
	//Активация поп-апа для обратного звонка
	$('.btn').click(function(){
    	$('.contact-form').addClass('contact-form--active');
  	})

  $('.contact-form-close').click(function(){
    $('.contact-form').removeClass('contact-form--active');
  })

});

$(window).scroll(function () {
	// $animate.each(function () {

	//   var $this = $(this);
	//   if($this.offset).top < $(window).scrollTop()+$(window).()/1.3 {
	// $this.addClass('active');
	//   }
	// else {
	// $this.removeClass('active');
	// }
	// });

	$('.main-info__inset').css({
		'top': -$(window).scrollTop() / 3
	});
	// console.log($(window).scrollTop());

	// }).scroll();
});