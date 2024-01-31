import loadComponents from './components';
import loadBlocks from './blocks';
import Glide from '@glidejs/glide';


export default (editor, opts = {}) => {
  const options = { ...{
    
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
  

  // TODO Remove
  editor.on('load', () =>
    editor.addComponents(
      `<div style="margin:100px; padding:25px;">
          Content loaded from the plugin
      </div>`,
      { at: 0 }
    ));



    editor.on('block:drag:stop', (component, block) => {
      if (!component) return;
      if (block?.id !== 'flip-cards') return;

      const gjsDoc = editor.Canvas.getDocument();
      const cardSideConfigBtns = gjsDoc.querySelectorAll('.card-side-config-btn');
      const cards = gjsDoc.querySelectorAll('.card');
      cardSideConfigBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          removePrevClasses();

          btn.classList.add('active');
          const cssClass = btn.dataset.config;
          cards.forEach(card => card.classList.add(cssClass));
        });
      });

      function removePrevClasses() {
        cardSideConfigBtns.forEach(btn => btn.classList.remove('active'));
        cards.forEach(card => {
          card.classList.remove('show-front', 'show-back');
        });
      }
    });

    editor.on('block:drag:stop', (component, block) => {
      if (!component) return;
      if (block?.id !== 'flip-cards3d') return;

      const gjsDoc = editor.Canvas.getDocument();
      const cards = gjsDoc.querySelectorAll('.block-flip-cards-3d .card');
      cards.forEach(card => {
        card.querySelector('.details-btn')?.addEventListener('click', () => {
          card.classList.add('flipped');
        });

        card.querySelector('.back-btn')?.addEventListener('click', () => {
          card.classList.remove('flipped');
        });
      });
    });

    editor.on('block:drag:stop', (component, block) => {
      if (!component) return;
      if (block?.id !== 'carousel') return;

      window.xxx = Glide;
      const gjsDoc = editor.Canvas.getDocument();
      const glideEls = gjsDoc.querySelectorAll('.glide');

      if (!glideEls.length) return console.error('No glide root element found');

      const config = {
        type: 'carousel',
        perView: 3,
        gap: 20
      };

      glideEls.forEach(glideEl => {
        new Glide(glideEl, config).mount();
      });
  
      // const slides = document.querySelectorAll('.glide__slide');
      // slides.forEach(slide => {
      //   slide.addEventListener('click', () => {
      //     console.log('test');
      //   });
      // });
    });
};