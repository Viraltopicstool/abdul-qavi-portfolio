// Shared JavaScript for Abdul Qavi's portfolio website
document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation
  document.querySelectorAll(".site-header").forEach(function (header) {
    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav-links");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      toggle.textContent = open ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
        toggle.textContent = "☰";
      });
    });
  });

  // Scroll reveal animations
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  }

  // Automatic footer year
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form: opens the visitor's email app. Configure your email below.
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const recipient = "YOUR_EMAIL@example.com"; // Replace with your real email address
      const status = document.getElementById("form-status");
      if (recipient === "YOUR_EMAIL@example.com") {
        status.textContent = "Website owner: replace YOUR_EMAIL@example.com in js/script.js before publishing.";
        return;
      }
      const data = new FormData(form);
      const subject = "Portfolio enquiry from " + data.get("name");
      const body = [
        "Name: " + data.get("name"),
        "Email: " + data.get("email"),
        "Service: " + data.get("service"),
        "",
        "Message:",
        data.get("message")
      ].join("\n");
      status.textContent = "Opening your email application...";
      window.location.href = "mailto:" + recipient + "?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
});
