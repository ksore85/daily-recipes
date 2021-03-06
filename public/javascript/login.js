async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      console.log(response)
      if (response.ok) {
       document.location.replace('/');
      } else {
        alert(`Incorrect username or password`);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(`The username/email provided is already in use`);
      }
    }
  }

  async function signGoogle(event) {
    // location.href="/auth/google"
     const response = await fetch('/auth/google').catch(err => console.log(err));
  

    console.log(response)
    // if (response.ok) {
    //  document.location.replace('/');
    // } else {
    //   alert(response.statusText);
    // }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  document.querySelector('#google-sign-in').addEventListener('click', signGoogle);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);