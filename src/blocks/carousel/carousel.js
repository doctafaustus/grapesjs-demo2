import styles from './carousel.scss';

export default function carousel() {
  return {
    label: 'Carousel',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve" width="30" height="30"><rect x="0" y="0" fill="none" width="30" height="30"/><g><path fill="none" d="M91.225,8.587h-0.178c0.063,0.07,0.121,0.143,0.177,0.217L91.225,8.587z"/></g><g><path d="M3.79,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H3.79c-0.989,0-1.79,0.802-1.79,1.79   v63.637C2,82.807,2.801,83.609,3.79,83.609z M8.741,23.132h13.38v53.736H8.741V23.132z"/><path d="M38.36,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H38.36   c-0.989,0-1.79,0.802-1.79,1.79v63.637C36.569,82.807,37.371,83.609,38.36,83.609z M43.31,23.132h13.38v53.736H43.31V23.132z"/><path d="M72.929,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.802-1.79-1.79-1.79h-23.28   c-0.989,0-1.79,0.802-1.79,1.79v63.637C71.139,82.807,71.941,83.609,72.929,83.609z M77.88,23.132h13.38v53.736H77.88V23.132z"/></g></svg>
    `,
    content: `
    <div class="block-carousel" style="margin:100px; padding:25px;">
      <style>${styles}</style>
      <div class="container">
        <h3>See it in action</h3>
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/j/d/n/jdnxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/z/t/n/ztnxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/b/p/i/bpixs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/p/i/n/pinxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/u/p/g/upgxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/5/o/i/5oixs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/o/a/i/oaixs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/4/u/n/4unxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/v/v/h/vvhxs65/normal.jpg"></li>
              <li class="glide__slide"><img src="https://assets.olapic-cdn.com/media/t/f/n/tfnxs65/normal.jpg"></li>
            </ul>
          </div>
    
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="|<">
              <svg class="navigation-wrapper__arrow-icon svelte-1mho6ob" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.612512 0.387512C0.125012 0.875012 0.125012 1.66251 0.612512 2.15001L5.46251 7.00001L0.612512 11.85C0.125012 12.3375 0.125012 13.125 0.612512 13.6125C1.10001 14.1 1.88751 14.1 2.37501 13.6125L8.11251 7.87501C8.60001 7.38751 8.60001 6.60001 8.11251 6.11251L2.37501 0.375012C1.90001 -0.099988 1.10001 -0.0999877 0.612512 0.387512Z"></path>
              </svg>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir="|>">
              <svg class="navigation-wrapper__arrow-icon svelte-1mho6ob" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.612512 0.387512C0.125012 0.875012 0.125012 1.66251 0.612512 2.15001L5.46251 7.00001L0.612512 11.85C0.125012 12.3375 0.125012 13.125 0.612512 13.6125C1.10001 14.1 1.88751 14.1 2.37501 13.6125L8.11251 7.87501C8.60001 7.38751 8.60001 6.60001 8.11251 6.11251L2.37501 0.375012C1.90001 -0.099988 1.10001 -0.0999877 0.612512 0.387512Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="powered-by">Powered by NATIVO</div>
      </div>
    </div>
    `

  };
}