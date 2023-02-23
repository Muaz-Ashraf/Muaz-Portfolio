(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  document.querySelector("#copy-btn-1").addEventListener("click", () => {
    navigator.clipboard.writeText(
      document.querySelector("#copy-number").innerHTML
    );
  });
  document.querySelector("#copy-btn-2").addEventListener("click", () => {
    navigator.clipboard.writeText(
      document.querySelector("#copy-email").innerHTML
    );
  });
})();
