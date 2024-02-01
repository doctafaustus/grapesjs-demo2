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
    script.src = 'https://github.com/glidejs/glide/releases/download/v3.6.1/glide.min.js';
    script.onload = () => {

      console.log('Glide', Glide);
      console.log('document', document.querySelector('.glide'))

      const config = {
        type: 'carousel',
        perView: 3,
        gap: 20
      };  

      new Glide(document.querySelector('.glide'), config).mount();
      // const config = {
      //   type: 'carousel',
      //   perView: 3,
      //   gap: 20
      // };  

      // const glideEl = this.querySelector('.glide');
      // console.log('glideEl', glideEl)

      // new Glide(glideEl, config).mount();

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
    },
    view: {
      onRender() {
        console.log('redner', this)

      }
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
