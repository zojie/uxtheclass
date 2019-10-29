
// $("#subscribtion-form").submit(function(e) {
//     e.preventDefault();
//     var $form = $(this);
//     $.post($form.attr("action"), $form.serialize()).then(function() {
//       alert("Your have successfully subcribed to our news letter.Thank you!");
//     });
//   });
// Swal.fire(
//   'Thanks!',
//   "You've Successful Subscribed to our news letter!",
//   'success');
let subForm = document.querySelector('#subscribtion-form');
let faqForm = document.querySelector('#faq-form');

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

$(document).ready(function() {
  $(".dropdownDiv,.dropdownBtn, .dropdown-content").mouseover(function() {
    $("#bgWhite").css("background-color", "white");
    $(".navLinks, .darkOnHover").css("color", "black");
    $('#whiteLogo, #blackLogo').toggleClass('d-none');
  });
  $(".dropdownDiv,.dropdownBtn").click(function() {
    $('#whiteLogo, #blackLogo').toggleClass('d-none');
  });
  $(".dropdown-content").mouseover(function() {
    $(".dropdownBtn").css("color", "black");
    $('#whiteLogo, #blackLogo').toggleClass('d-none');
  });
  $(".dropdown-content").mouseout(function() {
    $('#whiteLogo, #blackLogo').toggleClass('d-none');
    $(".dropdownBtn").css("color", "white");
  });
  $(".dropdownBtn, .dropdown-content").mouseout(function() {
    $('#whiteLogo, #blackLogo').toggleClass('d-none');
    $("#bgWhite").css("background", "transpparent");
    $("#bgWhite").css("background", "none");
    $(".navLinks, .darkOnHover").css("color", "white");
  });
});
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}





$("#openBtn").click(function() {
  $(".sidebar").toggleClass("d-none");
  $("#openBtn").toggleClass("openBtn");
  
  
});
$(".card-header a").click(function() {
    console.log(this.id);
    $(`#${this.id} .fa-plus, #${this.id}  .fa-minus`).toggleClass("d-none");
  });




  const images = document.querySelectorAll("img");
  let options = {};

  const handleIntersectImg = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      } else {
      }
    });
  };

  observeImg = new IntersectionObserver(handleIntersectImg, options);

  images.forEach(image => {
  observeImg.observe(image);
  });