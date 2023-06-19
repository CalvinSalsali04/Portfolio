const navbar = document.querySelector("#navbar");
let lastScrollTop = 0;
let isNavbarVisible = true;

window.addEventListener("scroll", () => {
  var { pageYOffset } = window;

  if (pageYOffset > lastScrollTop) {
    if (isNavbarVisible) {
      navbar.style.transform = "translateY(-100%)";
      isNavbarVisible = false;
    }
  } else {
    if (!isNavbarVisible || pageYOffset === 0) {
      navbar.style.transform = "translateY(0)";
      isNavbarVisible = true;
    }
  }

  lastScrollTop = pageYOffset <= 0 ? 0 : pageYOffset;
}, { passive: true });


document.querySelector('a[href="projects"]').addEventListener('click', function (e){
  e.preventDefault();

  const projectsSection = document.querySelector('#projects');
  projectsSection.scrollIntoView({
    behavior:"smooth"
  });
    
});

document.querySelector('a[href="#contact').addEventListener('click', function (e){
  e.preventDefault();

  const contactSection = document.querySelector('#contact');
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
});



