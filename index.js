const msgModal = ` <div class="modal fade" id="exampleLoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-sm modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title bolder" id="exampleModalLabel">Hello there!</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body ">
        <span class="text-center bold redText">Enrollment begins January 13th 2020</span>
    </div>
  </div>
</div>
</div>`;

$('body').append(msgModal);
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
    // console.log(this.id);
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

  let observeImg = new IntersectionObserver(handleIntersectImg, options);

  images.forEach(image => {
  observeImg.observe(image);
  });