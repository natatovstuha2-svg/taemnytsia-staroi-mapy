const pages = [
  'assets/pages/00-cover.webp',
  'assets/pages/01-text.png',
  'assets/pages/02-illustration.webp',
  'assets/pages/03-text.png',
  'assets/pages/04-illustration.webp',
  'assets/pages/05-illustration.webp',
  'assets/pages/06-text.png',
  'assets/pages/07-illustration.webp',
  'assets/pages/08-illustration.webp',
  'assets/pages/09-text.png',
  'assets/pages/10-illustration.webp',
  'assets/pages/11-text.png',
  'assets/pages/12-illustration.webp',
  'assets/pages/13-finale.webp'
];

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('book');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const counter = document.getElementById('counter');

  const pageFlip = new St.PageFlip(root, {
    width: 600,
    height: 900,
    size: 'stretch',
    minWidth: 240,
    maxWidth: 720,
    minHeight: 360,
    maxHeight: 1080,
    drawShadow: true,
    flippingTime: 900,
    usePortrait: true,
    startPage: 0,
    autoSize: true,
    maxShadowOpacity: 0.28,
    showCover: true,
    mobileScrollSupport: false,
    swipeDistance: 24,
    clickEventForward: true,
    disableFlipByClick: false
  });

  const updateUi = () => {
    const index = pageFlip.getCurrentPageIndex();
    counter.textContent = `${index + 1} / ${pages.length}`;
    prev.disabled = index <= 0;
    next.disabled = index >= pages.length - 1;
  };

  pageFlip.on('init', updateUi);
  pageFlip.on('flip', updateUi);
  pageFlip.on('changeOrientation', updateUi);
  pageFlip.loadFromImages(pages);

  prev.addEventListener('click', () => pageFlip.flipPrev('bottom'));
  next.addEventListener('click', () => pageFlip.flipNext('bottom'));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      pageFlip.flipNext('bottom');
    }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      pageFlip.flipPrev('bottom');
    }
  });
});
