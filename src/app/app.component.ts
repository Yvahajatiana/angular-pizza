import { AfterContentInit, Component, OnInit } from '@angular/core';

declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'angular-pizza';

  ngAfterContentInit(): void {
    AOS.init({
      duration: 800,
      easing: 'slide'
    });

    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll',
      horizontalOffset: 0,
      verticalOffset: 0
    });

    $.Scrollax();

    const fullHeight = function () {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
    };
    fullHeight();

    // loader
    const loader = function () {
      setTimeout(function () {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax();

    const carousel = function () {
      $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: [
          "<span class='ion-md-arrow-back'></span>",
          "<span class='ion-chevron-right'></span>"
        ],
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false
          }
        }
      });
      $('.carousel-work').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: true,
        navText: [
          '<span class="ion-ios-arrow-back">',
          '<span class="ion-ios-arrow-forward">'
        ],
        responsive: {
          0: {
            items: 1,
            stagePadding: 0
          },
          600: {
            items: 2,
            stagePadding: 50
          },
          1000: {
            items: 3,
            stagePadding: 100
          }
        }
      });
    };
    carousel();

    // scroll
    const scrollWindow = function () {
      $(window).scroll(function () {
        const $w = $(window),
          st = $w.scrollTop(),
          navbar = $('.ftco_navbar'),
          sd = $('.js-scroll-wrap');

        if (st > 150) {
          if (!navbar.hasClass('scrolled')) {
            navbar.addClass('scrolled');
          }
        }
        if (st < 150) {
          if (navbar.hasClass('scrolled')) {
            navbar.removeClass('scrolled sleep');
          }
        }
        if (st > 350) {
          if (!navbar.hasClass('awake')) {
            navbar.addClass('awake');
          }

          if (sd.length > 0) {
            sd.addClass('sleep');
          }
        }
        if (st < 350) {
          if (navbar.hasClass('awake')) {
            navbar.removeClass('awake');
            navbar.addClass('sleep');
          }
          if (sd.length > 0) {
            sd.removeClass('sleep');
          }
        }
      });
    };
    scrollWindow();

    const counter = function () {
      $('#section-counter').waypoint(
        function (direction: any) {
          if (
            direction === 'down' &&
            !$(this.element).hasClass('ftco-animated')
          ) {
            const comma_separator_number_step =
              $.animateNumber.numberStepFactories.separator(',');
            $('.number').each(function () {
              const $this = $(this),
                num = $this.data('number');
              console.log(num);
              $this.animateNumber(
                {
                  number: num,
                  numberStep: comma_separator_number_step
                },
                7000
              );
            });
          }
        },
        { offset: '95%' }
      );
    };
    counter();

    const contentWayPoint = function () {
      let iCounter = 0;
      $('.ftco-animate').waypoint(
        function (direction: any) {
          console.log(direction);

          if (
            direction === 'down' &&
            !$(this.element).hasClass('ftco-animated')
          ) {
            console.log(iCounter);
            iCounter++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {
              $('body .ftco-animate.item-animate').each(function (k: any) {
                console.log(k);
                const el = $(this);
                setTimeout(
                  function () {
                    const effect = el.data('animate-effect');
                    if (effect === 'fadeIn') {
                      console.log('animated');
                      el.addClass('fadeIn ftco-animated');
                    } else if (effect === 'fadeInLeft') {
                      el.addClass('fadeInLeft ftco-animated');
                    } else if (effect === 'fadeInRight') {
                      el.addClass('fadeInRight ftco-animated');
                    } else {
                      el.addClass('fadeInUp ftco-animated');
                    }
                    el.removeClass('item-animate');
                  },
                  k * 50,
                  'easeInOutExpo'
                );
              });
            }, 100);
          }
        },
        { offset: '95%' }
      );
    };
    contentWayPoint();

    // navigation
    const OnePageNav = function () {
      const smouthScroll = $(
        ".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']"
      );
      smouthScroll.on('click', function (e: any) {
        e.preventDefault();

        const hash = smouthScroll.hash,
          navToggler = $('.navbar-toggler');
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          700,
          'easeInOutExpo',
          function () {
            window.location.hash = hash;
          }
        );

        if (navToggler.is(':visible')) {
          navToggler.click();
        }
      });
      $('body').on('activate.bs.scrollspy', function () {
        console.log('nice');
      });
    };
    OnePageNav();
  }
}
