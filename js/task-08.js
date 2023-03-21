
const elemButton = document.querySelector('.login-form');

elemButton.addEventListener('submit', (event) => { 
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (!email.value || !password.value) {
    alert(`Всі поля "${email.name}" та "${password.name}" повинні бути заповнені`);
  }
  
  const inputData = {
    email: email.value,
    password: password.value,
  }

  console.log(inputData);
  elemButton.reset();
});