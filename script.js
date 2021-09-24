const questions = [
  {
    ques: "What is money4you.financial's CEO Name ?",
    a: "Peter Parker",
    b: "Peter Rada",
    c: "Harry Potter",
    d: "Vin Diesel",
    e: "Dwayne Johnson",
    crct: "Peter Rada"
  },
  {
    ques: "What is name of money4you.financial company?",
    a: "FANFI MMC",
    b: "AZCOND MMC",
    c: "PENFI MMC",
    d: "AZƏRSU ASC",
    e: "IMMOBILIEN MMC",
    crct: "FANFI MMC"
  },
  {
    ques: "Where is location of money4you.financial in Baku?",
    a: "Koroghlu",
    b: "Icerisheher",
    c: "Neftchiler",
    d: "Sahil",
    e: "20 January",
    crct: "Koroghlu"
  },
  {
    ques: "Capital of Azerbaijan?",
    a: "Sumgait",
    b: "Baku",
    c: "Gandja",
    d: "Mingachevir",
    e: "Shabran",
    crct: "Baku"
  },
  {
    ques: "Capital of Turkey?",
    a: "Istanbul",
    b: "Rize",
    c: "Ankara",
    d: "Trabzon",
    e: "Cyprus",
    crct: "Ankara"
  }
];

const quizBox = document.querySelector('.quiz');
const scoreTab = document.querySelector('#score');
score = 0;
i = 0;
order = 1;

quizBox.innerHTML = `
<h3 class="question">${order} - ${questions[i].ques}</h3>
<div class="questions">
  <div class="ans-box"><span onclick="ans(this)">A</span><p class="answers a">${questions[i].a}</p></div>
  <div class="ans-box"><span onclick="ans(this)">B</span><p class="answers b">${questions[i].b}</p></div>
  <div class="ans-box"><span onclick="ans(this)">C</span><p class="answers c">${questions[i].c}</p></div>
  <div class="ans-box"><span onclick="ans(this)">D</span><p class="answers d">${questions[i].d}</p></div>
  <div class="ans-box"><span onclick="ans(this)">E</span><p class="answers e">${questions[i].e}</p></div>
</div>
`;

function nextBtn(){
  ++i;
  ++order;
  if(i>questions.length-1){i=0;}
  if(order>questions.length){order=1;}
  html = `
  <h3 class="question">${order} - ${questions[i].ques}</h3>
  <div class="questions">
    <div class="ans-box"><span onclick="ans(this)">A</span><p class="answers a">${questions[i].a}</p></div>
    <div class="ans-box"><span onclick="ans(this)">B</span><p class="answers b">${questions[i].b}</p></div>
    <div class="ans-box"><span onclick="ans(this)">C</span><p class="answers c">${questions[i].c}</p></div>
    <div class="ans-box"><span onclick="ans(this)">D</span><p class="answers d">${questions[i].d}</p></div>
    <div class="ans-box"><span onclick="ans(this)">E</span><p class="answers e">${questions[i].e}</p></div>
  </div>`;
  quizBox.innerHTML = html;
}

function prevBtn(){
  if(i===0){i=questions.length}
  if(order===1){order=questions.length+1}
  --i; --order;
  html = `
  <h3 class="question">${order} - ${questions[i].ques}</h3>
  <div class="questions">
    <div class="ans-box"><span onclick="ans(this)">A</span><p class="answers a">${questions[i].a}</p></div>
    <div class="ans-box"><span onclick="ans(this)">B</span><p class="answers b">${questions[i].b}</p></div>
    <div class="ans-box"><span onclick="ans(this)">C</span><p class="answers c">${questions[i].c}</p></div>
    <div class="ans-box"><span onclick="ans(this)">D</span><p class="answers d">${questions[i].d}</p></div>
    <div class="ans-box"><span onclick="ans(this)">E</span><p class="answers e">${questions[i].e}</p></div>
  </div>`;
  quizBox.innerHTML = html;
}

function ans(e){
  if(e.nextElementSibling.textContent === questions[i].crct){
    score++;
  }else { 
    --score;
  }
  if(score<0){
    score = 0;
  }else if(score>questions.length){
    score = questions.length
  }
  scoreTab.innerHTML = score;


}













// Particles Javascript
// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );





