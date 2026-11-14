import './styles.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root not found');
}

(() => {
if (window.location.pathname !== '/birthday') {
  app.innerHTML = `
    <main class="portal">
      <div class="portal-noise"></div>
      <div class="portal-top"><span>V<span class="portal-dot">.</span></span><span>19 · 11 · 2026</span></div>
      <div class="portal-scene" id="portal-scene" aria-label="An animated three-dimensional birthday keepsake for Veee">
        <div class="portal-aura"></div>
        <div class="portal-orbit portal-orbit-a"></div>
        <div class="portal-orbit portal-orbit-b"></div>
        <div class="portal-orbit portal-orbit-c"></div>
        <div class="portal-heart" aria-hidden="true"><span>♥</span></div>
        <div class="portal-photo">
          <img src="https://i.ibb.co/jPcfZ6nH/aa3ed03d-f15c-4873-902f-c780b8a308c5.jpg" alt="Veee">
          <div class="portal-photo-glint"></div>
        </div>
        <div class="portal-number">XX</div>
        <span class="portal-star star-one">✦</span>
        <span class="portal-star star-two">✧</span>
        <span class="portal-star star-three">✳</span>
        <span class="portal-caption caption-one">A RARE KIND OF PRETTY</span>
        <span class="portal-caption caption-two">MADE FOR VEEE · EST. 2006</span>
      </div>
      <div class="portal-bottom">
        <p class="portal-eyebrow">A LITTLE BIRTHDAY UNIVERSE</p>
        <h1>For <em>Veee.</em></h1>
        <a class="portal-enter" href="/birthday">Step inside <span>↗</span></a>
        <p class="portal-footnote">P.S. TWENTY LOOKS A LITTLE TOO GOOD ON YOU.</p>
      </div>
    </main>
  `;
  const scene = document.querySelector<HTMLElement>('#portal-scene');
  scene?.addEventListener('pointermove', (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    scene.style.setProperty('--tilt-x', `${y * -9}deg`);
    scene.style.setProperty('--tilt-y', `${x * 12}deg`);
  });
  scene?.addEventListener('pointerleave', () => {
    scene.style.setProperty('--tilt-x', '0deg');
    scene.style.setProperty('--tilt-y', '0deg');
  });
  return;
}

app.innerHTML = `
  <main class="site-shell">
    <div class="grain"></div>
    <nav class="topbar">
      <a class="wordmark" href="/">V<span>•</span></a>
      <span class="top-note">A LITTLE SOMETHING FOR YOU</span><a class="top-note" href="/" style="text-decoration:none">← BACK TO THE INTRO</a>
      <span class="top-date">19 / 11 / 26</span>
    </nav>

    <section class="hero hero-3d" id="top">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> A VERY VEEE KIND OF DAY</p>
        <p class="hero-kicker">THE WORLD GOT LUCKY</p>
        <h1>Twenty.<br><em>And trouble.</em></h1>
        <p class="hero-sub">A little older, a lot more iconic.<br>Still making it very difficult to play it cool.</p>
        <button class="primary-btn" id="open-surprise">Enter your birthday world <span>↗</span></button>
        <p class="tiny-note">Made for Veee. Obviously.</p>
      </div>
      <div class="hero-art hero-stage" id="hero-stage">
        <div class="stage-glow"></div>
        <div class="stage-ring ring-back"></div>
        <div class="stage-ring ring-front"></div>
        <div class="heart-3d" aria-hidden="true">♥</div>
        <div class="hero-photo-frame">
          <img src="https://i.ibb.co/jPcfZ6nH/aa3ed03d-f15c-4873-902f-c780b8a308c5.jpg" alt="Veee smiling" class="hero-photo">
          <div class="photo-stamp">20<br>LOOKING<br>GOOD <span>✳</span></div>
        </div>
        <div class="floating-tag tag-top">THE MAIN CHARACTER</div>
        <div class="floating-tag tag-bottom">PRETTY. AND SHE KNOWS IT.</div>
        <span class="spark spark-a">✳</span><span class="spark spark-b">✦</span>
      </div>
      <div class="hero-bottom"><span>SCROLL A LITTLE</span><span>♡ &nbsp; MADE WITH A LITTLE TOO MUCH THOUGHT</span></div>
    </section>

    <section class="birthday-strip">
      <div><span class="strip-label">THE DATE</span><strong>19<sup>TH</sup> NOVEMBER</strong></div>
      <p>Twenty already? Look who's now an oldie. 😂<br><em>Don't worry, Veee. You're ageing ridiculously well.</em></p>
      <span class="strip-heart">♥</span>
    </section>

    <section class="gallery-section section-pad" id="moments">
      <div class="section-heading">
        <p class="eyebrow">01 / EVIDENCE</p>
        <h2>Unfairly<br><em>pretty.</em></h2>
        <p class="section-intro">I was going to play it cool. Then you went and looked like this.</p>
      </div>
      <div class="gallery-grid">
        <figure class="gallery-large">
          <img src="https://i.ibb.co/zKzSxDR/cde34d54-fc5f-48d5-8a37-3ef2e6c1d300.jpg" alt="Veee dressed beautifully outdoors">
          <figcaption><span>THE LOOK</span><span>10/10. NO NOTES.</span></figcaption>
        </figure>
        <div class="gallery-aside">
          <div class="aside-quote">“Some people just have a face you want to look at for an unnecessarily long time.”</div>
          <figure class="gallery-small">
            <img src="https://i.ibb.co/jPcfZ6nH/aa3ed03d-f15c-4873-902f-c780b8a308c5.jpg" alt="A close-up portrait of Veee">
            <figcaption>AND THEN THERE'S THIS FACE. ♡</figcaption>
          </figure>
        </div>
      </div>
      <div class="gallery-more">
        <figure><img src="https://i.ibb.co/8SJJmcq/e67482e3-6f77-4fd6-ae44-32caf9655233.jpg" alt="Another lovely Veee moment"><figcaption>THE BIRTHDAY GIRL, AGAIN. ♡</figcaption></figure>
        <figure><img src="https://i.ibb.co/nNHTfB1J/d6f141a0-999d-47dc-9df8-de6c1afff3a1.jpg" alt="One more Veee portrait"><figcaption>YES, WE GET IT. YOU'RE PRETTY. 😌</figcaption></figure>
      </div>
    </section>

    <section class="tease-section section-pad">
      <p class="eyebrow">02 / A FEW OBSERVATIONS</p>
      <h2>Things you do<br>without even <em>trying.</em></h2>
      <div class="tease-cards">
        <article class="tease-card"><span>01</span><div class="tease-icon">✳</div><h3>That smile.</h3><p>Honestly? A public distraction. Something should be done.</p></article>
        <article class="tease-card"><span>02</span><div class="tease-icon">♡</div><h3>That energy.</h3><p>You make ordinary moments feel like they have a plot.</p></article>
        <article class="tease-card"><span>03</span><div class="tease-icon">✦</div><h3>Being you.</h3><p>Effortlessly. Annoyingly. Very, very well.</p></article>
      </div>
    </section>

    <section class="letter-section section-pad" id="letter">
      <div class="letter-card">
        <div class="letter-top"><span>PERSONAL. DO NOT FORWARD. 😉</span><span>03 / THE NOTE</span></div>
        <div class="letter-content">
          <p class="eyebrow">DEAR VEEE,</p>
          <h2>A little birthday<br><em>confession.</em></h2>
          <p class="letter-preview">I could write a whole speech about how lovely you are, but let's not pretend you need more reasons to be feeling yourself...</p>
          <button class="outline-btn" id="reveal-letter">Okay, tell me more <span>↓</span></button>
          <div class="hidden-letter" id="hidden-letter" hidden>
            <p>Happy birthday, Veee. ❤️</p>
            <p>I hope this new year brings you the kind of happiness that sneaks up on you, the kind of wins you can hardly believe, and plenty of reasons to smile that ridiculously pretty smile.</p>
            <p>And since we're being honest, I think you're rather lovely. A little too lovely, actually. You have this way of making me curious to know more about you, and I won't even pretend I'm not enjoying that.</p>
            <p>So here's to you: your softness, your sparkle, your mischief, and all the beautiful things still waiting to find you.</p>
            <p class="signoff">Enjoy your day, trouble.<br><em>Someone who thinks you're worth the extra effort. ♡</em></p>
          </div>
        </div>
        <div class="letter-flower">✳</div>
      </div>
    </section>

    <section class="play-section section-pad">
      <p class="eyebrow">04 / A VERY IMPORTANT QUESTION</p>
      <h2>So, birthday girl…<br><em>what's the verdict?</em></h2>
      <p class="play-copy">Was this cute, or should I be embarrassed that I put this much effort into being charming?</p>
      <div class="choice-row">
        <button class="choice-btn" data-choice="Cute. You did well.">Cute. You did well. ♡</button>
        <button class="choice-btn" data-choice="You're still trouble.">You're still trouble. 😏</button>
      </div>
      <p class="choice-response" id="choice-response" aria-live="polite"></p>
    </section>

    <footer class="footer">
      <div class="footer-star">✳</div>
      <p class="eyebrow">HAPPY 20TH BIRTHDAY, VEEE</p>
      <h2>Keep being<br><em>unforgettable.</em></h2>
      <p class="footer-date">20 YEARS YOUNG · 19 NOVEMBER 2026 · WITH AFFECTION & A LITTLE MISCHIEF</p>
      <span class="footer-heart">♡</span>
    </footer>
  </main>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
`;

const toast = document.querySelector<HTMLDivElement>('#toast');
const showToast = (message: string) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 2600);
};

document.querySelector('#open-surprise')?.addEventListener('click', () => {
  document.querySelector('#moments')?.scrollIntoView({ behavior: 'smooth' });
  showToast('You have excellent taste in birthday surprises. ♡');
});

const heroStage = document.querySelector<HTMLElement>('#hero-stage');
heroStage?.addEventListener('pointermove', (event) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const bounds = heroStage.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  const photo = heroStage.querySelector<HTMLElement>('.hero-photo-frame');
  if (photo) photo.style.transform = `rotateY(${-12 + x * 12}deg) rotateX(${y * -8}deg) rotateZ(3deg) translateZ(75px)`;
});
heroStage?.addEventListener('pointerleave', () => {
  const photo = heroStage.querySelector<HTMLElement>('.hero-photo-frame');
  if (photo) photo.style.transform = '';
});

document.querySelector('#reveal-letter')?.addEventListener('click', event => {
  const button = event.currentTarget as HTMLButtonElement;
  const letter = document.querySelector<HTMLDivElement>('#hidden-letter');
  if (!letter) return;
  const opening = letter.hidden;
  letter.hidden = !opening;
  button.innerHTML = opening
    ? 'That was sweet, right? <span>↑</span>'
    : 'Okay, tell me more <span>↓</span>';
});

document.querySelectorAll<HTMLButtonElement>('.choice-btn').forEach(button => {
  button.addEventListener('click', () => {
    const response =
      document.querySelector<HTMLParagraphElement>('#choice-response');
    if (response) {
      response.textContent =
        button.dataset.choice === 'Cute. You did well.'
          ? 'I’ll accept the compliment. For now. 😉'
          : 'Guilty. And I fear this is not the last you’ll hear of me. 😌';
    }
  });
});
})();
