function setup() {
  createCanvas(400, 400);

  let url = "/weather";
  loadJSON(url, gotWeather);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

function gotWeather(degrees) {
  console.log(degrees);
}
