import flipCards from './blocks/flip-cards/flip-cards';
import socialCards from './blocks/social-cards/social-cards';
import flipCards3d from './blocks/flip-cards-3d/flip-cards-3d';
import carousel from './blocks/carousel/carousel';

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('flip-cards', flipCards());
  bm.add('flip-cards3d', flipCards3d());
  bm.add('social-cards', socialCards());
  bm.add('carousel', carousel());
}
