import flipCards from './blocks/flip-cards/flip-cards';

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('flip-cards', flipCards());
}
