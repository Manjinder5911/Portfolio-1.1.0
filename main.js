
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C++', 'C#',
    'Python','git','github',
    '.NET', 'MySQL','AWS',
    'Bootstrap'
];

var tagCloud = TagCloud('.sphere', myTags,{

  // radius in px

  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.sphere').style.color = '#00897B';
document.querySelector('.sphere').style.color = '#decd63';


// Projects more and less section
var projPart2 = document.getElementsByClassName("projPart2");
var moreBtn = document.getElementsByClassName("moreBtn");
var lessBtn = document.getElementsByClassName("LessBtn");


// moreBtn[0].addEventListener('click',  (e)=>{
//   moreBtn[0].style.display = "none";
//   projPart2[0].style.display = "block";
// });
// lessBtn[0].addEventListener('click',  (e)=>{
//   moreBtn[0].style.display = "block";
//   projPart2[0].style.display = "none";
// });


// moreBtn[1].addEventListener('click',  (e)=>{
//   moreBtn[1].style.display = "none";
//   projPart2[1].style.display = "block";
// });
// lessBtn[1].addEventListener('click',  (e)=>{
//   moreBtn[1].style.display = "block";
//   projPart2[1].style.display = "none";
// });


// moreBtn[2].addEventListener('click',  (e)=>{
//   moreBtn[2].style.display = "none";
//   projPart2[2].style.display = "block";
// });
// lessBtn[2].addEventListener('click',  (e)=>{
//   moreBtn[2].style.display = "block";
//   projPart2[2].style.display = "none";
// });

// moreBtn[3].addEventListener('click',  (e)=>{
//   moreBtn[3].style.display = "none";
//   projPart2[3].style.display = "block";
// });
// lessBtn[3].addEventListener('click',  (e)=>{
//   moreBtn[3].style.display = "block";
//   projPart2[3].style.display = "none";
// });

// moreBtn[4].addEventListener('click',  (e)=>{
//   moreBtn[4].style.display = "none";
//   projPart2[4].style.display = "block";
// });
// lessBtn[4].addEventListener('click',  (e)=>{
//   moreBtn[4].style.display = "block";
//   projPart2[4].style.display = "none";
// });

// moreBtn[5].addEventListener('click',  (e)=>{
//   moreBtn[5].style.display = "none";
//   projPart2[5].style.display = "block";
// });
// lessBtn[5].addEventListener('click',  (e)=>{
//   moreBtn[5].style.display = "block";
//   projPart2[5].style.display = "none";
// });

// moreBtn[6].addEventListener('click',  (e)=>{
//   moreBtn[6].style.display = "none";
//   projPart2[6].style.display = "block";
// });
// lessBtn[6].addEventListener('click',  (e)=>{
//   moreBtn[6].style.display = "block";
//   projPart2[6].style.display = "none";
// });

var projRoaming = document.getElementById("roamingRazors");
var RoamingSection = document.getElementById("RoamingImgSection");
var firstSection = document.getElementById("section");
var body = document.getElementById("body");
var close = document.getElementById("close");

// projRoaming.addEventListener('click', (e)=>{
//   RoamingSection.style.display = "flex";
//   body.style.overflow = "hidden";
//   firstSection.style.display = "none";

// });

// close.addEventListener('click', (e)=>{
//   RoamingSection.style.display = "none";
//   body.style.overflow = "scroll";
//   firstSection.style.display = "flex";

// });

//move projects next
let nextProject = document.getElementById("nextProject");
let prevIndex = 0,currentIndex=1,nextIndex=2;





let projectDisplay = document.getElementById("projectDisplay");
let projectImageTag = document.querySelectorAll(".projectImageTag");
let projectCardControl = document.querySelectorAll(".projectCardControl");
// projectCardControl[nextIndex].style.transform = "skew(-7deg, 26deg)";


document.querySelectorAll(".projectCard")[0].style.left = `${(projectDisplay.offsetWidth/2)-(projectImageTag[prevIndex].offsetWidth/2)}px`;
//eventlistener for pressing next btn for project
nextProject.addEventListener('click',(e)=>{
  let leftPosition = (projectDisplay.offsetWidth/2)-(projectImageTag[prevIndex].offsetWidth/2);
// centre card to right
  projectCardControl[currentIndex].style.position = "absolute";
  projectCardControl[currentIndex].style.top = "125px";
  projectCardControl[currentIndex].style.animation = "swipeLeftToRight2 1s forwards";
  projectCardControl[currentIndex].style.left = `${(projectDisplay.offsetWidth)-((projectImageTag[currentIndex].offsetWidth)*Math.cos((Math.PI*24)/180))}px`;
  // document.querySelectorAll(".projectCard")[0].classList.add = "projectCard2";
  // document.querySelectorAll(".projectCard")[0].classList.remove = "projectCard";

  //left card to centre
  projectCardControl[prevIndex].style.left = `${leftPosition}px`;
  projectCardControl[prevIndex].style.top = `0px`;
  projectCardControl[prevIndex].style.animation = "swipeLeftToRight1 1s forwards";
//right to disappear
projectCardControl[nextIndex].style.top = "350px";
projectCardControl[nextIndex].style.right = "-600px";
let j = nextIndex;
// setInterval(() => {

//   projectCardControl[j].style.display = "none";
// }, 2000);

nextIndex = currentIndex
currentIndex = prevIndex;
if(prevIndex  == 0){

  prevIndex = projectCardControl.length-1;
}
else{
  prevIndex--;
}
//bring prev to left at left's place
// projectCardControl[prevIndex].style.display = "block !important";
// projectCardControl[prevIndex].classList.add = "transformRightToLeftForm";
// projectCardControl[prevIndex].style.top = "125px";
projectCardControl[prevIndex].style.top = "350px";
// projectCardControl[prevIndex].style.left = "22px";
projectCardControl[prevIndex].style.left = "-600px";
// projectCardControl[prevIndex].style.transform = "skew(7deg,- 26deg)";
// document.querySelectorAll(".projectCard2")[0].style.transform = "skew(7deg,- 26deg)";
projectCardControl[prevIndex].style.animation = "swipeLeftToRight0 1s forwards";




});




