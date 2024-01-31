import styles from './flip-cards-3d.scss';

export default function flipCards3d() {
  return {
    label: '3D Flip Cards',
    media: `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve" width="30" height="30"><rect x="0" y="0" fill="none" width="30" height="30"/><g><path fill="none" d="M91.225,8.587h-0.178c0.063,0.07,0.121,0.143,0.177,0.217L91.225,8.587z"/></g><g><path d="M3.79,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H3.79c-0.989,0-1.79,0.802-1.79,1.79   v63.637C2,82.807,2.801,83.609,3.79,83.609z M8.741,23.132h13.38v53.736H8.741V23.132z"/><path d="M38.36,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.801-1.79-1.79-1.79H38.36   c-0.989,0-1.79,0.802-1.79,1.79v63.637C36.569,82.807,37.371,83.609,38.36,83.609z M43.31,23.132h13.38v53.736H43.31V23.132z"/><path d="M72.929,83.609h23.28c0.989,0,1.79-0.802,1.79-1.79V18.182c0-0.989-0.802-1.79-1.79-1.79h-23.28   c-0.989,0-1.79,0.802-1.79,1.79v63.637C71.139,82.807,71.941,83.609,72.929,83.609z M77.88,23.132h13.38v53.736H77.88V23.132z"/></g></svg>
    `,
    content: `
      <div class="block-flip-cards-3d" style="margin:100px; padding:25px;">
        <style>${styles}</style>
        <div class="wrapper">
          <div class="card">
            <div class="content">
              <div class="front" style="background-image: url('https://ntvassets-a.akamaihd.net/47DA11690F9F49E888078C706AB715D9.jpg')">
                <div class="inner">
                  <h2>Embassy Suites Golf Resort</h2>
                  <div class="rating">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                  </div>
                  <button class="details-btn button">Details</button>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <div class="info">
                    <span>5</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                      <span>people</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>3</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>2</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>1</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                  </div>
                  <div class="location">
                    Greenville, SC
                  </div>
                  <div class="price">
                    38€ / day
                  </div>
                  <button class="back-btn button return">
                    <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <input class="more" id="card2" type="checkbox">
            <div class="content">
              <div class="front" style="background-image: url('https://ntvassets-a.akamaihd.net/D7E9791C8CEA48438053E7698361180F.jpg')">
                <div class="inner">
                  <h2>Homewood Suites Downtown Cary</h2>
                  <div class="rating">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651107/star-half-alt-solid_l1f1r1.jpg?_s=public-apps">
                  </div>
                  <button class="details-btn button">Details</button>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <div class="info">
                    <span>4</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                      <span>people</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>3</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>2</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>1</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas fuga odio vel veniam eveniet, explicabo autem earum?</p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                      <li>Lorem ipsum dolor sit amet consectetur.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </div>
                  <div class="location">
                    Cary, NC
                  </div>
                  <div class="price">
                    42€ / day
                  </div>
                  <button class="back-btn button return">
                    <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <input class="more" id="card3" type="checkbox">
            <div class="content">
              <div class="front" style="background-image: url('https://ntvassets-a.akamaihd.net/37950159B6504FC4AD96E1E78018D50E.jpg')">
                <div class="inner">
                  <h2>Aloft Downtown Chicago</h2>
                  <div class="rating">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651099/star-solid_tstpkw.jpg?_s=public-apps">
                    <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706651107/star-half-alt-solid_l1f1r1.jpg?_s=public-apps">
                  </div>
                  <button class="details-btn button">Details</button>
                </div>
              </div>
              <div class="back">
                <div class="inner">
                  <div class="info">
                    <span>8</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648966/users-solid_1_wemlhr.jpg?_s=public-apps">
                      <span>people</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>3</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/door-open-solid_1_gwyqjp.jpg?_s=public-apps"> <span>rooms</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>2</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bed-solid_1_thmcy7.jpg?_s=public-apps"> <span>beds</span>
                    </div>
                  </div>
                  <div class="info">
                    <span>1</span>
                    <div class="icon">
                      <img src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706648965/bath-solid_1_nremr4.jpg?_s=public-apps"> <span>bath</span>
                    </div>
                  </div>
                  <div class="description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore, temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut facilis laudantium nam!</p>
                    <p>Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt, repudiandae aspernatur explicabo numquam! Tenetur!</p>
                  </div>
                  <div class="location">
                    Chicago, IL
                  </div>
                  <div class="price">
                    60€ / day
                  </div>
                  <button class="back-btn button return">
                    <img class="cta-arrow" src="https://res.cloudinary.com/dzynqn10l/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706649369/Msc/wp9xsybfcxgn1itfa2hg.jpg?_s=public-apps">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  };
}

