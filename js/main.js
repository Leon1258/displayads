$(document).ready(function() {

	var app = (function() {
		
		var $window = $(window),
			winHeight = $window.height(),
			sec2Top = $('.sec-2').offset().top,
			sec3Top = $('.sec-3').offset().top,
			sec4Top = $('.sec-4').offset().top;
			sec2Animation = true,
			sec3Animation = true,
			sec4Animation = true;

		return {
			init: function() {
				var that = this;

				// Кнопка регистрация/войти
					$('.sec-1 .reg, .sec-1 .login').on('click', function(e) {
						e.preventDefault();

						that.changeClass($('.sec-1 .button-wrap'), 'left-pos', 'right-pos');
					});

				// Анимация
					$window.on('scroll', function() {
						var winTop = $window.scrollTop();

						if(sec2Animation && winTop + (winHeight/2) >= sec2Top) {
							$('.sec-2 .info-registr').css('animation', 'fadeIn .5s linear both');
							$('.sec-2 .plane').css('animation', 'plane 2s linear .5s both');
							$('.sec-2 .for-animation').css('animation', 'fromLeft 2s linear .6s both');
							$('.sec-2 .info-code').css('animation', 'fadeIn .5s linear 1.3s both');
							$('.sec-2 .info-money').css('animation', 'fadeIn .5s linear 2.5s both');

							sec2Animation = false;
						}
						
						if(sec3Animation && winTop + (winHeight/2) >= sec3Top) {
							$('.sec-3 .info-registr').css('animation', 'fadeIn .5s linear both');
							$('.sec-3 .for-animation').css('animation', 'fromLeft 2s linear .5s both');
							$('.sec-3 .info-browser').css('animation', 'fadeIn .5s linear 1.2s both');
							$('.sec-3 .info-traff').css('animation', 'fadeIn .5s linear 2.5s both');

							sec3Animation = false;
						}

						if(sec4Animation && winTop + (winHeight/2) >= sec4Top) {
							$('.sec-4 .num-item-value').each(function() {
								var currentElem = $(this),
									currentValue = currentElem.html();

								that.animateNumber(currentElem, 1, currentValue);
							});

							sec4Animation = false;
						}
					});

				// Табы
					$('.tabs-control-link').on('click', function(e) {
						e.preventDefault();

						var item = $(this).closest('.tabs-control-item'),
							contentItem = $(this).closest('.tabs').find('.tabs-item'),
							itemPosition = item.index();

						contentItem.eq(itemPosition)
							.add(item)
							.addClass('active')
							.siblings()
							.removeClass('active');
					});
			},

			changeClass: function(elem, classOne, classTwo) {
				elem.hasClass(classOne) ? 
					elem.removeClass(classOne).addClass(classTwo) : 
					elem.removeClass(classTwo).addClass(classOne);
			},

			animateNumber: function animNumb(elem, step, value) {
				var totalSteps = 100,
					currentNumber = parseInt(value/totalSteps*step);

				elem.html(currentNumber);

				if (step < totalSteps) {
					setTimeout(function() {
						animNumb(elem, step+1, value);
					}, 5);
				}
			}
		}
	}());

	app.init();

});