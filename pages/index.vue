<script setup>
const credentials = ref();

const email = ref("");
const password = ref("");
const screenSize = reactive({
 width: 0,
 height: 0,
});
const firebaseUser = useFirebaseUser();
watch(firebaseUser, async () => {
 return navigateTo("/secret");
});

const signIn = async () => {
 credentials.value = await signInUser(email.value, password.value);
 console.log(credentials.value);
};

const signInWithGoogle = async () => {
 googleLogin();
};
const signOut = async () => {
 credentials.value = await signOutUser();
};

onMounted(() => {
 var canvas = document.querySelector("canvas");
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 screenSize.width = canvas.width;
 screenSize.height = canvas.height;
 var ctx = canvas.getContext("2d");

 var mouse = {
  x: undefined,
  y: undefined,
 };

 window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
 });
 window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
 });
 var clicked = false;
 window.addEventListener("mousedown", function () {
  clicked = true;
 });

 window.addEventListener("mouseup", function () {
  clicked = false;
 });

 function randomIntFromRange(min, max, decimal) {
  if (decimal == false) {
   return Math.floor(Math.random() * (max - min + 1) + min);
  } else {
   return Math.random() * max + min;
  }
 }
 function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
 }

 function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.opacity = 1;
  this.distance = randomIntFromRange(40, 100, false);

  this.draw = function () {
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
   ctx.globalAlpha = this.opacity;
   ctx.fillStyle = this.color;
   ctx.fill();
  };

  this.update = function (balls) {
   this.draw();
   for (var i = 0; i < balls.length; i++) {
    // if(this === ballArray[i])continue;

    if (
     getDistance(this.x, this.y + this.radius, balls[i].x, ballArray[i].y) <
     this.distance
    ) {
     ctx.beginPath();
     ctx.moveTo(this.x, this.y);
     ctx.lineTo(balls[i].x, balls[i].y);
     ctx.strokeStyle = this.color;
     ctx.save();
     ctx.globalAlpha = 0.3;
     ctx.stroke();
     ctx.restore();
     ctx.closePath();
    }
   }
   if (getDistance(this.x, this.y, mouse.x, mouse.y) < this.distance) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.strokeStyle = this.color;
    ctx.save();
    ctx.globalAlpha = 0.3;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
   }

   if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) {
    this.dx = -this.dx;
   }
   if (this.y - this.radius < 0 || this.y + this.radius > window.innerHeight) {
    this.dy = -this.dy;
   }
   this.x += this.dx * 2;
   this.y += this.dy * 2;
  };
 }

 var ball;
 var ballArray;
 var text;
 function init() {
  ballArray = [];
  for (var i = 0; i < 200; i++) {
   var radius = 4;
   var x = randomIntFromRange(radius, window.innerWidth - radius, true);
   var y = randomIntFromRange(radius, window.innerHeight - radius, true);
   var dx = randomIntFromRange(-0.3, 0.5, true);
   var dy = randomIntFromRange(-0.3, 0.5, true);
   ballArray.push(new Ball(x, y, dx, dy, radius, "gray"));
  }
 }

 function animate() {
  requestAnimationFrame(animate);
  // ctx.fillStyle = 'rgba(255,255,255,0.3)';
  // ctx.fillRect(0,0,innerWidth,innerHeight)
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  if (clicked == true) {
   for (var i = 0; i < 4; i++) {
    var radius = 4;
    var dx = randomIntFromRange(-0.5, 1, true);
    var dy = randomIntFromRange(-0.5, 1, true);
    ballArray.push(new Ball(mouse.x, mouse.y, dx, dy, radius, "gray"));
    ballArray.splice(1, 1);
   }
   clicked = false;
  }
  for (var i = 0; i < ballArray.length; i++) {
   ballArray[i].update(ballArray);
  }
  text.update();
 }

 init();
 animate();
});

const welcomeMessage = ref("Welcome \nto STEM Connect!");
</script>
<template>
 <NuxtLayout name="default">
  <div
   class="absolute bg-slate-100/60 w-screen h-screen flex flex-col justify-center items-center"
  >
   <div
    class="flex justify-center items-center flex-col bg-white/80 space-y-5 p-4 md:border-2 rounded-xl shadow-sm md:w-1/2"
   >
    <h1 class="w-fit text-4xl text-center sm:text-5xl">
     <span
      v-for="letter in welcomeMessage.split('')"
      :key="letter"
      class="hover:text-blue-300"
     >
      {{ letter }}
     </span>
    </h1>
    <div class="flex flex-col space-y-2 text-xs md:text-sm overflow-auto">
     <p class="text-center">
      🚀 Welcome aboard the hub for Orange Coast College's STEM enthusiasts! 🌟
     </p>
     <p>
      At STEM Connect, we're thrilled to have you join our vibrant community of
      budding scientists, engineers, mathematicians, and tech aficionados. Here,
      you'll find a world of knowledge, collaboration, and endless
      possibilities.
     </p>
     <ul class="flex flex-col space-y-1">
      <li>
       🔍 Dive into insightful discussions, ask burning questions, and share
       your expertise.
      </li>
      <li>
       📚 Explore a treasure trove of resources and expand your horizons.
      </li>
      <li>
       🤝 Connect with like-minded peers, form study groups, and embark on
       exciting projects.
      </li>
      <li>
       📣 Stay in the loop with STEM-related events, workshops, and
       opportunities.
      </li>
     </ul>
     <p>
      Your journey through the world of STEM starts right here. Let's learn,
      grow, and achieve together! 🌐🔬🔗 Happy exploring!
     </p>
    </div>

    <a href="/login" class="btn-bordered bg-white text-2xl"> Get Started! </a>
   </div>
  </div>
  <canvas></canvas>
 </NuxtLayout>
</template>

<style>
canvas {
 height: 100%;
 width: 100%;
 background: white;
 /*background:#0c0c0c;*/
}
</style>
