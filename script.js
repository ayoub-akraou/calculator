"use script";
const darkModeBtns = document.querySelectorAll(".dark-mode [class*='btn']");

darkModeBtns.forEach((x) =>
  x.addEventListener("click", function (e) {
    e.preventDefault();
    darkModeBtns.forEach((x) => x.classList.remove("btn-active"));
    if (e.target.closest("[class*='dark-btn']")) {
      document.documentElement.classList.add("dark");
      darkModeBtns.forEach((x) =>
        x.classList.contains("dark-btn") ? x.classList.add("btn-active") : ""
      );
    }
    if (e.target.closest("[class*='light-btn']")) {
      document.documentElement.classList.remove("dark");
      darkModeBtns.forEach((x) =>
        x.classList.contains("light-btn") ? x.classList.add("btn-active") : ""
      );
    }
  })
);
