$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

$(function(){


	/* ---------------------------------------------- /*
	 * Validate Form
	/* ---------------------------------------------- */
	$("#windowForm").validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			
			email: {
				required: true,
				email: true
			},
			
		},
		messages: {
			username: {
				required: "Поле не заполнено",
				minlength: "Имя должно состоять как минимум из 2 символов"
			},
			
			email: "Неправильный формат",
			
		},
		submitHandler: function() {
			
			jQuery.fancybox('#call-back-message');

		}
	});

	$("#windowWrite").validate({
		// debug: true,
 		// 	success: "valid",
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			tel: {
				required: true,

			},

		},
		messages: {
			username: {
				required: "Поле не заполнено",
				minlength: "Имя должно состоять как минимум из 2 символов"
			},

			tel: "Неправильный номер",
		},
		submitHandler: function() {
			
			jQuery.fancybox('#write-message');

		}
	});

	$("#windowCheck-out").validate({
	
		rules: {
			number: {
				required: true,
				
			},
			cod: {
				required: true,
				
			},

		},
		messages: {
			number: {
				required: "Не найден номер заказа",
				
			},

			cod: {
				required: "Неправильный код",
				
			},
		},
	});

	$('.only-number').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	})


	/* ---------------------------------------------- /*
	 * Маска для поле input
	/* ---------------------------------------------- */
	if($('.tel-mask').length){
		$('.tel-mask').each(function(){
			$(this).mask("(999)999-99-99");
	    });

    };

    // При клике очищаем value
	$.fn.autoClear = function () {
        // сохраняем во внутреннюю переменную текущее значение
        $(this).each(function() {
            $(this).data("autoclear", $(this).attr("placeholder"));
        });
        $(this)
            .bind('focus', function() {   // обработка фокуса
                if ($(this).attr("placeholder") == $(this).data("autoclear")) {
                    $(this).attr("placeholder", "").addClass('autoclear-normalcolor');
                }
            })
            .bind('blur', function() {    // обработка потери фокуса
                if ($(this).attr("placeholder") !== " ") {
                    $(this).val("").attr("placeholder", $(this).data("autoclear")).removeClass('autoclear-normalcolor');
                   
                }
            });   
        return $(this);
    }
    $('.navbar-mobile-list__item .search__input').autoClear();



    /* ---------------------------------------------- /*
	 * Datepicker
	/* ---------------------------------------------- */
    if($('.datepicker').length){
    	$( ".datepicker" ).datepicker({
    		closeText: 'Закрыть',
            prevText: 'Пред',
            nextText: 'След',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Нед',
			showOn: "button",
			buttonImage: "img/calendar.svg",
			buttonImageOnly: false,
			buttonText: "Select date",
			altField: ".datepicker",
			altFormat: "d MM",
	    });
    };

    if($('.delivery-date').length){
    	$( ".delivery-date" ).datepicker({
    		closeText: 'Закрыть',
            prevText: 'Пред',
            nextText: 'След',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Нед',
			showOn: "button",
			buttonImage: "img/calendar.svg",
			buttonImageOnly: false,
			buttonText: "Select date",
			altField: ".delivery-date",
			altFormat: "dd.mm.yy",
	    });
    };


	/* ---------------------------------------------- /*
	 * Form Styler
	/* ---------------------------------------------- */
	if($('.styler').length){
		$('.styler').styler({
			selectVisibleOptions: 6,
		});
	};



	/* ---------------------------------------------- /*
	 * Radio Tabs
	/* ---------------------------------------------- */
	$("#radio-tabs2 .styler").on('change', function(){
		if($(this).is('.checked')){
		    $('.box-date').slideDown() 
		   $('select.styler').trigger('refresh')
		} 
	})
	$("#radio-tabs1 .styler").on('change', function(){
		if($(this).is('.checked')){
		    $('.box-date').slideUp() 
		   $('select.styler').trigger('refresh')
		} 
	})
	
	/* ---------------------------------------------- /*
	 * Navbar Open Menu
	/* ---------------------------------------------- */


	$('.navbar-toggle').on('click', function(e){
		$(this).toggleClass('open');
		$('.navbar-mobile').slideToggle(0);
		$('.category-list').slideToggle(0);
		$('.category').removeClass('open').find('.category-list__item').removeClass('open');
		$('body').addClass('menu-open');
		$('body').removeClass('category-open');
		if ($(this).hasClass('open')) {
			$('.tg-hide').hide(0);
		} else {
			$('.tg-hide').show(0);
			$('body').removeClass('menu-open');
		}
		return false;
	})



	/* ---------------------------------------------- /*
	 * Category On Hover
	/* ---------------------------------------------- */

	$('.category-toggle').hover(function(){
		$(this).addClass('active')
		$('.category').addClass('category--open')
		$('.overlay').addClass('open')
	}, function(){
		$('.category').removeClass('category--open')
		$('.overlay').removeClass('open')
		$(this).removeClass('active')
	});


	$('.category').hover(function(){
		$('.category-toggle').addClass('active')
		$('.overlay').addClass('open')
		$(this).addClass('category--open').parents('.box-category').addClass('over')
		$('.category-card .swiper-slide').addClass('over')
	}, function(){
		$('.category-toggle').removeClass('active')
		$('.overlay').removeClass('open')
		$(this).removeClass('category--open').parents('.box-category').removeClass('over')
		$('.category-card .swiper-slide').removeClass('over')
	});


	$(document).click( function(event){
		if( $(event.target).closest(".category").length ) 
		return;
		$(".category-list__item").removeClass('open');
		event.stopPropagation();
    });

	// Mobile open category-list
	$('.category-list__item.dropdown .category-list__link').on('click', function(){
		$(this).parent().toggleClass('open');
		$(this).parents('.category').toggleClass('open');
		$('.tg-hide:not(.wrapper)').slideToggle(0)
		if ($(this).parent().hasClass('open')) {
			$('.tg-hide:not(.wrapper)').hide(0)
			$('body').addClass('category-open')
			
		} else {
			$('.tg-hide:not(.wrapper)').show(0)
			$('body').removeClass('category-open')

		}
		return false;
	});

	/* ---------------------------------------------- /*
	 * Category Slider in Home 
	/* ---------------------------------------------- */
	if($('.category-body .swiper-container').length){
		var e = $(".category-list__item")
		var t = new Swiper ('.category-body .swiper-container', {
			// Optional parameters
			effect: "fade",
	        autoplay: {
				delay: 7000,

			},
			mousewheel: false,
			simulateTouch: false,
	        speed: 300,
	        on: {
		        init: function (t) {
		        	e.eq(this.realIndex).addClass("current")
		        },
		        slideChangeTransitionStart: function () {
		        	e.removeClass("current").eq(this.realIndex).addClass("current")
		        }
		    }

	    })

	    r = new Swiper (".category-card .swiper-container", {
	        effect: "fade",
	        mousewheel: false,
	        simulateTouch: false,
	    });

	    r.classNames.length && (e.on("mouseenter", function(e) {
	        var r = $(e.currentTarget);
	        r.index() < t.slides.length && t.slideTo(r.index())
	    }), 

	    e.on("mouseleave", function() {
			t.autoplay.start();
	    }), t.on("slideChangeTransitionStart", function(e) {
	        r.slideTo(this.realIndex)
	    }))

	};
	
	/* ---------------------------------------------- /*
	 * Anchor
	/* ---------------------------------------------- */
	$('a.anchor').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
		$('body,html').animate({scrollTop: bl_top}, 900);
		return false;
	});
	$('a.letter').bind('click.smoothscroll',function () {
		var target = $(this).attr('href'),
			headerHeight = $('header').innerHeight(),
			headertopline = $('.header-top-line').innerHeight(),
            bl_top = $(target).offset().top - headerHeight - headertopline - 20;
		$('body,html').animate({scrollTop: bl_top}, 900);
		return false;
	});

	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		showSidebar();
		return false
	});
 

	
	$('.tabs-list__item a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent('.tabs-list__item').siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent('.tabs-list__item').addClass('active');
		$('.comparison-column-slider').slick('setPosition');
		pcp_apply_data_api()
		return false
	});

	$('.js-tabs-list-open').on('click', function(){
		$(this).parents('.tab-wrap').find('.check-list').slideToggle(250)
	});

	$('.js-check-list label').click(function(){
		var labelText = $(this).find('.label-text').html();
		var badgeText = $(this).find('.badge').html();
		$(this).parents('.tab-wrap').find('.tab-wrap-header__text').html(labelText)
		$(this).parents('.tab-wrap').find('.tab-wrap-header .badge').html(badgeText)

		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent('.check-list__item').siblings().removeClass('active');
		var id = $(this).attr('data-href');
		$(id).removeClass('hide');
		$(this).parent('.check-list__item').addClass('active');
		$('.comparison-column-slider').slick('setPosition');
		pcp_apply_data_api()
		return false
	});
	 


	/* ---------------------------------------------- /*
	 * Open Rubrik
	/* ---------------------------------------------- */
	$('.js-open-sidebar').on('click', function(){
		$('.sidebar').slideToggle(300)
	})



	/* ---------------------------------------------- /*
	 * Filter Accordion
	/* ---------------------------------------------- */
	$('.filter-wrap__head').on('click', function(){
		$('.filter-wrap__head').not($(this)).removeClass('open').next('.filter-wrap__body').slideUp(250);
		var el = $(this);
		el.next('.filter-wrap__body').slideToggle(250);
		el.toggleClass('open');
		return false;
	});

	/* ---------------------------------------------- /*
	 * Product Grid and List
	/* ---------------------------------------------- */
	$('.js-sort-grid').on('click', function(){
		$('.js-sort-grid').removeClass('selected')
		$(this).addClass('selected')
		if($('.sort__item--grid').hasClass('selected')) {
			$('.boxes-product').addClass('boxes-product--grid')
		} else {
			$('.boxes-product').removeClass('boxes-product--grid')
		}

		return false;
	});

	/* ---------------------------------------------- /*
	 * Product Sort
	/* ---------------------------------------------- */
	$('.sort__item-btn').on('click', function(){
		$('.sort__item-btn').removeClass('active')
		$(this).addClass('active')
		if($('.sort__item--filter').hasClass('active')) {
			$('.filter').show()
			$('.js-bx-wrapper').hide()
			$('.main-wrap').addClass('filter-open')
		} else {
			$('.filter').hide()
			$('.js-bx-wrapper').show()
			$('.main-wrap').removeClass('filter-open')
		}

		return false;
	});

	$('.js-open-filter').on('click', function(){
		$(this).toggleClass('active')
		$('.filter').slideToggle(0)
		$('.js-bx-wrapper').slideToggle(0)
		

		return false;
	});


	

	

	/* ---------------------------------------------- /*
	 * Range
	/* ---------------------------------------------- */
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 264500,
		values: [ 0, 264500 ],
		slide: function( event, ui ) {
			$( "#f-price1" ).val( ui.values[ 0 ] );
			$( "#f-price2" ).val( ui.values[ 1 ] );

		}
	});
	$("#f-price1").on('change keyup paste', function() {
		$(this).parents('.filter-wrap__item').find('.filter-wrap__tag span').remove()
    	$("#slider-range").slider('values',0,$(this).val());
    	var priceCount = $(this).val();
    	var priceCount2 = $('#f-price2').val();
    	var priceCountPlaceholder2 = $('#f-price2').attr('placeholder');
    	if(priceCount2 == false) {
    		priceCount2 = priceCountPlaceholder2
    	} else {
    		priceCount2 = $('#f-price2').val();
    	}
    	if(priceCount == '') {
    		priceCount = 0
    	} else {
    		var priceCount = $(this).val();
    	}
    	$(this).parents('.filter-wrap__item').find('.filter-wrap__tag').append('<span>' + priceCount + '-' + priceCount2 + '</span>');

	});
	$("#f-price2").on('change keyup paste', function() {
		$(this).parents('.filter-wrap__item').find('.filter-wrap__tag span').remove()
	    $("#slider-range").slider('values',1,$(this).val());
	    var priceCount = $('#f-price1').val();
    	var priceCount2 = $(this).val();
    	var priceCountPlaceholder = $('#f-price1').attr('placeholder');
    	if(priceCount == false) {
    		priceCount = priceCountPlaceholder
    	} else {
    		priceCount = $('#f-price1').val();
    	}
    	if(priceCount2 == '') {
    		priceCount2 = priceCount
    	} 
    	$(this).parents('.filter-wrap__item').find('.filter-wrap__tag').append('<span>' + priceCount + '-' + priceCount2 + '</span>');
	});


	$( "#slider-range-proc" ).slider({
		range: true,
		min: 1100,
		max: 5200,
		values: [ 1100, 5200 ],
		slide: function( event, ui ) {
			$( "#f-proc1" ).val( ui.values[ 0 ] );
			$( "#f-proc2" ).val( ui.values[ 1 ] );

		}
	});
	$("#f-proc1").on('change keyup paste', function() {
    	$("#slider-range").slider('values',0,$(this).val());
	});
	$("#f-proc2").on('change keyup paste', function() {
	    $("#slider-range").slider('values',1,$(this).val());
	});



	$( "#slider-range-drive-size" ).slider({
		range: true,
		min: 128,
		max: 3000,
		values: [ 128, 3000 ],
		slide: function( event, ui ) {
			$( "#f-drive-size1" ).val( ui.values[ 0 ] );
			$( "#f-drive-size2" ).val( ui.values[ 1 ] );

		}
	});
	$("#f-drive-size1").on('change keyup paste', function() {
    	$("#slider-range").slider('values',0,$(this).val());
	});
	$("#f-drive-size2").on('change keyup paste', function() {
	    $("#slider-range").slider('values',1,$(this).val());
	});



	$( "#slider-range-video-memory" ).slider({
		range: true,
		min: 128,
		max: 3000,
		values: [ 128, 3000 ],
		slide: function( event, ui ) {
			$( "#f-video-memory1" ).val( ui.values[ 0 ] );
			$( "#f-video-memory2" ).val( ui.values[ 1 ] );

		}
	});
	$("#f-video-memory1").on('change keyup paste', function() {
    	$("#slider-range").slider('values',0,$(this).val());
	});
	$("#f-video-memory2").on('change keyup paste', function() {
	    $("#slider-range").slider('values',1,$(this).val());
	});



	$( "#slider-range-weight" ).slider({
		range: true,
		min: 460,
		max: 5500,
		values: [ 460, 5500 ],
		slide: function( event, ui ) {
			$( "#f-weight1" ).val( ui.values[ 0 ] );
			$( "#f-weight2" ).val( ui.values[ 1 ] );

		}
	});
	$("#f-weight1").on('change keyup paste', function() {
    	$("#slider-range").slider('values',0,$(this).val());
	});
	$("#f-weight2").on('change keyup paste', function() {
	    $("#slider-range").slider('values',1,$(this).val());
	});



	$( "#slider-range-guarantee" ).slider({
		range: true,
		min: 6,
		max: 36,
		values: [ 6, 36 ],
		slide: function( event, ui ) {
			$( "#f-guarantee1" ).val( ui.values[ 0 ] );
			$( "#f-guarantee2" ).val( ui.values[ 1 ] );

		}
	});
	$("#f-guarantee1").on('change keyup paste', function() {
    	$("#slider-range").slider('values',0,$(this).val());
	});
	$("#f-guarantee2").on('change keyup paste', function() {
	    $("#slider-range").slider('values',1,$(this).val());
	});

	/* ---------------------------------------------- /*
	 * Filter checkbox
	/* ---------------------------------------------- */
	

	$('.box-checkbox').on('click', function(){
		var checkBoxTitle = $(this).find('.label-text').html();
		var checkBoxIndex = $(this).index();
		if($(this).find('.styler').hasClass('checked')) {
			$(this).parents('.filter-wrap__item').find('.filter-wrap__tag').append('<span class="ch-title'+ checkBoxIndex +'">' + checkBoxTitle +  '</span>')
		} else {
			$(this).parents('.filter-wrap__item').find('.ch-title'+ checkBoxIndex +'').remove();
		}
	});

	/* ---------------------------------------------- /*
	 * Card Slider
	/* ---------------------------------------------- */
	
	if($('.cd-slider').length){
		
		$('.cd-slider').slick({
			arrows: false,
			asNavFor: '.cd-slider-nav',
			infinite: false,
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        dots: true,
			        asNavFor: null,
			      }
			    }
		    ]
		});
		$('.cd-slider-nav').slick({
	
			asNavFor: '.cd-slider',
			slidesToShow: 6,
			slidesToScroll: 1,

			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-right rotate-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
  			focusOnSelect: true,
  			infinite: false,
  			responsive: [
		    {
		      breakpoint: 1700,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true,
		      }
		    },
		    {
		      breakpoint: 1600,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 1,
		        arrows: true,
		      }
		    },
		    {
		      breakpoint: 1450,
		      settings: {
		        slidesToShow: 6,
		        slidesToScroll: 1,
		        arrows: true,

		      }
		    },
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 1,
		        arrows: true,

		      }
		    },
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		        arrows: true,

		      }
		    },

		  ]
		})
		

		 //remove active class from all thumbnail slides
		$('.cd-slider-nav .slick-slide').removeClass('slick-current');

		//set active class to first thumbnail slides
		$('.cd-slider-nav .slick-slide').eq(0).addClass('slick-current');

		// On before slide change match active thumbnail to current slide
		$('.cd-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var mySlideNumber = nextSlide;
			$('.cd-slider-nav .slick-slide').removeClass('slick-current');
			$('.cd-slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-current');
		});
	}

	$('.all-product').on('click', function(){
		$('.product').removeClass('p-hidden')
		$(this).hide();
		return false;
	});

	if($('.card-details__left').length){
		$('.card-details__left').each(
			function()
			{
				$(this).jScrollPane(
					{
						showArrows: $(this).is('.arrow')
					}
				);
				var api = $(this).data('jsp');
				var throttleTimeout;
				$(window).bind(
					'resize',
					function()
					{
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					}
				);
			}
		)
	}

	if($('.sort--scroll').length){
		$('.sort--scroll').each(function(){
				
					$(this).jScrollPane({
							showArrows: $(this).is('.arrow'),
							horizontalGutter: 10
						}
					);
					var api = $(this).data('jsp');
					var thst = $(this);
					var throttleTimeout;
					$(window).bind('resize', function(){
						
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(function(){
								api.reinitialise();
								throttleTimeout = null;
								if (thst.find(".jspHorizontalBar").length ) {
							        var barHeight = thst.find(".jspHorizontalBar").height();
								    var cotanierHeight = thst.find(".jspContainer").height() + 5;
								    var newHeight = barHeight + cotanierHeight;
								    thst.find(".jspContainer").css({"height": newHeight});
						  		}
							}, 50);
						}
							
							
					});

					if ($(this).find(".jspHorizontalBar").length ) {
				        var barHeight = $(this).find(".jspHorizontalBar").height();
					    var cotanierHeight = $(this).find(".jspContainer").height() + 5;
					    var newHeight = barHeight + cotanierHeight;
					    $(this).find(".jspContainer").css({"height": newHeight});
				  	}
			   
		})
	}


	

	if($('.comparison-column-slider').length){
		$('.comparison-column-slider').slick({
			slidesToShow: 3, 
			slidesToScroll: 1,
			infinite: false,
			prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-right rotate-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
			responsive: [
			    {
			      breakpoint: 1124,
			      settings: {
			        slidesToShow: 2,
			       
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: "unslick"
			    }
		    ],

		})
	};

	function pcp_apply_data_api() {
        var groups = { };

        // generate groups by their groupId set by elements using data-match-height
        $('.comparison-wrap-sidebar [data-match-height], .tab-cont:not(.hide) [data-match-height]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };



	/* ---------------------------------------------- /*
	 * Fancybox
	/* ---------------------------------------------- */

	if($('.fancybox').length) {
		$(".fancybox").fancybox({
			autoSize : true,
			width : 'auto',
			maxWidth : '100%',
			helpers: {
				overlay: {
					locked: true
				},
			}
		});
	}
	if($('.fancybox').length) {
		$(".fancybox-thumb").fancybox({
			nextEffect : 'none', 
			prevEffect: 'none',
			helpers: {

				thumbs: {
					width	: 120,
					height	: 96,

				}
			}
		});
	}

	/* ---------------------------------------------- /*
	 * Plus Minus
	/* ---------------------------------------------- */
	$('.js-minus').click(function () {
		var $input = $(this).parent().find('input');
		var $bNumber = $(this).parent().find('.b-number__count');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.js-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	/* ---------------------------------------------- /*
	 * Payment
	/* ---------------------------------------------- */
	$("#open-bonus").on('change', function(){
		if($(this).is(':checked')) {
		    $('.bl-bonus').slideDown(0) 
		} else {
			$('.bl-bonus').slideUp(0) 
		}
	})

	$(".open-cnt").on('click', function(){
		if($(this).is('.checked')) {
		    $(this).parents('.boxes-cnt').find('.bl-cnt').slideDown(0) 
		} else {
			$(this).parents('.boxes-cnt').find('.bl-cnt').slideUp(0) 
		}
	})

	$(".js-payment1 .styler").on('click', function(){
		var el = $(this).attr('id');

		if(el == 'payment-orgz-styler'){
			 $('.jswt-right').show(0) 
		} else {
			 $('.jswt-right').hide(0) 
		}
	})

	$(".js-sbp .styler").on('click', function(){
		var el = $(this).attr('id');

		if(el == 'sbp1-styler'){
			$('#bsbp1').show(0) 
			$('#bsbp3').hide(0) 
			$('#bsbp2').hide(0) 
		} else if (el == 'sbp2-styler') {
			$('#bsbp1').hide(0)
			$('#bsbp3').hide(0) 
			$('#bsbp2').show(0) 
		} else if (el == 'sbp3-styler') {
			$('#bsbp3').show(0) 
			$('#bsbp2').hide(0)
			$('#bsbp1').hide(0) 
		}
	})



	function addRub (val) {
		return val + " ₽";
	}

	function removeRub (val) {
		val = val.replace(" ₽", "");
		val = val.replace("₽", "");
		val = val.replace(" ", "");
		return val;
	}

	$(".bonus-input").on("input", function () {
		var $this = $(this);
		var val = $this.prop("value");
		var newVal = removeRub(val);
		newVal = addRub(newVal);
		$this.prop("value", newVal);
	});
	

	/* ---------------------------------------------- /*
	 * Login
	/* ---------------------------------------------- */
	$('.js-confirm').click(function(event) {
        event.preventDefault();
        namebl = $(this).html();
        if(namebl == 'Подтвердить'){
            $(this).html('Отправить еще раз');
        }else{
           $(this).html('Подтвердить');
        }

    });

    /* ---------------------------------------------- */
	$("#radio-tabs-login2 input").on('change', function(){
		if($(this).is(':checked')) {
		   
		    $('#radio-tabs-login4').show() 
		    $('#radio-tabs-login3').hide()

		}
		return false
	})
	$("#radio-tabs-login1 input").on('change', function(){
		if($(this).is(':checked')) {
		   
		    $('#radio-tabs-login3').show() 
		    $('#radio-tabs-login4').hide()

		}
		return false
	})
	
	/* ---------------------------------------------- /*
	 * Autorized
	/* ---------------------------------------------- */

	function showSidebar () {
		if($('#atab_1').hasClass('hide')) {
			$('.sidebar').addClass('hide-sidebar');
		} else {
			$('.sidebar').removeClass('hide-sidebar');
		}
	}

	$(window).on('load', function(){
		showSidebar();	
	})

	/* ---------------------------------------------- /*
	 * Map
	/* ---------------------------------------------- */  
	if($('#map').length){
		ymaps.ready(init);
		var myMap; 
		function init () { 
			myMap = new ymaps.Map("map", { 
				center: [55.783150, 37.712166], 
				zoom: 17,
				controls: ['zoomControl'], //, 'geolocationControl'

			});

			$(window).on('resize load', function () {
				var widthWindow = $(window).width();
			    if(widthWindow > 2800) {
			        myMap.setZoom(18);
			    } 
			    if(widthWindow < 2799) {
			        myMap.setZoom(17);
			    } 
			});  	

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map.svg',
				// Размеры метки.
				
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [10, -38]
			}),
			myMap.geoObjects.add(myPlacemark)
			myMap.behaviors.disable('scrollZoom');

			//на мобильных устройствах... (проверяем по userAgent браузера)
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
				//... отключаем перетаскивание карты
				myMap.behaviors.disable('drag');


				
			}
		}
	}


	
});

   


