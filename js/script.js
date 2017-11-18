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

function tabs(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
