const lis = document.getElementsByClassName('app-icon');
const telecom = document.getElementById('telecom');
const phone = document.getElementById('phone');

Array.from(lis).forEach((li, index) => {
  li.addEventListener('click', () => {
    if (index == 6) {
      telecom.style.display = 'block';
      phone.style.width = '150px';
    } else {
      telecom.style.display = 'none';
      phone.style.width = '225px';
    }
  });
});
