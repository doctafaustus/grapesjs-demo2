import flipCards from './blocks/flip-cards/flip-cards';
import socialCards from './blocks/social-cards/social-cards';

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('flip-cards', flipCards());
  bm.add('social-cards', socialCards());
}
