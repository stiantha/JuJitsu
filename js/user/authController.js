function initializeFormEvents() {
  const form = document.querySelector(".form");
  const formElements = form.querySelectorAll("input, textarea");

  formElements.forEach(function (element) {
    element.addEventListener("keyup", function (e) {
      const label = element.previousElementSibling;

      if (e.type === "keyup") {
        if (element.value === "") {
          label.classList.remove("active", "highlight");
        } else {
          label.classList.add("active", "highlight");
        }
      }
    });

    element.addEventListener("blur", function () {
      const label = element.previousElementSibling;

      if (element.value === "") {
        label.classList.remove("active", "highlight");
      } else {
        label.classList.remove("highlight");
      }
    });

    element.addEventListener("focus", function () {
      const label = element.previousElementSibling;

      if (element.value === "") {
        label.classList.remove("highlight");
      } else if (element.value !== "") {
        label.classList.add("highlight");
      }
    });
  });

  const tabLinks = document.querySelectorAll(".form .tab a");

  tabLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const parent = link.parentElement;
      parent.classList.add("active");

      const siblings = parent.parentElement.querySelectorAll("li.tab");
      siblings.forEach(function (sibling) {
        if (sibling !== parent) {
          sibling.classList.remove("active");
        }
      });

      const target = document.querySelector(link.getAttribute("href"));
      const tabContents = form.querySelectorAll(".form .tab-content > div");

      tabContents.forEach(function (content) {
        if (content !== target) {
          content.style.display = "none";
        }
      });

      target.style.display = "block";
    });
  });
}



