/* Three visual treatments, one content source and one set of destinations. */
(() => {
  const L = window.LP;
  const register = 'https://app.buildyourstore.ai/register/';
  const origin = 'https://www.buildyourstore.ai';
  const paths = {
    'Shopify Website Builder': '/',
    'Winning Dropshipping Products': '/features/winning-dropshipping-products/',
    'High-Converting Pages': '/features/high-converting-product-pages/',
    'Free Domain': '/features/free-domain/',
    'AI-Built Shopify Themes': '/solutions',
    'Pet Stores': '/solutions/pet-stores/',
    'Electronics Stores': '/solutions/electronics-stores/',
    'Fashion and Beauty Stores': '/solutions/fashion-beauty-stores/',
    'Home and Garden Stores': '/solutions/home-garden-stores/',
    'Sports Stores': '/solutions/sports-stores/',
    'How to dropship on Shopify': '/blog/how-to-dropship-on-shopify/',
    'AI Dropshipping step-by-step guide': '/blog/how-ai-dropshipping-works/',
    'Shopify marketing guide': '/blog/shopify-marketing-guide/',
    'Shopify SEO guide': '/blog/how-to-improve-seo-on-shopify/',
    'How to start a Shopify store': '/blog/how-to-start-a-shopify-store/',
    'How does Shopify work?': '/blog/how-does-shopify-work/',
    'Shopify Theme Detector': '/shopify-theme-detector/',
    'Shopify Business Name Generator': '/shopify-business-name-generator/',
    'Blog': '/blog/', 'Glossary': '/glossary/', 'Success Stories': '/success-stories/',
    'Partners': '/partners/', 'Dropship with AutoDS': 'https://www.autods.com/',
    'AI Ad Generator': 'https://www.createugc.ai/', 'FAQ': '/faq/',
    'Privacy policy': '/privacy-policy/', 'Terms of service': '/terms/',
    'support@buildyourstore.ai': 'mailto:support@buildyourstore.ai'
  };
  const href = text => /^(https:|mailto:)/.test(paths[text]) ? paths[text] : origin + paths[text];
  const arrow = ARROW;
  const img = (name, alt = '', cls = '', eager = false) => `<img src="assets/${name}" alt="${alt}" class="${cls}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
  const cta = (className = '') => `<div class="cta-block ${className}"><a class="button primary" href="${register}">${L.cta}${arrow}</a><p class="cta-note">${L.ctaNote}</p></div>`;
  const groups = [L.footer.cols[0][1], L.footer.cols[1][1], ['Shopify Theme Detector', 'Shopify Business Name Generator', 'Blog']];
  const menus = L.nav.map((name, i) => `<details class="nav-group"><summary>${name}${CHEV}</summary><div class="dropdown">${groups[i].map(text => `<a href="${href(text)}">${text}</a>`).join('')}</div></details>`).join('');
  const header = `<header class="site-header"><div class="wrap header-inner"><a class="brand" href="${origin}/" aria-label="Build Your Store home">${img('bys-logo-white.svg', 'Build Your Store', '', true)}</a><nav class="desktop-nav" aria-label="Main navigation">${menus}<a href="${href('Glossary')}">Glossary</a></nav><div class="header-actions"><a class="login" href="https://app.buildyourstore.ai/login/">${L.login}</a><a class="button primary" href="${register}">${L.cta}${arrow}</a></div><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-navigation"><span></span><span></span></button></div><nav id="mobile-navigation" class="mobile-navigation" aria-label="Mobile navigation" hidden>${menus}<a href="${href('Glossary')}">Glossary</a><a href="https://app.buildyourstore.ai/login/">${L.login}</a><a href="${register}" class="button primary">${L.cta}${arrow}</a></nav></header>`;
  const heroPost = document.body.dataset.concept === 'a'
    ? L.hero.post.replace(/(\S+)$/, '<span class="headline-ending">$1<span class="hero-cursor" aria-hidden="true"></span></span>')
    : L.hero.post;
  const modularStore = `<div class="hero-composition" role="img" aria-label="A black store theme with a modular product grid, a cursor, and an illustrative rising sales chart">
    <div class="hero-black-store" aria-hidden="true">
      <div class="hero-store-browser"><span><i></i><i></i><i></i></span><span>studio.store</span><span></span></div>
      <div class="hero-store-nav"><b>STUDIO</b><span>Collection &nbsp; About</span><span>Bag (0)</span></div>
      <div class="hero-store-banner"><div><span>THE NEW EDIT</span><strong>Less,<br>but better.</strong><span class="hero-store-link">Explore collection ↗</span></div>${img('product/fashion-banner.webp', '', '', true)}</div>
      <div class="hero-store-grid"><div>${img('product/fashion-product-1.webp', '', '', true)}<span>Essentials</span></div><div>${img('product/fashion-product-2.webp', '', '', true)}<span>New season</span></div><div>${img('product/fashion-banner.webp', '', '', true)}<span>The edit</span></div></div>
      <svg class="hero-small-pointer" width="40" height="52" viewBox="0 0 20 26" fill="none"><path d="M2 2v20l5-5 4 8 4-2-4-8h7L2 2Z" fill="#DCC09C" stroke="#171717" stroke-width="1.5" stroke-linejoin="round"/></svg>
    </div>
    <div class="hero-sales-chart" aria-hidden="true"><div><span>Sales</span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 12 12 3M5 3h7v7" stroke="currentColor" stroke-width="1.5"/></svg></div>
      <svg class="hero-sales-plot" viewBox="0 0 160 74" fill="none"><path d="M2 17h156M2 38h156M2 59h156" stroke="#3b3b39" stroke-width=".7"/><path d="M3 66V62h10v4m7 0V60h10v6m7 0V56h10v10m7 0V58h10v8m7 0V49h10v17m7 0V43h10v23m7 0V34h10v32m7 0V25h10v41m7 0V10h10v56" fill="#DCC09C" fill-opacity=".13"/><path d="m3 59 15-1 14-5 14 2 15-7 14-1 14-10 14-2 14-12 12-3 19-17" stroke="#DCC09C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="148" cy="3" r="2.5" fill="#DCC09C"/></svg>
    </div>
  </div>`;
  const heroSupport = document.body.dataset.heroVisual === 'modular-store' ? modularStore : `<div class="hero-product" role="img" aria-label="A preview of a customizable Shopify storefront">${img(document.body.dataset.concept === 'a' ? 'front-page-bl-1-default-desktop.webp' : 'product/fashion-store.webp', '', '', true)}</div>`;
  const hero = `<section class="hero wrap"><div class="hero-copy"><p class="eyebrow">${L.hero.eyebrow}</p><h1>${L.hero.pre} <em>${L.hero.free}</em> <span class="headline-rest">${heroPost}</span></h1><p class="hero-description">${L.hero.body}</p>${cta()}</div><div class="hero-art">${img('lior-phone-booth.jpg', 'Lior Pozin', 'portrait', true)}${heroSupport}</div></section>`;
  const trust = `<div class="wrap trust-wrap"><div class="trust" id="trust"><div class="trust-badges">${img('front-page-bl-1-1.webp', 'Shopify partners', 'partner', true)}${img('front-page-bl-1-2.webp', 'Shopify commerce coach', 'coach', true)}</div><div class="trust-customers">${img('front-page-bl-1-3.webp', '', 'avatars', true)}<p>${L.trustCustomers}</p></div></div></div>`;
  const how = `<section class="how section wrap" id="how-to"><h2>${L.how.title}</h2><div class="steps">${L.how.steps.map((step, i) => `<article class="step"><div class="step-top"><span class="step-number">${document.body.dataset.featureLayout === 'editorial' ? 'Step ' : ''}0${i + 1}</span>${document.body.dataset.featureLayout === 'editorial' ? '' : img(step.icon.replace('assets/', ''), '')}</div><h3>${step.t}</h3><p>${step.d}</p>${document.body.dataset.featureLayout === 'editorial' ? img(step.icon.replace('assets/', ''), '', 'step-icon') : ''}</article>`).join('')}</div>${cta('centered')}</section>`;

  // UI text and photography are taken from the existing product illustrations.
  // These are static illustrations; their visual controls never enter the funnel.
  const winning = () => `<div class="product-card lantern">${img('product/lantern.webp')}<div class="product-info"><p>Chic lantern and<br>speaker in one</p><div class="product-meta"><b>$16</b><span>Winning Product</span></div></div></div><div class="product-card charger">${img('product/charging-stand.webp')}<div class="product-info"><p>Wireless Fast<br>Charging Stand</p><div class="product-meta"><b>$21</b><span>Winning Product</span></div></div></div>`;
  const theme = () => `<div class="storefront"><div class="browser-bar"><i></i><i></i><i></i><span>Passion</span><span>—</span></div><div class="storefront-nav"><b>Passion</b><span>Home &nbsp; New Arrivals &nbsp; Contact Us</span><span>⌕</span></div>${img('product/fashion-banner.webp', '', 'fashion-banner')}<div class="storefront-bottom"><span>New Arrivals</span><div class="fashion-tiles">${img('product/fashion-product-1.webp')}${img('product/fashion-product-2.webp')}</div></div></div><span class="edit-label edit-text"><span>⊞</span> Add text</span><span class="edit-label edit-image"><span>⊞</span> Add image</span>`;
  const pages = () => `<div class="desktop-store"><div class="browser-bar"><i></i><i></i><i></i><span>Petshop</span><span>—</span></div><div class="page-nav"><b>PETSHOP</b><span>Home &nbsp; New Arrivals</span><span>⌕</span></div><div class="page-body">${img('product/grooming-kit.webp')}<div class="page-info"><b>4 in 1 Electric Pet Grooming Kit</b><span>$20.52 USD</span><hr><span>30 Days Warranty</span><span>7 days for exchanges and returns</span><span class="product-buy">Buy it now</span></div></div></div><div class="mobile-store"><div class="phone-camera"></div><div class="phone-brand">PETSHOP</div>${img('product/pet-bed.webp')}<div class="phone-info"><b>Cactus Shape Comfy Pet Bed</b><span>$46.07 USD</span><hr><span>30 Days Warranty</span><span class="product-buy">Buy it now</span></div></div>`;
  const domain = () => `<div class="domain-photo">${img('product/backpack-lifestyle.webp')}</div><div class="domain-window"><div class="browser-bar"><i></i><i></i><i></i></div><div class="domain-address">www.yourname<span>.store</span></div><div class="domain-content">${img('product/backpack.webp')}<div><span>FREE</span><small>FOR 1 YEAR</small></div></div></div>`;
  const domainEditorial = () => `<div class="domain-scene">
    <div class="domain-preview-panel"><div class="domain-preview-toolbar"><span><i></i><i></i><i></i></span><span></span></div>${img('product/domain-headphones-v1.png', '', 'domain-headphones')}</div>
    <div class="domain-url-bar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="currentColor" stroke-width="1.5"/><rect x="4" y="10" width="16" height="12" stroke="currentColor" stroke-width="1.5"/><path d="M12 14v4" stroke="currentColor" stroke-width="1.5"/></svg><span>www.yourname<b>.store</b></span></div>
    <div class="domain-year-offer"><strong>FREE</strong><span>FOR 1 YEAR</span></div>
  </div>`;
  const themeEditor = () => `<svg class="theme-editor-svg" viewBox="0 0 660 442" fill="none" aria-hidden="true">
    <defs>
      <filter id="theme-editor-monochrome"><feColorMatrix type="saturate" values="0"/></filter>
      <linearGradient id="theme-editor-fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0.76" stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient>
      <mask id="theme-editor-mask"><rect width="660" height="442" fill="url(#theme-editor-fade)"/></mask>
    </defs>
    <g mask="url(#theme-editor-mask)">
      <path d="M206 141C267 141 276 219 337 219M206 263C266 263 251 119 313 119" stroke="#686868" stroke-width="1"/>
      <circle cx="337" cy="219" r="3" fill="#DCC09C"/><circle cx="313" cy="119" r="3" fill="#DCC09C"/>
      <rect x="318" y="65" width="390" height="370" fill="#181919" stroke="#44443f"/>
      <image href="assets/theme-banner-crop.jpg" x="318" y="65" width="390" height="110" preserveAspectRatio="xMidYMid slice" filter="url(#theme-editor-monochrome)"/>
      <rect x="313" y="60" width="400" height="120" stroke="#DCC09C" stroke-width="1" stroke-dasharray="3 3"/>
      <path d="M310 57h6v6h-6zM310 177h6v6h-6zM710 57h6v6h-6zM710 177h6v6h-6z" fill="#DCC09C"/>
      <text x="342" y="224" fill="#F5F5F5" font-size="14" font-weight="700">UNLEASH YOUR STYLE</text>
      <rect x="337" y="204" width="221" height="29" stroke="#DCC09C" stroke-dasharray="3 3"/>
      <path d="M334 201h6v6h-6zM555 201h6v6h-6zM334 230h6v6h-6zM555 230h6v6h-6z" fill="#DCC09C"/>
      <path d="M342 255h286M342 269h217" stroke="#30312e" stroke-width="7"/>
      <rect x="342" y="294" width="164" height="39" stroke="#B8B5AE"/><text x="357" y="319" fill="#F5F5F5" font-size="14" font-weight="700">NEW COLLECTION</text>
      <rect x="342" y="356" width="100" height="93" fill="#242522" stroke="#34352f"/><rect x="455" y="356" width="100" height="93" fill="#242522" stroke="#34352f"/><rect x="568" y="356" width="100" height="93" fill="#242522" stroke="#34352f"/>
    </g>
    <rect x="46" y="120" width="160" height="42" fill="#171717" stroke="#686868"/>
    <path d="M64 134h12M70 134v14M66 148h8" stroke="#DCC09C" stroke-width="1.5"/>
    <text x="88" y="146" fill="#F5F5F5" font-size="14" font-weight="700">ADD TEXT</text>
    <rect x="46" y="242" width="160" height="42" fill="#171717" stroke="#686868"/>
    <rect x="63" y="254" width="15" height="14" stroke="#DCC09C" stroke-width="1.5"/><path d="m64 266 4-4 3 2 3-4 3 6" stroke="#DCC09C" stroke-width="1.2"/><circle cx="68" cy="258" r="1.4" fill="#DCC09C"/>
    <text x="88" y="268" fill="#F5F5F5" font-size="14" font-weight="700">ADD IMAGE</text>
  </svg>`;
  const visuals = [winning, document.body.dataset.featureLayout === 'editorial' ? themeEditor : theme, pages, document.body.dataset.featureLayout === 'editorial' ? domainEditorial : domain];
  const descriptions = ['Two winning product cards with a lantern and a wireless charging stand', 'An existing fashion storefront with customizable text and images', 'Existing desktop and mobile product pages for a pet store', document.body.dataset.featureLayout === 'editorial' ? 'A black headphone product preview with a custom .store address, free for one year' : 'An existing backpack storefront with a free .store domain'];
  const featureRows = `<section class="features wrap" id="overview" aria-label="Store features">${L.features.map((f, i) => `<article class="feature feature-${i + 1}" id="feature-${i + 1}"><div class="feature-copy"><h2>${f.t}</h2><p>${f.d}</p></div><div class="feature-visual visual-${i + 1}" role="img" aria-label="${descriptions[i]}"><div class="artboard" aria-hidden="true">${visuals[i]()}</div></div></article>`).join('')}${cta('centered')}</section>`;
  const particleCta = `<section class="particle-cta" id="store-cta" aria-labelledby="particle-cta-title">
    <canvas class="particle-sphere" aria-hidden="true"></canvas>
    <div class="particle-cta-content">
      <h2 id="particle-cta-title">${L.final}</h2>
      <p>${L.ctaNote}</p>
      <a class="button primary particle-cta-button" href="${register}">${L.cta}${arrow}</a>
    </div>
  </section>`;
  const editorialFeatures = `<section class="features editorial-features wrap" id="overview" aria-label="Store features">
    <div class="editorial-feature-grid">
      <div class="editorial-feature-stage">
      <div class="feature-index">${L.features.map((f, i) => `<article class="feature-index-item ${i === 0 ? 'is-active' : ''}">
        <h2><button class="feature-index-button" data-feature-index="${i}" aria-expanded="${i === 0}" aria-controls="feature-description-${i} feature-${i + 1}">${f.t}</button></h2>
        <p id="feature-description-${i}" ${i === 0 ? '' : 'hidden'}>${f.d}</p>
      </article>`).join('')}</div>
      <div class="feature-gallery">${L.features.map((f, i) => `<div id="feature-${i + 1}" class="feature-visual visual-${i + 1} feature-frame" data-feature-frame="${i}" role="img" aria-label="${descriptions[i]}" ${i === 0 ? '' : 'hidden'}><div class="artboard" aria-hidden="true">${visuals[i]()}</div></div>`).join('')}</div>
      </div>
    </div>
  </section>`;
  const features = document.body.dataset.featureLayout === 'editorial' ? editorialFeatures : featureRows;
  const sliderButtons = (id, label) => `<div class="slider-controls"><button data-slider="${id}" data-direction="-1" aria-label="Previous ${label}">${arrow}</button><button data-slider="${id}" data-direction="1" aria-label="Next ${label}">${arrow}</button></div>`;
  const customers = `<section class="customers section" id="testimonials"><div class="wrap"><div class="section-heading heading-with-controls"><div><p class="eyebrow">${L.customers.sub}</p><h2>${L.customers.title}</h2></div></div><div class="customer-quotes" id="quotes" tabindex="0" aria-label="Customer reviews">${L.customers.quotes.map(q => `<figure><blockquote>“${q.q}”</blockquote><figcaption>${q.a}</figcaption></figure>`).join('')}</div>${sliderButtons('quotes', 'review')}<div class="customer-shots">${L.customers.shots.map(s => img(s.replace('assets/', ''), 'Customer review')).join('')}</div></div></section>`;
  const experts = `<section class="experts section wrap"><div class="section-heading heading-with-controls"><h2>${L.experts.title}</h2></div><div class="slider expert-slider" id="experts" tabindex="0" aria-label="Entrepreneur testimonials">${L.experts.items.map(e => `<article class="expert-card">${img(e.img.replace('assets/', ''), e.n)}<div class="expert-quote"><p>“${e.q}”</p><h3>${e.n}</h3><p class="expert-role">${e.r}</p></div></article>`).join('')}</div>${sliderButtons('experts', 'entrepreneur')}</section>`;
  const niches = [1, 5, 3, 4, 2];
  const createdRows = `<section class="created section wrap"><div class="section-heading heading-with-controls"><div><p class="eyebrow">${L.created.sub}</p><h2>${L.created.title}</h2></div>${sliderButtons('stores', 'store')}</div><div class="slider stores-slider" id="stores" tabindex="0" aria-label="Store examples">${L.created.stores.map((s, i) => `<article class="store-example">${img(s.img.replace('assets/', ''), `${s.n} store`)}<div class="store-meta"><h3>${s.n}</h3><span>👍 ${s.r}</span></div><a class="button outline" href="${register}?niche=${niches[i]}">${L.created.use}${arrow}</a></article>`).join('')}</div>${document.body.dataset.featureLayout === 'editorial' ? '' : cta('centered')}</section>`;
  const likeIcon = '<svg class="rating-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10v11H3V10h4Zm0 0 5-7a2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2l-1.3 7a2 2 0 0 1-2 2H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter"/></svg>';
  const themeGallery = `<section class="created section theme-gallery" id="created-with-us" aria-labelledby="created-title">
    <div class="section-heading wrap theme-gallery-heading"><div><p class="eyebrow">${L.created.sub}</p><h2 id="created-title">${L.created.title}</h2></div><a class="button primary" href="${register}">Build my store${arrow}</a></div>
    <div class="theme-viewport" id="stores" tabindex="0" aria-label="Store examples"><div class="theme-track">${L.created.stores.map((s, i) => `<article class="store-example" data-theme="${i}">
      <div class="store-preview">${img(s.img.replace('assets/', ''), `${s.n} store`)}</div>
      <div class="store-meta"><h3>${s.n}</h3><span class="store-rating">${likeIcon}<span>${s.r}</span></span></div>
      <a class="button outline" href="${register}?niche=${niches[i]}">${L.created.use}${arrow}</a>
    </article>`).join('')}</div></div>
    <div class="slider-controls theme-controls"><button data-theme-direction="-1" aria-label="Previous store">${arrow}</button><button data-theme-direction="1" aria-label="Next store">${arrow}</button></div>
  </section>`;
  const created = document.body.dataset.featureLayout === 'editorial' ? themeGallery : createdRows;
  const faq = `<section class="faq section wrap" id="faq"><h2>${L.faq.title}</h2><div class="faq-list">${L.faq.items.map(([q, a]) => `<details><summary>${q}<span aria-hidden="true">+</span></summary><div class="faq-answer"><p>${esc(a).replace('https://www.shopify.com/pricing', '<a href="https://www.shopify.com/pricing">https://www.shopify.com/pricing</a>')}</p></div></details>`).join('')}</div></section>`;
  const final = `<section class="final wrap"><h2>${L.final}</h2>${cta()}</section>`;
  const footer = `<footer class="site-footer wrap"><div class="footer-grid"><div class="footer-brand">${img('bys-logo-white.svg', 'Build Your Store')}<p>${L.footer.lead}</p></div>${L.footer.cols.map(([title, links]) => `<div><h3>${title}</h3><ul>${links.map(text => `<li><a href="${href(text)}">${text}</a></li>`).join('')}</ul></div>`).join('')}</div><div class="legal"><p>${L.footer.copy}</p><div>${L.footer.legal.map(text => `<a href="${href(text)}">${text}</a>`).join('')}</div></div></footer>`;
  document.body.innerHTML = `<a class="skip-link" href="#main">Skip to content</a>${header}<main id="main">${hero}${trust}${how}${features}${customers}${experts}${created}${document.body.dataset.featureLayout === 'editorial' ? particleCta : ''}${faq}${final}</main>${footer}`;
  // Below 1100px the store card + sales chart (444px wide with the chart overhang)
  // shrink as one picture so they always fit inside the portrait (Olena 2026-11-20);
  // the card takes at most ~62% of the photo's height so the portrait stays visible.
  const heroArt = document.querySelector('.hero-art');
  const heroComposition = document.querySelector('.hero-composition');
  if (heroArt && heroComposition) {
    const fitComposition = () => heroComposition.style.setProperty('--fit', Math.min(1, heroArt.clientWidth / 444, heroArt.clientHeight * .62 / 284).toFixed(3));
    new ResizeObserver(fitComposition).observe(heroArt);
  }
  // A2 changes the selected description and its picture as one state.
  if (document.body.dataset.featureLayout === 'editorial') {
    const track = document.querySelector('.editorial-feature-grid');
    const stage = document.querySelector('.editorial-feature-stage');
    const buttons = [...document.querySelectorAll('[data-feature-index]')];
    const frames = [...document.querySelectorAll('[data-feature-frame]')];
    const desktop = matchMedia('(min-width: 1100px)');
    let activeIndex = -1;
    let scrollStep = 500;
    let scheduled = false;
    const stickyTop = () => parseFloat(getComputedStyle(stage).top) || 0;
    const setFeature = index => {
      if (index === activeIndex) return;
      activeIndex = index;
      buttons.forEach((button, i) => {
        const selected = i === index;
        button.setAttribute('aria-expanded', String(selected));
        button.closest('.feature-index-item').classList.toggle('is-active', selected);
        document.getElementById(`feature-description-${i}`).hidden = !selected;
        frames[i].hidden = !selected;
      });
    };
    const updateFeature = () => {
      scheduled = false;
      if (!desktop.matches) return;
      const progress = stickyTop() - track.getBoundingClientRect().top;
      setFeature(Math.max(0, Math.min(buttons.length - 1, Math.floor((progress + .5) / scrollStep))));
    };
    const measureFeatures = () => {
      stage.style.minHeight = '';
      track.style.height = '';
      if (desktop.matches) {
        // Reserve the tallest description so selecting a different item never
        // changes the scroll range or shifts the sections below this one.
        const selected = Math.max(0, activeIndex);
        let stageHeight = 0;
        buttons.forEach((_, index) => {
          setFeature(index);
          stageHeight = Math.max(stageHeight, stage.getBoundingClientRect().height);
        });
        setFeature(selected);
        scrollStep = Math.max(320, Math.min(500, innerHeight * .5));
        stage.style.minHeight = `${Math.ceil(stageHeight)}px`;
        track.style.height = `${Math.ceil(stageHeight) + buttons.length * scrollStep}px`;
      }
      updateFeature();
    };
    const selectFeature = index => {
      setFeature(index);
      if (desktop.matches) {
        scrollTo({ top: scrollY + track.getBoundingClientRect().top - stickyTop() + index * scrollStep + 1, behavior: 'instant' });
      }
    };
    buttons.forEach((button, index) => button.addEventListener('click', () => selectFeature(index)));
    addEventListener('scroll', () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(updateFeature); }
    }, { passive: true });
    addEventListener('resize', measureFeatures);
    const selectFeatureHash = () => {
      const index = frames.findIndex(frame => `#${frame.id}` === location.hash);
      if (index !== -1) selectFeature(index);
    };
    addEventListener('hashchange', selectFeatureHash);
    setFeature(0);
    measureFeatures();
    document.fonts.ready.then(() => { measureFeatures(); selectFeatureHash(); });
  }
  document.querySelector('.menu-toggle').addEventListener('click', e => {
    const button = e.currentTarget;
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.querySelector('#mobile-navigation').hidden = !open;
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-group[open]').forEach(d => d.open = false);
      const button = document.querySelector('.menu-toggle');
      if (button.getAttribute('aria-expanded') === 'true') { button.click(); button.focus(); }
    }
  });
  document.addEventListener('click', e => document.querySelectorAll('.desktop-nav details[open]').forEach(d => { if (!d.contains(e.target)) d.open = false; }));
  document.querySelectorAll('[data-slider]').forEach(button => button.addEventListener('click', () => {
    const slider = document.getElementById(button.dataset.slider);
    const distance = slider.firstElementChild.getBoundingClientRect().width + (parseFloat(getComputedStyle(slider).gap) || 0);
    slider.scrollBy({ left: Number(button.dataset.direction) * distance, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }));
})();
