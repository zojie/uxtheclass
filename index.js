
    let deferredPrompt = null;

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    });
    
    async function install() {
      console.log('installing');
      if (deferredPrompt) {
        deferredPrompt.prompt();
        console.log(deferredPrompt)
        deferredPrompt.userChoice.then(function(choiceResult){
    
          if (choiceResult.outcome === 'accepted') {
          console.log('Your PWA has been installed');
        } else {
          console.log('User chose to not install your PWA');
        }
    
        deferredPrompt = null;
    
        });
    
     
      }
    }
    
    // $('#installBtn').click(install);

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
// $(".sidebar").hide();

// $("#closeBtn").click(function() {
//   $(".sidebar").hide();
// });
$("#openBtn").click(function() {
  $(".sidebar").toggleClass("d-none");
  $("#openBtn").toggleClass("openBtn");
  // $('#openBtn').toggleClass('fa-bars');
  // $('#openBtn').toggleClass('fa-close');
});
$(".card-header a").click(function() {
    console.log(this.id);
    $(`#${this.id} .fa-plus, #${this.id}  .fa-minus`).toggleClass("d-none");
  });



// Lazy load all images
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