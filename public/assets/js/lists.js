$(document).ready(function () {
  // charactercounter functions for create-list & create-gift inputs
  $("input#gift-name, input#gift-for, input#max-price").characterCounter();
  $("input#list-name, input#list-creator").characterCounter();

  $(".create-list-submit").on("click", function (event) {
    const listCreator = $("#list-creator").val();
    const listName = $("#list-name").val();
    $.ajax({
      url: "/api/lists",
      method: "POST",
      data: { name: listName, creator: listCreator },
    }).then(function (response) {
      console.log(response);
    });
  });

  $(".delete-list").on("click", function () {
    const id = $(this).data("id");
    $.ajax({
      url: `/api/del-lists/${id}`,
      method: "DELETE",
    }).then(function (response) {
      console.log(response);
    });
  });

  $(".list-buttons").on("click", function () {
    const id = $(this).data("id");
    $.ajax({
      method: "GET",
      url: `/single-list/${id}`
    }).then(function (response) {
      console.log(response);
      response.render(response);
    });
  });
});


// Countdown timer
function updateTimer(end) {
  const time = end - new Date();
  return {
    'days': Math.floor(time / (1000 * 60 * 60 * 24)),
    'hours': Math.floor(time / (1000 * 60 * 60) % 24),
    'minutes': Math.floor(time / (1000/60) % 60),
    'seconds': Math.floor(time / (1000) % 60),
    'total': time
  };
}
function startTimer(id, end) {
  const timerInterval = setInterval(() => {
  const clock = document.getElementById(id)
  const timer = updateTimer(deadline)
  }, 1000, interval);
};

timer.innerHandlebars = timer.innerHandlebars("#days") +
                        timer.innerHandlebars("#hours") +
                        timer.innerHandlebars("#minutes") +
                        timer.innerHandlebars("#seconds")

  const span = timer.getElementByTagName("span");
  animateClock(spans[3]);
  if(timer.seconds === 59) animateClock(spans[2]);
  if(timer.minutes === 59 && timer.seconds === 59)animateClock(spans[1]);
  if(timer.hours === 23 && timer.minutes === 59 && timer.seconds === 59)animateClock(spans[0]);

window.onload = function() {
  const end = new Date ("December 25, 2020 00:00:00")
  startTimer("clock", end)
};

// Countdown timer ends
if(timer.total < 1 ) {
  clearInterval(timerInterval);
  timer.innerHandlebars
}



var flakes = [],
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  flakeCount = 400,
  mX = -100,
  mY = -100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function snow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < flakeCount; i++) {
    var flake = flakes[i],
      x = mX,
      y = mY,
      minDist = 150,
      x2 = flake.x,
      y2 = flake.y;

    var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
      dx = x2 - x,
      dy = y2 - y;

    if (dist < minDist) {
      var force = minDist / (dist * dist),
        xcomp = (x - x2) / dist,
        ycomp = (y - y2) / dist,
        deltaV = force / 2;

      flake.velX -= deltaV * xcomp;
      flake.velY -= deltaV * ycomp;
    } else {
      flake.velX *= 0.98;
      if (flake.velY <= flake.speed) {
        flake.velY = flake.speed;
      }
      flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
    }

    ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
    flake.y += flake.velY;
    flake.x += flake.velX;

    if (flake.y >= canvas.height || flake.y <= 0) {
      reset(flake);
    }

    if (flake.x >= canvas.width || flake.x <= 0) {
      reset(flake);
    }

    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(snow);
}

function reset(flake) {
  flake.x = Math.floor(Math.random() * canvas.width);
  flake.y = 0;
  flake.size = Math.random() * 3 + 2;
  flake.speed = Math.random() * 1 + 0.5;
  flake.velY = flake.speed;
  flake.velX = 0;
  flake.opacity = Math.random() * 0.5 + 0.3;
}

function init() {
  for (var i = 0; i < flakeCount; i++) {
    var x = Math.floor(Math.random() * canvas.width),
      y = Math.floor(Math.random() * canvas.height),
      size = Math.random() * 3 + 2,
      speed = Math.random() * 1 + 0.5,
      opacity = Math.random() * 0.5 + 0.3;

    flakes.push({
      speed: speed,
      velY: speed,
      velX: 0,
      x: x,
      y: y,
      size: size,
      stepSize: Math.random() / 30,
      step: 0,
      opacity: opacity,
    });
  }

  snow();
}

canvas.addEventListener("mousemove", function (e) {
  (mX = e.clientX), (mY = e.clientY);
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

init();





