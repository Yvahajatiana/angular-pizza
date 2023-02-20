import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective implements OnInit, AfterViewInit {
  iCounter = 0;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll(): void {
    console.log('event from window');
  }

  ngAfterViewInit() {
    const options = {
      rootMargin: '0px',
      threshold: 0.2
    };
    const observer = new IntersectionObserver(
      this.animateElement.bind(this),
      options
    );
    observer.observe(this.elementRef.nativeElement);
  }

  animateElement(entries: any[]) {
    entries.forEach((entry: any) => {
      if (
        //entry.intersectionRatio > 0 &&
        true
      ) {
        this.iCounter++;
        //entry.target.classList.add('item-animate');
        this.elementRef.nativeElement
          .querySelectorAll('.ftco-animate')
          .forEach((el: any) => {
            setTimeout(() => {
              //entry.target.classList.remove('item-animate');
              //entry.target.classList.add('ftco-animated');
              this.renderer.addClass(el, 'ftco-animated');
              this.renderer.removeClass(el, 'ftco-animate');
            }, 100);
          });

        /*
        setTimeout(() => {
          document
            .querySelectorAll('.ftco-animate.item-animate')
            .forEach((el, i) => {
              console.log(i);
              setTimeout(
                () => {
                  const effect = el.getAttribute('data-animate-effect');
                  console.log(effect);
                  if (effect === 'fadeIn') {
                    console.log('animated');
                    el.classList.add('fadeIn', 'ftco-animated');
                  } else if (effect === 'fadeInLeft') {
                    el.classList.add('fadeInLeft', 'ftco-animated');
                  } else if (effect === 'fadeInRight') {
                    el.classList.add('fadeInRight', 'ftco-animated');
                  } else {
                    el.classList.add('fadeInUp', 'ftco-animated');
                  }
                  el.classList.remove('item-animate');
                },
                i * 50,
                'easeInOutExpo'
              );
            });
        }, 100);*/
      }
    });
  }
}
