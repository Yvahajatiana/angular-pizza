import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-pizza';

  ngOnInit(): void {
    $.Scrollax();

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
                  numberStep: comma_separator_number_step,
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

        var hash = smouthScroll.hash,
          navToggler = $('.navbar-toggler');
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
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
