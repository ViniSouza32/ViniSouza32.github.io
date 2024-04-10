document.addEventListener("DOMContentLoaded", function () {
  let footerContent =
    '<div class="footer">' +
      '<p class="text_footer"> &copy; 2024 <a class="link" target="_blank" href="https://twitter.com/vinisouza32"> Vinícius Schafer</a>. All Rights Reserved.</p>' 
    '</div>';

  let footer = document.getElementById("footer");

  footer.innerHTML = footerContent;
});