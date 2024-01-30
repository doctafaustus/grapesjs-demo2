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
              <div class="card__title">
                <div class="card-title-container">
                  <img src="https://cdn-icons-png.flaticon.com/512/126/126412.png">
                </div>
                <h4 class="card__heading">Basic</h4>
              </div>
              <div class="card__details">
                <ul>
                  <li>1 Website</li>
                  <li>50 GB SSD Storage</li>
                  <li>Unmetered Bandwidth</li>
                  <li>Free SSL Certificate</li>
                  <li>1 Included Domain</li>
                  <li>1 Included Domain</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$2.95/mo*</p>
                </div><a class="btn btn--white" href="#popup">Select</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__title">
                <div class="card-title-container">
                  <img src="https://cdn-icons-png.flaticon.com/512/126/126412.png">
                </div>
                <h4 class="card__heading">Plus</h4>
              </div>
              <div class="card__details">
                <ul>
                  <li>Includes Basic Package Features</li>
                  <li>Unlimited Websites</li>
                  <li>Unlimited SSD Storage</li>
                  <li>Unlimited Domains</li>
                  <li>Unlimited Parked Domains</li>
                  <li>Unlimited Sub Domains</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$5.45/mo*</p>
                </div><a class="btn btn--white" href="#popup">Select</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__title">
                <div class="card-title-container">
                  <img src="https://cdn-icons-png.flaticon.com/512/126/126412.png">
                </div>
                <h4 class="card__heading">Pro</h4>
              </div>
              <div class="card__details">
                <ul>
                  <li>Includes Plus Plan Features</li>
                  <li>High Performance</li>
                  <li>2 Spam Experts</li>
                  <li>Free SSL Certificate</li>
                  <li>Domain Privacy</li>
                  <li>Site Backup - CodeGuard Basic</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$13.95/mo</p>
                </div><a class="btn btn--white" href="#popup">Select</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    `
  };
}