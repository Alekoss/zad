$(document).ready(function() {
    // Анимация стартовых блоков в home
    $('.animate-start').addClass('animate-done');
    $('.animate-start').removeClass('animate-start');
    // Слайдер
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
    });
    // Обратный отсчет
    var countdown = 30 * 60 * 1000; // 30 минут
    var timerId = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (countdown <= 0) {
            $('.timer').remove();
            $('.request__new-price').addClass('request__new-price_time-out');
            $('.request__old-price').addClass('request__old-price_time-out');
            clearInterval(timerId);
        } 
        else {
            $('.timer__time').html(min + ":" + sec);
        }
    }, 1000);
});
// Скролл до блока заказа
$('body').on('click', '.btn', function() {
    $('html, body').animate({
        scrollTop: $('.request').offset().top + 50,
    }, 1000);
});
// Запрет вводить что-либо, кроме цифр, в input Телефон
$('body').on('input', '.form__phone', function(){
    this.value = this.value.replace(/[^0-9]/g, '');
});
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
});    