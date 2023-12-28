function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let about = document.getElementById("about").value;
  let message = document.getElementById("message").value;

  let mailtoLink = "mailto:vinischafer32@gmail.com"
    + "?subject=Contact%20Form"
    + "&body=Name: " + name
    + "%0AEmail: " + email
    + "%0APhone: " + phone
    + "%0AAbout: " + about
    + "%0AMessage: " + message;

  window.location.href = mailtoLink;
}