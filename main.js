
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C++', 'C#',
    'Python','git','github',
    '.NET', 'MySQL','AWS',
    'Bootstrap'
];

//set radius of word cloud
if(screen.width>1580){
  document.querySelectorAll(".sphere")[0].innerHTML = "";
  var tagCloud = TagCloud('.sphere', myTags,{
  radius:270,maxSpeed:'fast',initSpeed:'fast',
  direction:135,keep:true
})
}
else if((screen.width<1580)&&(screen.width>980)){
  document.querySelectorAll(".sphere")[0].innerHTML = "";
  var tagCloud = TagCloud('.sphere', myTags,{
    radius:180,maxSpeed:'fast',initSpeed:'fast',
    direction:135,keep:true
  })
}
else if((screen.width<980)&&(screen.width>780)){
document.querySelectorAll(".sphere")[0].innerHTML = "";
var tagCloud = TagCloud('.sphere', myTags,{
  radius:140,maxSpeed:'fast',initSpeed:'fast',
  direction:135,keep:true
})
}
else if((screen.width<780)&&(screen.width>580)){
document.querySelectorAll(".sphere")[0].innerHTML = "";
var tagCloud = TagCloud('.sphere', myTags,{
  radius:120,maxSpeed:'fast',initSpeed:'fast',
  direction:135,keep:true
})
}
else if((screen.width<590)&&(screen.width>435)){
document.querySelectorAll(".sphere")[0].innerHTML = "";
var tagCloud = TagCloud('.sphere', myTags,{
  radius:90,maxSpeed:'fast',initSpeed:'fast',
  direction:135,keep:true
})
}
else if((screen.width<435)){
document.querySelectorAll(".sphere")[0].innerHTML = "";
var tagCloud = TagCloud('.sphere', myTags,{
  radius:70,maxSpeed:'fast',initSpeed:'fast',
  direction:135,keep:true
})
}

// var tagCloud = TagCloud('.sphere', myTags,{

//   // radius in px

//   radius: 250,

//   // animation speed
//   // slow, normal, fast
//   maxSpeed: 'fast',
//   initSpeed: 'fast',

//   // 0 = top
//   // 90 = left
//   // 135 = right-bottom
//   direction: 135,
  
//   // interact with cursor move on mouse out
//   keep: true
  
// });

//To change the color of text randomly
// var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
// var random_color = colors[Math.floor(Math.random() * colors.length)];
// document.querySelector('.sphere').style.color = '#00897B';
document.querySelector('.sphere').style.color = '#decd63';


window.addEventListener('resize', ()=>{
  if(screen.width>1580){
    document.querySelectorAll(".sphere")[0].innerHTML = "";
    var tagCloud = TagCloud('.sphere', myTags,{
    radius:270,maxSpeed:'fast',initSpeed:'fast',
    direction:135,keep:true
  })
  }
  else if((screen.width<1580)&&(screen.width>980)){
        document.querySelectorAll(".sphere")[0].innerHTML = "";
        var tagCloud = TagCloud('.sphere', myTags,{
          radius:190,maxSpeed:'fast',initSpeed:'fast',
          direction:135,keep:true
        })
      }
    else if((screen.width<980)&&(screen.width>780)){
      document.querySelectorAll(".sphere")[0].innerHTML = "";
      var tagCloud = TagCloud('.sphere', myTags,{
        radius:140,maxSpeed:'fast',initSpeed:'fast',
        direction:135,keep:true
      })
    }
    else if((screen.width<780)&&(screen.width>580)){
      document.querySelectorAll(".sphere")[0].innerHTML = "";
      var tagCloud = TagCloud('.sphere', myTags,{
        radius:120,maxSpeed:'fast',initSpeed:'fast',
        direction:135,keep:true
      })
    }
    else if((screen.width<590)&&(screen.width>435)){
      document.querySelectorAll(".sphere")[0].innerHTML = "";
      var tagCloud = TagCloud('.sphere', myTags,{
        radius:90,maxSpeed:'fast',initSpeed:'fast',
        direction:135,keep:true
      })
    }
    else if((screen.width<435)){
      document.querySelectorAll(".sphere")[0].innerHTML = "";
      var tagCloud = TagCloud('.sphere', myTags,{
        radius:70,maxSpeed:'fast',initSpeed:'fast',
        direction:135,keep:true
      })
    }
});





var projRoaming = document.getElementById("roamingRazors");
var RoamingSection = document.getElementById("RoamingImgSection");
var firstSection = document.getElementById("section");
var body = document.getElementById("body");
let crossDiv = document.getElementById("crossDiv");
let projectCard = document.querySelectorAll(".project-card");
let indexStore = 0;
let projectDisplay = document.getElementById("projectDisplay");

let projectImgSection = document.getElementById("projectImgSection");
let prevDisplayBtn = document.getElementById("prevDisplayBtn");
let nextDisplayBtn = document.getElementById("nextDisplayBtn");
let RoamingVideo = document.getElementById("RoamingVideo");
let buttonSection = document.querySelectorAll(".buttonSection");
let j = 0;
let imageUrlPathArray = ["img/RoamingRazors/RoamingRazors.jpeg",
"img/RoamingRazors/RoamingRazor2.png","img/RoamingRazors/RoamingRazor3.png",
"img/RoamingRazors/RoamingRazor4.png"
]
let imageUrlFoodDelivery = ["img/FoodDelivery/FoodDelivery.png",
  "img/FoodDelivery/foodDelivery2.png", "img/FoodDelivery/foodDelivery3.png",
  "img/FoodDelivery/foodDelivery4.png"
]
let RoamingContent = document.getElementById("RoamingContent");
let FoodContent = document.getElementById("FoodContent");

projectCard.forEach((element,index) => {
  element.addEventListener('click',()=>{
    if((index==0)||(index==2)){
      indexStore = index;
      if(index==0){
        projectImgSection.style.background = `url(${imageUrlPathArray[0]})`;
        RoamingContent.style.display = "block";
      }
      else{
        projectImgSection.style.background = `url(${imageUrlFoodDelivery[0]})`;
        FoodContent.style.display = "block";
      }
      projectDisplay.style.display = "flex";
      body.style.overflow = "hidden";
    }
  })
});
// projectCard[0].addEventListener('click',()=>{
//   projectDisplay.style.display = "flex";
//   body.style.overflow = "hidden";
// })

nextDisplayBtn.addEventListener('click',()=>{
  //we have one video also that's why .length
  if(indexStore==0){
    if(j==imageUrlPathArray.length){
      j=0;
    }
    else{
      j++;
    }
    if(j == 1){
      projectImgSection.style.background = "transparent";
      RoamingVideo.style.display = "block";
      buttonSection[0].style.alignItems = "center";
    }
    else{
      RoamingVideo.style.display = "none";
      buttonSection[0].style.alignItems = "end";
      if(j>1){
        projectImgSection.style.background = `url(${imageUrlPathArray[j-1]})`;
      }
      else{
        projectImgSection.style.background = `url(${imageUrlPathArray[j]})`;
      }
    }
  }
  else if(indexStore == 2){
    if(j==imageUrlFoodDelivery.length-1){
      j=0;
    }
    else{
      j++;
    }
    // RoamingVideo.style.display = "none";
    projectImgSection.style.background = `url(${imageUrlFoodDelivery[j]})`;
  }
 
})

prevDisplayBtn.addEventListener('click',()=>{
  //we have one video also that's why .length
  if(indexStore==0){
  if(j==0){
    j=imageUrlPathArray.length;
  }
  else{
    j--;
  }
  if(j == 1){
    projectImgSection.style.background = "transparent";
    RoamingVideo.style.display = "block";
    buttonSection[0].style.alignItems = "center";
  }
  else{
    RoamingVideo.style.display = "none";
    buttonSection[0].style.alignItems = "end";
    if(j>1){
      projectImgSection.style.background = `url(${imageUrlPathArray[j-1]})`;
    }
    else{
      projectImgSection.style.background = `url(${imageUrlPathArray[j]})`;
    }
  }
  }
  else if(indexStore == 2){
    if(j==0){
      j=imageUrlFoodDelivery.length=1;
    }
    else{
      j--;
    }
    // RoamingVideo.style.display = "none";
    projectImgSection.style.background = `url(${imageUrlFoodDelivery[j]})`;
  }
})

// projectCard.forEach((element,index) => {
//   element.addEventListener('click',(e)=>{
//     projectDisplay.style.display = "flex";
//     body.style.overflow = "hidden";
//   })
// });

// projRoaming.addEventListener('click', (e)=>{
//   RoamingSection.style.display = "flex";
//   body.style.overflow = "hidden";
//   firstSection.style.display = "none";

// });

crossDiv.addEventListener('click', (e)=>{
  // RoamingSection.style.display = "none";
  projectImgSection.style.background = "transparent";
  RoamingContent.style.display = "none";
  FoodContent.style.display = "none";
  body.style.overflowY = "scroll";
  projectDisplay.style.display = "none";
  j=0;
  // body.style.overflow = "hidden";

});



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * scroll revreal effect
 */
let widthArray = [65,65,75,80,80,80,65,50,70,70];
const sections = document.querySelectorAll("[data-section]");
let skillFill = document.querySelectorAll(".skillFill");
const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
      if(i == 1){
      for(let j = 0;j<skillFill.length;j++){
        if((j==0)||(j==1)||(j==6)){
          skillFill[j].classList.add('skillWidthChange1');
        }
        else if(j==2){skillFill[j].classList.add('skillWidthChange2');}
        else if((j==3)||(j==4)||(j==5)){skillFill[j].classList.add('skillWidthChange3');}
        else if(j==7){skillFill[j].classList.add('skillWidthChange4');}
        else if((j==8)||(j==9)){skillFill[j].classList.add('skillWidthChange5');}
      } 
      }
    } else {
      sections[i].classList.remove("active");
      if(i == 1){
        for(let j = 0;j<skillFill.length;j++){
          if((j==0)||(j==1)||(j==6)){
            skillFill[j].classList.remove('skillWidthChange1');
          }
          else if(j==2){skillFill[j].classList.remove('skillWidthChange2');}
          else if((j==3)||(j==4)||(j==5)){skillFill[j].classList.remove('skillWidthChange3');}
          else if(j==7){skillFill[j].classList.remove('skillWidthChange4');}
          else if((j==8)||(j==9)){skillFill[j].classList.remove('skillWidthChange5');}
        } 
        }

  }
}}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



