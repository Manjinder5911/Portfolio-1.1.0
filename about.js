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
//   let skillImageContainer = document.getElementById("skillImageContainer");
// topicContent[0].classList.add('displayWords');
  const sections = document.querySelectorAll("[data-section]");
  const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
        sections[i].classList.add("active");
    if(i==1){
        let educationContainer = document.getElementById("educationContainer");
       
        // educationContainer.classList.remove('educationMove');
        educationContainer.classList.add('rotateImg');
        // skillImageContainer.classList.add('skillMove');
    }
      } else {
        sections[i].classList.remove("active");
        if(i==1){
            let educationContainer = document.getElementById("educationContainer");
            // educationContainer.classList.add('educationMove');
            educationContainer.classList.remove('rotateImg');
            // skillImageContainer.classList.remove('skillMove');
        }
        // if(i==0){
        // topicContent[0].classList.remove('displayWords');
        // }
    }
  }}
  
  scrollReveal();
  
  addEventOnElem(window, "scroll", scrollReveal);
  