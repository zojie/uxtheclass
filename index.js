$(document).ready(function() {
  $(".dropdownDiv,.dropdownBtn, .dropdown-content").mouseover(function() {
    $("#bgWhite").css("background-color", "white");
    $(".navLinks, .darkOnHover").css("color", "black");
  });
  $(".dropdown-content").mouseover(function() {
    $(".dropdownBtn").css("color", "black");
  });
  $(".dropdown-content").mouseout(function() {
    $(".dropdownBtn").css("color", "white");
  });
  $(".dropdownBtn, .dropdown-content").mouseout(function() {
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
$(".sidebar").hide();

$("#closeBtn").click(function() {
  $(".sidebar").hide();
});
$("#openBtn").click(function() {
  $(".sidebar").toggleClass("showSidebar");
  $("#openBtn").toggleClass("openBtn");
  // $('#openBtn').toggleClass('fa-bars');
  // $('#openBtn').toggleClass('fa-close');
});
$(".card-header a").click(function() {
    console.log(this.id);
    $(`#${this.id} .fa-plus, #${this.id}  .fa-minus`).toggleClass("d-none");
  });