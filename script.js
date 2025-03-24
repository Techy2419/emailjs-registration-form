document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("b-uNk6s2WC-8hJ1WN");

  const form = document.getElementById("register-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_lbx8q4e", "template_l13ojjd", this).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.title = "✅ Registered!";
        form.style.display = "none";
        document.getElementById("thank-you-message").style.display = "block";
        document
          .getElementById("thank-you-message")
          .scrollIntoView({ behavior: "smooth" });
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Oops! Something went wrong. Please try again later.");
      }
    );
  });
});
