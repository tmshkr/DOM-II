console.log("hello");

const block = document.querySelectorAll(".block");

block.forEach((el, i) => {
  el.onclick = () => {
    el.parentElement.prepend(el);
  };

  el.positionX = 0; // initialize position to 0

  el.onmousedown = function() {
    const self = this;
    clearInterval(self.interval);
    self.interval = setInterval(function() {
      if (el.getBoundingClientRect().right >= window.innerWidth) {
        clearInterval(self.interval);
      } else {
        self.positionX += 1;
        requestAnimationFrame(function() {
          el.style.transform = `translateX(${self.positionX}px)`;
        });
      }
    }, 10);
  };

  el.onmouseup = function() {
    const self = this;
    clearInterval(self.interval);
    self.interval = setInterval(function() {
      if (self.positionX > 0) {
        self.positionX -= 1;
        requestAnimationFrame(function() {
          el.style.transform = `translateX(${self.positionX}px)`;
        });
      } else {
        clearInterval(self.interval);
      }
    }, 10);
  };
});
