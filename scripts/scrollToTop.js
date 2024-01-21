const btnScrollToTop = document.getElementById("btnScrollToTop");

function seeIfScrolled() {
  if (window.scrollY > 100) { 
    btnScrollToTop.classList.add("active");
  } else {
    btnScrollToTop.classList.remove("active");
  }
}

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", seeIfScrolled);

seeIfScrolled();