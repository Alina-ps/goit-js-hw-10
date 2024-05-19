import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const stateValue = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  2000;
  promise
    .then(value => {
      iziToast.success({
        title: 'Success',
        message: value,
        backgroundColor: '#59A10D',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        backgroundColor: '#EF4040',
      });
    });

  form.reset();
});
