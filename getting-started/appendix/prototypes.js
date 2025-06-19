function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}
var reel = {
  symbols: ["x", "y", "z", "w", "$", "*", "<", "@"],
  position: null,
  spin() {
    if (this.position === null) {
      this.position = randMax(this.symbols.length - 1);
    }
  },
  display() {
    if (this.position === null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.position = null;
      reel.spin();
    });
  },
  display() {
    this.reels.forEach(function displayReel(reel) {
      console.log(reel.display());
    });
  },
};

slotMachine.spin();
slotMachine.display();

// slotMachine.spin();
// slotMachine.display();
