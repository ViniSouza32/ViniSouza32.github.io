document.addEventListener("DOMContentLoaded", function () {
  let footerContent =
    '<div class="footer">' +
      '<p class="text_footer"> &copy; 2024. All Rights Reserved.</p>' 
    '</div>';

  let footer = document.getElementById("footer");

  footer.innerHTML = footerContent;
});