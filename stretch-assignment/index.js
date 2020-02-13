console.log("hello");

const block = document.querySelectorAll(".block");
let min = 0;

block.forEach((el, i) => {
  el.onclick = function() {
    el.style.order = --min;
    layout();
  };

  el.x = 0; // initialize position to 0
  el.style.order = i;

  el.onmousedown = function() {
    clearInterval(el.interval);
    el.interval = setInterval(function() {
      if (el.getBoundingClientRect().right >= window.innerWidth) {
        clearInterval(el.interval);
      } else {
        el.x += 1;
        requestAnimationFrame(function() {
          el.style.transform = `translateX(${el.x}px)`;
        });
      }
    }, 10);
  };

  el.onmouseup = function() {
    clearInterval(el.interval);
    layout();
  };
});

// https://codepen.io/osublake/pen/gaQNLK?editors=0010
var nodes = block;
var boxes = [];

for (var i = 0; i < nodes.length; i++) {
  var node = nodes[i];

  // Initialize transforms on node
  TweenLite.set(node, { x: 0 });

  boxes[i] = {
    transform: node._gsTransform,
    x: node.x,
    y: node.offsetTop,
    node
  };
}

function layout() {
  for (var i = 0; i < nodes.length; i++) {
    var box = boxes[i];

    var lastX = box.x;
    var lastY = box.y;

    box.x = box.node.offsetLeft;
    box.y = box.node.offsetTop;

    // Continue if box hasn't moved
    if (lastX === box.x && lastY === box.y) continue;

    // Reversed delta values taking into account current transforms
    var x = nodes[i].x;
    var y = box.transform.y + lastY - box.y;

    // Tween to 0 to remove the transforms
    TweenLite.fromTo(
      box.node,
      0.5,
      { x, y },
      { x: 0, y: 0, ease: Power1.easeInOut }
    );
    nodes[i].x = 0;
  }
}
