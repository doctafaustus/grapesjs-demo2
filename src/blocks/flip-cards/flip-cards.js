import styles from './flip-cards.scss';

export default function flipCards() {
  return {
    label: 'Flip Cards',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve" width="30" height="30"><rect x="0" y="0" fill="none" width="30" height="30"/><g><path fill="none" d="M91.225,8.587h-0.178c0.063,0.07,0.121,0.143,0.177,0.217L91.225,8.587z"/></g><g><path d="M3.79,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H3.79c-0.989,0-1.79,0.802-1.79,1.79   v63.637C2,82.807,2.801,83.609,3.79,83.609z M8.741,23.132h13.38v53.736H8.741V23.132z"/><path d="M38.36,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H38.36   c-0.989,0-1.79,0.802-1.79,1.79v63.637C36.569,82.807,37.371,83.609,38.36,83.609z M43.31,23.132h13.38v53.736H43.31V23.132z"/><path d="M72.929,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.802-1.79-1.79-1.79h-23.28   c-0.989,0-1.79,0.802-1.79,1.79v63.637C71.139,82.807,71.941,83.609,72.929,83.609z M77.88,23.132h13.38v53.736H77.88V23.132z"/></g></svg>
    `,
    content: `
    <div class="block-flip-cards" style="margin:100px; padding:25px;">
      <style>${styles}</style>
      <div class="card-side-config" style="display: none;" data-gjs-editable="false">
        <button class="card-side-config-btn" data-config="show-front">
          Edit card front
        </button>
        <button class="card-side-config-btn" data-config="show-back">
          Edit card back
        </button>
        <button class="card-side-config-btn" data-config="allow-flip">
          Allow flip
        </button>
      </div>
      <section class="section-plans" id="section-plans">
        <div class="card">
          <div class="card__side card__side--front">
            <img src="https://ntvassets-a.akamaihd.net/A10C8D7B855F432281DC351355FBF1AF.jpg">
            <h3>Whipped Body Butter</h3>
          </div>
          <div class="card__side card__side--back">
            <h3>Whipped Body Butter</h3>
            <h4>By Tarte</h4>
            <p>
              Indulge in the luxurious blend of nourishing ingredients as you pamper your skin with tarte's Whipped Body Butter, making it a heavenly bedtime ritual for unparalleled hydration.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card__side card__side--front">
            <img src="https://ntvassets-a.akamaihd.net/4DD91CB7584F4D2B81F74C0163F69A30.jpg">
            <h3>Mountain Herbal Body Moisturizer</h3>
          </div>
          <div class="card__side card__side--back">
            <h3>Mountain Herbal Body Moisturizer</h3>
            <h4>By Hempz</h4>
            <p>
              Experience the joy of holiday hydration with Hempz Vanilla Frost Mountain Herbal Body Moisturizer, leaving your skin smooth and infused with a festive essence.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card__side card__side--front">
            <img src="https://ntvassets-a.akamaihd.net/ADD936C2E9574798A2A80A9A2B4B6E98.jpg">
            <h3>Full-On Satin Lipstick</h3>
          </div>
          <div class="card__side card__side--back">
            <h3>Full-On Satin Lipstick</h3>
            <h4>By Buxom</h4>
            <p>
              Elevate your makeup routine with the seamless fusion of controlled precision application and vibrant color payoff, all achieved effortlessly in just one swipe.
            </p>
          </div>
        </div>
      </section>
    </div>
    `
  };
}