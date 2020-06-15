/*-----------------------------------------------------------------------------------*/
/*  Main Variables
/*-----------------------------------------------------------------------------------*/

const homePage = document.getElementById("home");

/*-----------------------------------------------------------------------------------*/
/*  Masonry Grid Init
/*-----------------------------------------------------------------------------------*/

var grid = document.querySelector(".project-grid");

if (grid) {
  var msnry = new Masonry(grid, {
    columnWidth: ".grid-sizer",
    gutter: ".gutter-sizer",
    itemSelector: ".grid-item",
    percentPosition: true,
  });

  msnry.on("layoutComplete", function (items) {
    console.log(items.length);
  });
  // trigger initial layout
  msnry.layout();
}

/*-----------------------------------------------------------------------------------*/
/*  Navigation
/*-----------------------------------------------------------------------------------*/

// Nav Toggle

const navToggle = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-wrapper");
const header = document.querySelector("header");
const navLink = document.querySelectorAll(".nav-links-inner a");

if (navToggle) {
  navToggle.addEventListener("click", (_) => {
    navToggle.classList.toggle("open");
    navMenu.classList.toggle("nav-open");
    header.classList.toggle("pos-z-index");
  });

  navLink.forEach((element) => {
    element.addEventListener("click", (_) => {
      // navToggle.classList.remove("open");
      // navMenu.classList.remove("nav-open");
      // header.classList.remove("pos-z-index");
    });
  });
}

/*-----------------------------------------------------------------------------------*/
/*  InViewPort ?
/*-----------------------------------------------------------------------------------*/

function inViewPort(elem) {
  var elemPos = elem.getBoundingClientRect();
  return !(elemPos.top > 900);
}

/*-----------------------------------------------------------------------------------*/
/*  Reveal Page Content On Scroll
/*-----------------------------------------------------------------------------------*/

var revealX = document.querySelectorAll(".page-content .reveal-x");
var revealY = document.querySelectorAll(".page-content .reveal-y");

function revealHor(elem) {
  // ES6 Way
  [].forEach.call(elem, function (xElem) {
    if (inViewPort(xElem)) {
      xElem.style.opacity = "1";
      xElem.style.transform = "translateY(0px)";
    } else {
      xElem.style.opacity = "0";
      xElem.style.transform = "translateX(-70px)";
    }
  });
}

function revealVer(elem) {
  [].forEach.call(elem, function (yElem) {
    if (inViewPort(yElem)) {
      yElem.style.opacity = "1";
      yElem.style.transform = "translateY(0px)";
    } else {
      yElem.style.opacity = "0";
      yElem.style.transform = "translateY(100px)";
    }
  });
}

/*-----------------------------------------------------------------------------------*/
/*  Reveal Work
/*-----------------------------------------------------------------------------------*/

const workItem = document.querySelectorAll(".project-item");

function revealWork() {
  [].forEach.call(workItem, function (item) {
    if (inViewPort(item)) {
      item.classList.add("on");
    } else {
      item.classList.remove("on");
    }
  });
}

/*-----------------------------------------------------------------------------------*/
/*  Reveal Project Cover
/*-----------------------------------------------------------------------------------*/

// const workCover = document.querySelector(".cover-mask");

// function revealCover() {
//   if (inViewPort(workCover)) {
//     workCover.style.transform = "translate3d(0, 100%, 0)";
//   }
// }

/*-----------------------------------------------------------------------------------*/
/*  Slider
/*-----------------------------------------------------------------------------------*/

// 1. Variables

let slider = document.querySelector(".slider");

if (slider) {
  let slides = Array.from(slider.children);
  const nextButton = document.querySelector(".__next");
  const prevButton = document.querySelector(".__prev");

  // Using "let" instead of "const" to declare the following variable
  // As we need it to update itself if the window is resized
  let sliderWidth = slider.getBoundingClientRect().width;
  let slideWidth = slides[0].getBoundingClientRect().width;

  // 2. Functions

  // Arrange slides next to one another
  const setSlidePosition = (slide, index) => {
    // slide.style.left = slideWidth * index + "px";
  };
  slides.forEach(setSlidePosition);

  // Move Slider by using the css left value of the target slide
  const moveToSlide = (slider, currentSlide, targetSlide) => {
    const targetMask = targetSlide.querySelector(".mask");
    const currentMask = currentSlide.querySelector(".mask");

    // slider.style.transform = "translateX(-" + targetSlide.style.left + ")";

    // Slide In the Mask for the current Slide
    currentMask.style.width = "100%";

    // Disable current Slide and Enable Target Slide
    setTimeout(function () {
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
      targetMask.style.width = "0%";
    }, 600);

    amountToMove = targetSlide.style.left;
  };

  // Update Arrows Status - targetIndex(*)
  const updateArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
      prevButton.classList.add("is-off");
      nextButton.classList.remove("is-off");
    } else if (targetIndex === slides.length - 1) {
      prevButton.classList.remove("is-off");
      nextButton.classList.add("is-off");
    } else {
      prevButton.classList.remove("is-off");
      nextButton.classList.remove("is-off");
    }
  };

  // Move Slide to left when Click on Next
  nextButton.addEventListener("click", (e) => {
    const currentSlide = slider.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    // Define the nextIndex variable to help up decided on the updateArrow function
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);
    const currentIndex = slides.findIndex((slide) => slide === currentSlide);

    // Calling the functions above
    if (currentIndex !== slides.length - 1) {
      updateArrows(slides, prevButton, nextButton, nextIndex);
      moveToSlide(slider, currentSlide, nextSlide);
    }
  });

  // Move Slide to right when Click on Prev
  prevButton.addEventListener("click", (e) => {
    const currentSlide = slider.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    // Define the prevIndex variable to help up decided on the updateArrow function
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);

    // Calling the functions above
    if (prevIndex >= 0) {
      updateArrows(slides, prevButton, nextButton, prevIndex);
      moveToSlide(slider, currentSlide, prevSlide);
    }
  });
}

/*-----------------------------------------------------------------------------------*/
/*  Scratch Module
/*-----------------------------------------------------------------------------------*/

var cursorElem = document.querySelector(".cursor-object");

var scratcher = document.getElementById("scratcher");

if (scratcher) {
  (bridgeCanvas = scratcher.getContext("2d")), (brushRadius = (scratcher.width / 100) * 5), (img = new Image());

  if (brushRadius < 50) {
    brushRadius = 50;
  }

  img.onload = function () {
    bridgeCanvas.drawImage(img, 0, 0, scratcher.width, scratcher.height);
  };

  var pathname = window.location.pathname;

  img.loc = "./src/img/svg/";
  img.filename = "scratch-bg.svg";
  if (window.devicePixelRatio >= 2) {
    var nameParts = img.filename.split(".");
    img.src = img.loc + nameParts[0] + "." + nameParts[1];
  } else {
    img.src = img.loc + img.filename;
  }

  function detectLeftButton(event) {
    if ("buttons" in event) {
      return event.buttons === 1;
    } else if ("which" in event) {
      return event.which === 1;
    } else {
      return event.button === 1;
    }
  }

  function getBrushPos(xRef, yRef) {
    var bridgeRect = scratcher.getBoundingClientRect();
    return {
      x: Math.floor(((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left)) * scratcher.width),
      y: Math.floor(((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top)) * scratcher.height),
    };
  }

  function drawDot(mouseX, mouseY) {
    bridgeCanvas.beginPath();
    bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
    bridgeCanvas.fillStyle = "#000";
    bridgeCanvas.globalCompositeOperation = "destination-out";
    bridgeCanvas.fill();
  }

  scratcher.addEventListener(
    "mousemove",
    function (e) {
      var brushPos = getBrushPos(e.clientX, e.clientY);
      var leftBut = detectLeftButton(e);
      if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
      }
      cursorElem.classList.add("off");
    },
    false
  );

  scratcher.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
      var touch = e.targetTouches[0];
      if (touch) {
        var brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
        console.log("It's over");
      }
      cursorElem.classList.add("off");
    },
    false
  );
}

/*-----------------------------------------------------------------------------------*/
/*  Text Rotation
/*-----------------------------------------------------------------------------------*/

if (homePage) {
  var words = document.getElementsByClassName("word");
  var wordArray = [];
  var currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = "letter in";
    }, 340 + i * 80);
  }

  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = "";
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement("span");
      letter.className = "letter";
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }

    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 2500);
}

/*-----------------------------------------------------------------------------------*/
/*  Canvas Side Visual
/*-----------------------------------------------------------------------------------*/

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (a) {
      window.setTimeout(a, 1e3 / 60);
    }
  );
})();

if (homePage) {
  let sideVisual = document.getElementById("c"),
    ctx = sideVisual.getContext("2d"),
    tick = 0,
    fps = 8,
    oldTime = Date.now(),
    shapes,
    cw = 250,
    ch = 150;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function sortByAngle(a, b) {
    return a.angle - b.angle;
  }

  function Shape(opt) {
    this.layers = 15;
    this.points = [];
  }

  Shape.prototype.update = function () {
    this.radius = rand(40, 80);
    this.points.length = 0;
    var i = ~~rand(3, 5);
    while (i--) {
      var angle = rand(0, Math.PI * 2),
        x = Math.round(Math.cos(angle) * this.radius),
        y = Math.round(Math.sin(angle) * this.radius);
      this.points.push({
        x: x,
        y: y,
        angle: angle,
      });
    }
    this.points.sort(sortByAngle);
  };

  Shape.prototype.render = function () {
    for (var j = 0; j < this.layers; j++) {
      this.update();
      var i = this.points.length - 1;
      ctx.save();
      ctx.translate(cw / 2, ch / 2);
      ctx.beginPath();
      ctx.moveTo(this.points[i].x, this.points[i].y);
      while (i--) {
        ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      ctx.closePath();
      ctx.fillStyle = "hsla(0, 0%, " + rand(0, 100) + "%, " + rand(0.1, 0.7) + ")";
      ctx.fill();
      ctx.restore();
    }
  };

  function resize() {
    cw = c.width = window.innerWidth;
    ch = c.height = window.innerHeight;
  }

  function loop() {
    requestAnimFrame(loop);
    var newTime = Date.now();
    if (newTime - oldTime > 10000 / fps) {
      oldTime = newTime;
      ctx.clearRect(0, 0, cw, ch);
      shape.render();
      tick++;
    }
  }

  // window.addEventListener("resize", resize);

  setTimeout(function () {
    shape = new Shape();
    // resize();
    loop();
  }, 50);
}

/*-----------------------------------------------------------------------------------*/
/*  SVG Path Animation on Scroll
/*-----------------------------------------------------------------------------------*/

if (homePage) {
  var topPath = document.querySelector("#top-path");
  var bottomPath = document.querySelector("#bottom-path");
  var textContainer = document.querySelector(".text-container");
  var path = document.querySelector(topPath.getAttribute("href"));

  var pathLength = path.getTotalLength();
  console.log(pathLength);

  function updateTopTextPathOffset(offset) {
    topPath.setAttribute("startOffset", offset - 400);
  }

  function updateBottomTextPathOffset(offset) {
    bottomPath.setAttribute("startOffset", offset - 400);
  }

  updateTopTextPathOffset(pathLength);

  updateBottomTextPathOffset(pathLength);

  function animateSVGPath() {
    requestAnimationFrame(function () {
      var rect = textContainer.getBoundingClientRect();
      var scrollPercent = rect.y / window.innerHeight;
      console.log(scrollPercent);
      updateTopTextPathOffset(scrollPercent * 2 * pathLength);
      updateBottomTextPathOffset(-scrollPercent * 2 * pathLength);
    });
  }
}

/*-----------------------------------------------------------------------------------*/
/*  Update On First Scroll
/*-----------------------------------------------------------------------------------*/

var scrollPos = 0;

const sideVisualContainer = document.querySelector(".side-visual");
const body = document.querySelector("body");
const bottomInfo = document.querySelector(".contact-info");
const logoMask = document.querySelector(".logo-part");
const logoSignature = document.querySelector(".logo-signature");

function updateOnScroll() {
  var topY = body.getBoundingClientRect().top;
  var bottomY = bottomInfo.getBoundingClientRect().top;
  topY < 0 ? (header.classList.add("scrolled"), logoMask.classList.add("scrolled")) : (header.classList.remove("scrolled"), logoMask.classList.remove("scrolled"));

  if (bottomY < window.innerHeight / 2) {
    sideVisualContainer.classList.remove("scrolled");
  }
}

/*-----------------------------------------------------------------------------------*/
/*  Anchor Smooth Scroll
/*-----------------------------------------------------------------------------------*/

function anchorLinkHandler(e) {
  const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function () {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      // window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 2000);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach((each) => (each.onclick = anchorLinkHandler));

/*-----------------------------------------------------------------------------------*/
/*  Global Event Listeners
/*-----------------------------------------------------------------------------------*/

window.addEventListener("scroll", function () {
  requestAnimationFrame(updateOnScroll);
  if (homePage) {
    animateSVGPath();
  }
  revealHor(revealX);
  revealVer(revealY);
  revealWork();
  // requestAnimationFrame(revealCover);
});

/*-----------------------------------------------------------------------------------*/
/*  On Load - Functions
/*-----------------------------------------------------------------------------------*/

function init() {
  revealHor(revealX);
  revealVer(revealY);
  revealWork();

  // console.log("Height of the doc is: " + docHeight);
}

window.onload = init;
