import confetti from 'canvas-confetti';
// var colors = ['#151618', '#F6CD46'];

export const runFireworks = () => {
  var end = Date.now() + 1000;

  // go Buckeyes!
  var colors = ['#151618', '#F6CD46'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
