

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const front = card.querySelector('.card-front');
  const back = card.querySelector('.card-back');
  const button = card.querySelector('.buttonMore');
  button.addEventListener('click', () => {
    card.classList.toggle('card-flip');
  });
  card.addEventListener('mouseleave', () => {
    if (card.classList.contains('card-flip')) {
      card.classList.remove('card-flip');
    }
  });
});


const backToTopButton = document.querySelector('.backToTop')
window.addEventListener('scroll', ()=>{
  if (window.pageYOffset >=500){
    backToTopButton.classList.add('show-back-to-top-btn')
  }
  else {
    backToTopButton.classList.remove('show-back-to-top-btn')
  }
})
backToTopButton.addEventListener('click', () =>{
  window.scrollTo({
    top:0
  })
})


