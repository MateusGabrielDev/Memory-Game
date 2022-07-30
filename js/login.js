const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');

const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return
  }

  button.setAttribute('disabled', '');
}

input.addEventListener('input', validateInput);