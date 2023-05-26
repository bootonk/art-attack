let sunshine;

function setup() {
  createCanvas(windowWidth, 300);
  sunshine = createVector();

  // sky
  background(235, 245, 251);

  // weather data
  let url = "/weather";
  loadJSON(url, gotWeather);
}

function draw() {
  let temperature = sunshine.degrees;

  push();
  if (temperature <= 10) {
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / -150.0);
    star(0, 0, 60, 80, 15, [254, 249, 231]);
    text(temperature);
    pop();
  } else if (temperature > 10 && temperature <= 20) {
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / -150.0);
    star(0, 0, 80, 100, 20, [249, 231, 159]);
    star(0, 0, 60, 80, 20, [254, 249, 231]);
    pop();
  } else if (temperature > 20) {
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / -150.0);
    star(0, 0, 100, 120, 20, [247, 220, 111]);
    star(0, 0, 80, 100, 20, [249, 231, 159]);
    star(0, 0, 60, 80, 20, [254, 249, 231]);
    text(temperature);
    pop();
  }
  pop();

  textSize(32);
  text(temperature, width / 2 - 30, height / 2 + 10);
}

function gotWeather(degrees) {
  sunshine = degrees;
}

function star(x, y, radius1, radius2, npoints, fillColor) {
  stroke(235, 245, 251);
  fill(fillColor);
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
