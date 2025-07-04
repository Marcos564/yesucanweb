
var map = L.map('map').setView([-34.61, -58.36], 15);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);


const hamburgerBtn = document.getElementById("hamburguesa");
const navLinks = document.getElementById("barra-superior");


hamburgerBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');

});

const barra_superior = document.getElementById("barra-superior");

barra_superior.addEventListener('click', ()=>{
  navLinks.classList.remove('active')
})
