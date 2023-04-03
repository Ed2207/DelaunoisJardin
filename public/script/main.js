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