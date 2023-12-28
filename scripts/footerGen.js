document.addEventListener("DOMContentLoaded", function () {
  let footerContent =
    '<div class="footer">' +
      '<a href="index.html" class="name-footer">Vini Souza</a>' +
      '<div class="footer-links">' +
        '<a class="links" target="_blank" href="https://github.com/ViniSouza32">Github</a>' +
        '<a class="links" target="_blank" href="https://twitter.com/vinisouza32">Twitter | X</a>' +
        '<a class="links" target="_blank" href="https://linkedin.com/in/vinicius-schafer-07a474292">Linkedin</a>' +
      "</div>" +
    "</div>";

  let footer = document.getElementById("footer");

  footer.innerHTML = footerContent;
});