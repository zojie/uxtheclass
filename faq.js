let faqForm = document.querySelector('#faq-form');

  faqForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(faqForm);
    fetch(faqForm.getAttribute('action'), {
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
          "Your message has been recorded successfully !",
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
