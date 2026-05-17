let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  let name =
  document.querySelector('input[placeholder="Full Name"]').value;

  let email =
  document.querySelector('input[placeholder="Email Address"]').value;

  let message =
  document.querySelector("textarea").value;

  let phoneNumber = "916353141693";

  let whatsappMessage =
`Hello Aafrin,

Name: ${name}
Email: ${email}

Message:
${message}`;

  let url =
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank");

});
