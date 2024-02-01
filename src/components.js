import carousel from './blocks/carousel';
import flipCards from './blocks/flip-cards';
import flipCards3d from './blocks/flip-cards-3d';
import socialCards from './blocks/social-cards';

export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  editor.Components.addType('flip-cards', {
    model: {
      defaults: {
        script: flipCards.script,
        styles: flipCards.styles,
        components: flipCards.content
      }
    },
  });

  editor.Components.addType('flip-cards-3d', {
    model: {
      defaults: {
        script: flipCards3d.script,
        styles: flipCards3d.styles,
        components: flipCards3d.content
      }
    },
  });

  const carouselScript = function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
    script.onload = () => {
      const swiper = new Swiper('.swiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerGroup: 3,
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          }
        }
      });
    };
    document.body.appendChild(script);
  };

  editor.Components.addType('carousel', {
    model: {
      defaults: {
        script: carouselScript,
        styles: carousel.styles,
        components: carousel.content
      },
    }
  });

  editor.Components.addType('social-cards', {
    model: {
      defaults: {
        styles: socialCards.styles,
        components: socialCards.content,
      }
    },
  });

};
