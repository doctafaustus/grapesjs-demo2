import styles from './social-cards.scss';

export default function socialCards() {
  return {
    label: 'Social Cards',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve" width="30" height="30"><rect x="0" y="0" fill="none" width="30" height="30"/><g><path fill="none" d="M91.225,8.587h-0.178c0.063,0.07,0.121,0.143,0.177,0.217L91.225,8.587z"/></g><g><path d="M3.79,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H3.79c-0.989,0-1.79,0.802-1.79,1.79   v63.637C2,82.807,2.801,83.609,3.79,83.609z M8.741,23.132h13.38v53.736H8.741V23.132z"/><path d="M38.36,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H38.36   c-0.989,0-1.79,0.802-1.79,1.79v63.637C36.569,82.807,37.371,83.609,38.36,83.609z M43.31,23.132h13.38v53.736H43.31V23.132z"/><path d="M72.929,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.802-1.79-1.79-1.79h-23.28   c-0.989,0-1.79,0.802-1.79,1.79v63.637C71.139,82.807,71.941,83.609,72.929,83.609z M77.88,23.132h13.38v53.736H77.88V23.132z"/></g></svg>
    `,
    content: `
      <div class="social-cards" style="margin:100px; padding:25px;">
        <style>${styles}</style>
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643414/Msc/linkedin-brands_xmow0o.jpg?_s=public-apps">
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3><a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_nativodev</a></h3>
                <p>This is where I network and build my professional protfolio.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643416/Msc/twitter-square-brands_tzgscq.jpg?_s=public-apps">
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3><a href="https://twitter.com/AdamDipinto" target="_blank">@NativoDev</a></h3>
                <p>This is where I read news and network with different social groups.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706643419/Msc/github-square-brands_risdsz.jpg?_s=public-apps">
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3><a href="https://github.com/atom888" target="_blank">@nativoDev</a></h3>
                <p>This is where I share code and work on projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  };
}
