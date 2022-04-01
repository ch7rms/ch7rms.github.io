particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffc0cb"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#ffc0cb"
        },
        "polygon": {
          "nb_sides": 6
        },
      },
      "opacity": {
        "value": 0.1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffc0cb",
        "opacity": .4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1,
            "distance": 150,
            "color": "#ffc0cb",
            "width": 2
          },
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": .5
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  document.title = "ฅ^•ﻌ•^ฅ";
  var titleEng = true;
  setInterval(changeTitle, 4000);
  
  function changeTitle() {
      document.title = "ฅ^~ﻌ•^ฅ";
      (setTimeout(() => {  document.title = "ฅ^•ﻌ•^ฅ"; }, 1000));
  }
