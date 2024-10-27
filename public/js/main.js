$(document).ready(function () {

    //======< Scroll to top button >======

    var $scrollTop = $('.scroll-top');
    if ($scrollTop.length) {
        var toggleScrollTop = function () {
            $(window).scrollTop() > 100 ? $scrollTop.addClass('active') : $scrollTop.removeClass('active');
        };
        $(window).on('load', toggleScrollTop);
        $(document).on('scroll', toggleScrollTop);
    }

    $("#scrolltoTop").click(function () {
        $("html").animate({ scrollTop: 0 }, "slow");
    });

    //======< Img on hover title show >======

    $('img').hover(
        function() {
            var altText = $(this).attr('alt');
            $(this).attr('title', altText);
        },
        function() {
            $(this).removeAttr('title');
        }
    );

    // =======< accordion js >========
    $(".accordion > li:first").addClass("active").find("p").slideDown();
    $('.accordion li').on('click', function () {
        var dropDown = $(this).find("p");

        $(this).closest(".accordion").find("p").not(dropDown).slideUp();

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(this).closest(".accordion").find("li.active").removeClass("active");
            $(this).addClass("active");
        }

        dropDown.stop(false, true).slideToggle();
    });

    // =======< Mobile Menu js >========

    function popupMobileMenu() {
    if (window.matchMedia('(max-width: 1199px)').matches) {
        $('.hamberger-button').on('click', function () {
            $('.popup-mobile-menu').addClass('active');
        });

        $('.close-menu').on('click', function () {
            $('.popup-mobile-menu').removeClass('active');
            $('.popup-mobile-menu .mainmenu .has-droupdown > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400');
            $('.popup-mobile-menu .mainmenu .has-droupdown > a').removeClass('open');
        });

        $('.popup-mobile-menu .mainmenu .has-droupdown > a').on('click', function (e) {
            e.preventDefault();
            $(this).closest('.mainmenu, .submenu, .rn-megamenu').find('.has-droupdown > a').not(this).siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400');
            $(this).closest('.mainmenu, .submenu, .rn-megamenu').find('.has-droupdown > a').not(this).removeClass('open');

            let $submenu = $(this).siblings('.submenu, .rn-megamenu');
            if ($submenu.hasClass('active')) {
                $submenu.removeClass('active').slideUp('400');
                $(this).removeClass('open');
            } else {
                $submenu.addClass('active').slideDown('400');
                $(this).addClass('open');
            }
        });

        $('.popup-mobile-menu').on('click', function (e) {
            if (e.target === this) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a').siblings('.submenu, .rn-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-droupdown > a').removeClass('open');
            }
        });
    }
}

popupMobileMenu();

$(window).resize(function() {
    $('.hamberger-button').off('click');
    $('.close-menu').off('click');
    $('.popup-mobile-menu .mainmenu .has-droupdown > a').off('click');
    $('.popup-mobile-menu').off('click');
    popupMobileMenu();
});

//======< Domain search form on click open button >======

const formDomainSearchButton = $('.form-domain-search-button');
const formDomainSearchHeader = $('.form-domain-search-header');
const closeDomainSearchHeader = $('.close-domain-search-button');

formDomainSearchButton.on('click', function() {
    formDomainSearchHeader.addClass('active');
});

closeDomainSearchHeader.on('click', function() {
    formDomainSearchHeader.removeClass('active');
});

//======< Tabing Items >======

$('.tabs .items .item').click(function() {
    $('.tabs .items .item').removeClass('active');
    $(this).addClass('active');
    var tabNumber = $(this).data('tab');
    $('.contents .item').removeClass('active');
    $('.contents .item[data-content="' + tabNumber + '"]').addClass('active');
});
$('.tabs .items .item').first().trigger('click');

//======< Plan Slide In Mobile Screen >======

let currentSlide = 0;
let startX, endX;

function updateButtons() {
    if (currentSlide === 0) {
        $('#Planslideprev').hide();
    } else {
        $('#Planslideprev').show();
    }
    
    if (currentSlide === getTotalSlides() - 1) {
        $('#Planslidenext').hide();
    } else {
        $('#Planslidenext').show();
    }
}

function getTotalSlides() {
    return $('.plans-columns-slide .col-12:visible').length;
}

if ($(window).width() < 575) {
    createPagination();
    updatePagination();
    updateButtons();

    $('#Planslidenext').click(function() {
        if (currentSlide < getTotalSlides() - 1) {
            currentSlide++;
            updateSlidePosition();
            updatePagination();
            updateButtons();
        }
    });

    $('#Planslideprev').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlidePosition();
            updatePagination();
            updateButtons();
        }
    });

    $('.planslidedot').click(function() {
        currentSlide = $(this).index();
        updateSlidePosition();
        updatePagination();
        updateButtons();
    });

    $('.plans-columns-slide').on('touchstart', function(event) {
        startX = event.originalEvent.touches[0].pageX;
    });

    $('.plans-columns-slide').on('touchmove', function(event) {
        endX = event.originalEvent.touches[0].pageX;
    });

    $('.plans-columns-slide').on('touchend', function() {
        if (startX - endX > 50) {
            if (currentSlide < getTotalSlides() - 1) {
                currentSlide++;
                updateSlidePosition();
                updatePagination();
                updateButtons();
            }
        } else if (endX - startX > 50) {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlidePosition();
                updatePagination();
                updateButtons();
            }
        }
    });
}

function updateSlidePosition() {
    const newLeft = -currentSlide * 100 + 'vw';
    $('.plans-columns-slide').css('transform', `translateX(${newLeft})`);
}

function createPagination() {
    for (let i = 0; i < getTotalSlides(); i++) {
        $('#planslidepagination').append('<span class="planslidedot"></span>');
    }
}

function updatePagination() {
    $('.planslidedot').removeClass('active');
    $('.planslidedot').eq(currentSlide).addClass('active');
}

//======< Sitelock Testimonilas >======


new Swiper('.testimonials', {
    speed: 1000,
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  // Map Location Active
  const listItems = document.querySelectorAll(".data-center__location");
  listItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      item.classList.add("active");
      listItems.forEach(function (sibling) {
        if (sibling !== item) {
          sibling.classList.remove("active");
        }
      });
    });
  });

});

