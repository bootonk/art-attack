let sunshine;

function setup() {
  createCanvas(windowWidth, 300);
  sunshine = createVector();

  // sky
  background(235, 245, 251);
  stroke(255);
  arc(40, height, 80, 60, PI, TWO_PI);
  arc(120, height, 120, 120, PI, TWO_PI);
  arc(200, height, 70, 80, PI, TWO_PI);
  arc(270, height, 120, 100, PI, TWO_PI);
  arc(350, height, 60, 60, PI, TWO_PI);
  arc(410, height, 90, 70, PI, TWO_PI);
  arc(500, height, 120, 100, PI, TWO_PI);
  arc(590, height, 100, 70, PI, TWO_PI);
  arc(650, height, 50, 30, PI, TWO_PI);
  arc(700, height, 40, 40, PI, TWO_PI);
  arc(760, height, 100, 70, PI, TWO_PI);
  arc(830, height, 120, 100, PI, TWO_PI);
  arc(920, height, 90, 70, PI, TWO_PI);
  arc(990, height, 60, 60, PI, TWO_PI);
  arc(1050, height, 120, 100, PI, TWO_PI);
  arc(1130, height, 70, 80, PI, TWO_PI);
  arc(1220, height, 120, 120, PI, TWO_PI);
  arc(1330, height, 100, 60, PI, TWO_PI);

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
    pop();
  }
  pop();

  // text(temperature, width / 2 - 30, height / 2 + 10);

  textSize(26);
  textAlign(CENTER);
  drawText(width * 0.5, height * 0.5, temperature);
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

function drawText(x, h, temperature) {
  text(temperature, x, h + 10);
  text("It's the sun!", x, h + 148);
}
