$(document).ready(function () {

	// 線上購票 - 置頂消失
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('#TicketTop').fadeIn(300);
		} else {
			$('#TicketTop').fadeOut(300);
		}
	});

	// header - 滾輪往下滑顯示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 78) {
			$('#header').removeClass("header_top");
		} else {
			$('#header').addClass("header_top");
		}
	});

	// header - 將下滑的導覽列變成fixed
	if ($('.header_top').length = 0) { // 就表示沒有.header_top這個class
		$('.header_top').css('position', 'relative');
	} else {
		$('#header').css('position', 'fixed');
	}

	// 最新消息-頁籤切換
	$("a.change_btn").on("click", function (e) {
		e.preventDefault();

		$(this).addClass("-on");
		$(this).parent().siblings().find('a').removeClass("-on");

		$("div.tab").removeClass("-on");
		$("div.tab." + $(this).attr("data-target")).addClass("-on");
	});

	// 特色魅力RWD - 摺疊選單
	$('.collapsible').click(function () {
		$(this).toggleClass('active');
		$(this).siblings().slideToggle();

		$(this).parent().siblings().find('.collapsible').removeClass('active');
		$(this).parent().siblings().find('.content').slideUp();
	});


});


"use strict";

// 魅力特色 RWD - GASP套件
ScrollTrigger.matchMedia({

	// 如果畫面的大小 > 992px 就執行以下程式碼
	"(min-width: 992px)": () => {
		ScrollTrigger.defaults({
			markers: false
		})

		var points = gsap.utils.toArray('.point');
		var indicators = gsap.utils.toArray('.indicator');
		var height = 200 * points.length;

		gsap.set('.indicators', { display: "flex" });
		var tl = gsap.timeline({

			defaults: {
				ease: "back.inOut(6)"
			},
			duration: points.length,
			scrollTrigger: {
				trigger: ".feature",
				start: "top center",
				end: "+=" + height + "%",
				scrub: true,
				id: "points",
			}
		})

		var pinner = gsap.timeline({

			defaults: {
				ease: "back.inOut(6)"
			},
			scrollTrigger: {
				trigger: ".feature",
				start: "-42px top",
				end: "+=" + height + "%",
				scrub: true,
				pin: ".feature",
				pinSpacing: true,
				id: "pinning",
				markers: false //參考線關掉
			}
		})

		points.forEach(function (elem, i) {
			gsap.set(elem, { position: "absolute", top: 0 });

			tl.from(elem.querySelector('.right_box'), { autoAlpha: 0, translateY: 0, }, i)
			tl.from(elem.querySelector('.left_box'), { autoAlpha: 0 }, i)

			if (i != points.length - 1) {
				tl.to(elem.querySelector('.left_box'), { autoAlpha: 0 }, i + 0.75)
				tl.to(elem.querySelector('.right_box'), { autoAlpha: 0 }, i + 0.75)
			}
		});

	},
	
});
