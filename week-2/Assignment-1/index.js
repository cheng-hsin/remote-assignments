const changeText = document.querySelector('#change-text');
const btn = document.querySelector('.btn');

changeText.addEventListener('click', () => {
  changeText.innerHTML = 'Have a Good Time!';
  console.log('you clicked on the header');
});

btn.addEventListener('click', () => {
  document.querySelector('.img2').style.display = 'block';
  console.log('you clicked on the button');
});
