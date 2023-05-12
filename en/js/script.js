//navlink scroll on click
const links = document.querySelectorAll('li.nav-item a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const aboutSection = document.querySelector(link.getAttribute("href"));
    let aboutSectionTop = aboutSection.offsetTop;

    const element = document.querySelector("#header");

    function getElementHeight() {
      const rect = element.getBoundingClientRect();
      return rect.height;
    }
    const elementHeight = getElementHeight();
      aboutSectionTop -= elementHeight;
    

    requestAnimationFrame(() => {
      window.scrollTo({
        top: aboutSectionTop,
        behavior: "smooth",
        easing: "ease-in",
      });
    });
  });
});

// header
var menuIcon = document.getElementById("hamIcon");
var headerDropdown = document.getElementById("headerDropdown");
var headerToggle = false;
menuIcon.addEventListener("click", function () {
  headerToggle = !headerToggle;
  if (headerToggle) {
    headerDropdown.classList.add("header_toggle");
  } else {
    headerDropdown.classList.remove("header_toggle");
  }
});
document.body.addEventListener("click", function (event) {
  if (
    event.target.closest("#headerDropdown") ||
    event.target.closest("#popup-content") ||
    event.target.closest("#pop1")
  ) {
    return;
  } else {
    headerToggle = false;
    headerDropdown.classList.remove("header_toggle");
    // popupcontainer.classList.remove('open')
  }
});

let prevScrollPosition = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;
  if (
    prevScrollPosition > currentScrollPosition &&
    prevScrollPosition < currentScrollPosition
  ) {
    document.querySelector(".header").classList.remove("header-sticky");
  } else {
    document.querySelector(".header").classList.add("header-sticky");
    headerDropdown.classList.remove("header_toggle");
  }
  prevScrollPosition = currentScrollPosition;

  var headerToggle = false;
  menuIcon.addEventListener("click", function () {
    headerToggle = !headerToggle;
    if (headerToggle) {
      headerDropdown.classList.add("header_toggle");
    } else {
      headerDropdown.classList.remove("header_toggle");
    }
  });
});

function scrollToSection(ref) {
  console.log(ref);
}

// bannertextanimation
const elements = document.querySelectorAll(".animate");

function animateElements() {
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("show");
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", animateElements);
