let subForm = document.querySelector('#subscribtion-form');

  subForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(subForm);
    fetch(subForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: new URLSearchParams(formData).toString()
    })
    .then(res => {
      if (res.ok) {
        // console.log(res)
        Swal.fire(
          'Thanks!',
          "You've Successful Subscribed to our news letter!",
          'success'
        );
      }
      else{
        Swal.fire(
          'OOPS!',
          "An error Occured! Try again",
          'error'
        );
      }
    });
  });
