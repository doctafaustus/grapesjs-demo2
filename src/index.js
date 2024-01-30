import loadComponents from './components';
import loadBlocks from './blocks';


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
      if (!component) return console.log('block not dropped');
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
};