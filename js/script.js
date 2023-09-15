/*

// Create WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render scene with camera
  renderer.render(scene, camera);
}

// Start animation
animate();
 */




window.onscroll = function() {myFunction()};

var header = document.getElementById("main-header");
var nameID = document.getElementById("name")
var sticky = 180;
var showed = 220;
console.log(header.offsetTop);

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("-sticky");
    nameID.classList.add("name-invisible");
  } else {
    header.classList.remove("-sticky");
    nameID.classList.remove("name-invisible");
  }
  if(window.scrollY > showed) {
    header.classList.add("showed");
  } else {
    header.classList.remove("showed");
  }
  
}




const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 9,
    y: e.pageY - 2
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX ,
    y: e.pageY
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 3.25
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}


 // Get all elements with the "nav-menu-span" class
 const navMenuSpans = document.getElementsByClassName("nav-menu-span");

 // Loop through each nav-menu-span element
 for (let i = 0; i < navMenuSpans.length; i++) {
   // Set the content of the CSS to the index of the element plus 1
   navMenuSpans[i].style.counterReset = "number " + (i + 0);
 }

