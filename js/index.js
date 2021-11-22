function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        effect: 'fade',
        speed: 1500,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },

        }
    })
}

function gallerySlider() {
    var swiper = new Swiper(".catalog-item .mySwiper", {
        spaceBetween: 6,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                spaceBetween: 4
            },
            768: {
                spaceBetween: 6
            },

        }
    });
    var swiper2 = new Swiper(".catalog-item .mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".catalog-item .swiper-button-next",
            prevEl: ".catalog-item .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}




$(document).ready(function() {
    cartCalc()
    gallerySlider()



    $('input[type="tel"]').mask('+7 999 9999999', { placeholder: '+7            ' });
    $(".custom-scroll").mCustomScrollbar();
    $(".custom-scroll-x").mCustomScrollbar({
        axis: "x",
        theme: "light-3",
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });

    $(".custom-select").niceSelect()


    if (window.innerWidth > 992) {
        $(".about__gallery-small").mCustomScrollbar();
    } else {
        // $(".about__gallery-small").mCustomScrollbar();
    }

    $(".header__catalog").click(function() {
        $(this).addClass("header__catalog--active")
        $(".header__menu").slideDown()
    })

    $(document).mouseup(function(e) {
        var div = $(".header__menu");
        clickOutsideElemnt(div, e)
    });

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header__menu"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.slideUp()
            $(".header__catalog").removeClass("header__catalog--active")
        }
    });

    $(".nav__item").hover(onIn, onOut);

    $(".header__search-icon").click(function() {
        $(".header__search").addClass("header__search--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header__search"); // тут указываем ID элемента
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".header__search").removeClass("header__search--active")
        }
    });

    $(".header__burger").click(function() {
        $(this).addClass("header__burger--active")
        $(".nav").show()
    })

    $(document).mouseup(function(e) {
        var div = $(".nav");
        if (window.innerWidth < 992) {
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                div.hide()
                $(".header__burger").removeClass("header__burger--active")
            }
        }
    });

    $(".nav__item-show").click(function() {
        if (window.innerWidth < 992) {
            $(this).toggleClass("nav__item-show--active")
        }
    })

    $(".footer__title-catalog").click(function() {
        $(this).toggleClass("footer__title--active")
        $(".footer__items-catalog").toggleClass("footer__items-catalog--active")
    })

    $(".footer__title-info").click(function() {
        $(this).toggleClass("footer__title--active")
        $(".footer__items").toggleClass("footer__items--active")
    })

    $(".catalog-index__search-hint").click(function() {
        let text = $(this).text()
        console.log(text)
        $(".catalog-index__search input").val(text)
    })

    $(".about__gallery-small-item").click(function() {
        let path = $(this).attr("data-tabs-path")
        let slidesNum = $(".about__gallery-big-item").length
        console.log(slidesNum)
        $(".about__gallery-small-item").removeClass("about__gallery-small-item--active")
        $(this).addClass("about__gallery-small-item--active")
        $(".about__gallery-big-item").removeClass("about__gallery-big-item--active")
        $(`.about__gallery-big-item[data-content-path="${path}"]`).addClass("about__gallery-big-item--active")
    })


    $(".about__gallery-next").click(function() {
        let path = parseInt($(".about__gallery-big-item--active").attr("data-content-path"))
        let slidesNum = $(".about__gallery-big-item").length
        if (path < slidesNum) {
            $(".about__gallery-big-item").removeClass("about__gallery-big-item--active")
            $(`.about__gallery-big-item[data-content-path="${path+1}"]`).addClass("about__gallery-big-item--active")
            $(".about__gallery-small-item").removeClass("about__gallery-small-item--active")
            $(`.about__gallery-small-item[data-tabs-path="${path+1}"]`).addClass("about__gallery-small-item--active")
            $(".about__gallery-prev").removeClass("about__gallery-disabled")
        } else if (path === slidesNum) {
            $(this).addClass("about__gallery-disabled")
        }
    })

    $(".about__gallery-prev").click(function() {
        let path = parseInt($(".about__gallery-big-item--active").attr("data-content-path"))
        if (path > 1) {
            $(".about__gallery-big-item").removeClass("about__gallery-big-item--active")
            $(`.about__gallery-big-item[data-content-path="${path-1}"]`).addClass("about__gallery-big-item--active")
            $(".about__gallery-small-item").removeClass("about__gallery-small-item--active")
            $(`.about__gallery-small-item[data-tabs-path="${path-1}"]`).addClass("about__gallery-small-item--active")
            $(".about__gallery-next").removeClass("about__gallery-disabled")
        } else if (path === 1) {
            $(this).addClass("about__gallery-disabled")
        }

    })

    $(".page-nav__top").click(function() {
        $(this).addClass("page-nav__top--active")
    })


    $(document).mouseup(function(e) {
        var div = $(".page-nav__items");
        if ($(".page-nav__top").hasClass("page-nav__top--active")) {
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $(".page-nav__top").removeClass("page-nav__top--active")
            }
        }
    });

    $(".catalog-nav__item-show").click(function() {
        $(this).toggleClass("catalog-nav__item-show--active")
    })

    $(".search__all").click(function() {
        $(this).hide()
        $(".catalog-cart__item").removeClass("catalog-cart__item--hide")
    })

})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}

function clickOutsideElemnt(div, e) {
    if (!div.is(e.target) &&
        div.has(e.target).length === 0) {
        div.hide();
    }
}

function cartCalc() {
    $('.ccalc .ccalc-minus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        if (a > 1) {
            let b = +a - 1;
            $(this).closest('.ccalc').find('input').val(b);
        } else {
            $(this).closest('.ccalc').find('input').val(a);
            $(this).addClass("disabled");
        }
    });
    $('.ccalc .ccalc-plus').click(function() {
        let a = $(this).closest('.ccalc').find('input').val();
        let b = +a + 1;
        $(this).closest('.ccalc').find('input').val(b);
        $(this).siblings(".ccalc-minus").removeClass("disabled");
    });
}