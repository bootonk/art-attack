function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);

    function setup() {
      createCanvas(400, 400);
    }

    function draw() {
      if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);
    }
  }
}

ready(Alpine.start);
setup();
draw();
