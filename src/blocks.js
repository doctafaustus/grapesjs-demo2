export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  editor.BlockManager.add('flip-cards-3d', {
    label: '3D Flip Cards',
    content: {
      type: 'flip-cards-3d',
    },
  });

  editor.BlockManager.add('flip-cards', {
    label: 'Flip Cards',
    content: {
      type: 'flip-cards',
    },
  });

  editor.BlockManager.add('carousel', {
    label: 'Carousel',
    content: {
      type: 'carousel',
    },
  });

  editor.BlockManager.add('social-cards', {
    label: 'Social Cards',
    content: {
      type: 'social-cards',
    },
  });
}
