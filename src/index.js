import loadComponents from './components';
import loadBlocks from './blocks';
// import Glide from '@glidejs/glide';


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


    // editor.on('block:drag:stop', (component, block) => {
    //   if (!component) return;
    //   if (block?.id !== 'carousel') return;

    //   const gjsDoc = editor.Canvas.getDocument();
    //   const glideEls = gjsDoc.querySelectorAll('.glide');

    //   if (!glideEls.length) return console.error('No glide root element found');

    //   const editorWindow = glideEls[0].ownerDocument.defaultView;
    //   console.log('editorWindow', editorWindow);
    //   console.log('editorWindow.Glide', editorWindow.Glide);
    //   console.log('window.Glide', window.Glide);


    //   const config = {
    //     type: 'carousel',
    //     perView: 3,
    //     gap: 20
    //   };

    //   glideEls.forEach(glideEl => {
    //     new editorWindow.Glide(glideEl, config).mount();
    //   });
    // });
};