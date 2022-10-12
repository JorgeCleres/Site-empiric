AOS.init();

var largura = window.innerWidth;

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        perPage: largura < 992 ? 2 : 4,
        perMove: 1,
    } ).mount();
} );

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}