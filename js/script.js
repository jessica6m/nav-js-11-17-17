var navToggle = document.querySelector('#main-nav-toggle');
var navList = document.querySelector('#main-nav-list');



//Always check to see if elements exist before writing js involving those elements by console.log a message
if (navToggle && navList){
  navToggle.addEventListener('click', function (event){
    // This checks to seee if the element has the class of close on it
    console.log(event);
    if (navToggle.classList.contains('close')) {
      navToggle.classList.remove("close");
      navList.classList.remove("open");
    } else {
      navToggle.classList.add('close');
      navList.classList.add('open');
    }
  });
}
