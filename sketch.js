let shakeIntensity = 0;   // how strong the shake is
let shakeDecay = 0.9;     // how quickly it stops shaking
let canvas; //i tried to adapt the coding example i was given to match what i already had, but i figured out later that i needed this part for it to apply correctly

let img;
let img1;
let img2;
let img3;
let img4; // A variable to store the image in


function preload() {
  img = loadImage('goog.png'); // preloads picture; i had issues with this for a while; had to make a new index.html and sketch.js before i could eventually get it to load
  img1 = loadImage('amd.jpeg');
  img2 = loadImage('bfd.jpeg');
  img3 = loadImage('bmd.jpeg');
  img4 = loadImage('hwfd.jpeg');
}

function setup() {
  // creates a canvas as big as the browser area
  canvas = createCanvas(windowWidth, windowHeight); 
  background(img); //had issues getting this to work; took quite a while to fix. i believe it was not properly defined, but i still don't know what exactly the issue was

}

function draw() {
  image(img2, 950, 110, 270, 350);
  image(img1, 200, 110, 300, 350);
  image(img3, 200, 520, 300, 390);
  image(img4, 950, 520, 300, 390);
  // need to learn more about using these values; it's still very much trail and error when it comes to formatting images and even shapes

  applyCanvasShake();
}

// Example triggers
function mousePressed() {
  triggerShake({
    intensity: 15,   // how far it moves
    speed: 1,      // jitter speed multiplier
    duration: 600    // ms
  });
}

let shakeEndTime
function triggerShake({ intensity = 20, speed = 1, duration = 300 } = {}) {
  shakeIntensity = intensity;
  shakeSpeed = speed;
  shakeEndTime = millis() + duration;
}

// Applies the shaking effect using CSS transforms
function applyCanvasShake() {
  if (millis() < shakeEndTime) {

    const x = random(-shakeIntensity, shakeIntensity) * shakeSpeed;
    const y = random(-shakeIntensity, shakeIntensity) * shakeSpeed;
    const r = random(-shakeIntensity * 0.5, shakeIntensity * 1.5) * shakeSpeed;

    canvas.elt.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;

  } else {
    canvas.elt.style.transform = "";
  }
}


//functions to create multiple buttons
const newButton = document.createElement('button');
newButton.textContent = 'IMAGE 1'; //had to figure out how to get text in the button
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
  alert('WRONG!! Probable...but still.');
}); //to load a button that creates a pop up alert. I had trouble figuring out how to make a button (i can only do it in HTML) so it took a lot of research to find a way to do it.

const newButton1 = document.createElement('button');
newButton1.textContent = 'IMAGE 2';
document.body.appendChild(newButton1);

newButton1.addEventListener('click', () => {
  alert('WRONG!! Seriously?? Have you ever even been to a hospital?? Yikes...');
}); //screen glitched when i tried to make a second one; here i figured out i had to give them different names to define and call them

const newButton2 = document.createElement('button');
newButton2.textContent = 'IMAGE 3';
document.body.appendChild(newButton2);

newButton2.addEventListener('click', () => {
  alert('WRONG!! Work with me here buddy. Should that even be allowed??');
});

const newButton3 = document.createElement('button');
newButton3.textContent = 'IMAGE 4';
document.body.appendChild(newButton3);

newButton3.addEventListener('click', () => {
  alert('WRONG!! No. Good...REALLY good...I mean to look at!! But no. Could make a fine nurse though!!');
});