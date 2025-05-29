
let menuIcons=document.querySelector('.bx');
let navbar=document.querySelector('.navbar');

menuIcons.addEventListener('click', ()=>{
    navbar.classList.toggle('nav')
})

menuIcons= () =>{
    menuIcons.classList.toggle('bx=x');
     navbar.classList.toggle('active');
}

const contactForm= document.getElementById('contact-form');
const formFeedback= document.getElementById('form-feedback');

if(contactForm){
    contactForm.addEventListener('submit', (e) => {

        formFeedback.textContent= "Thanks for reaching out! I will get back to you soon.";
        formFeedback.style.color= "green";

        contactForm.requestFullscreen();
 });
}

const cards = document.querySelectorAll('.exp-card');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
