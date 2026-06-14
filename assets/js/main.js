// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => obs.observe(el));
}

// Contact form (no backend — opens mail client)
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Permintaan Penawaran - " + (data.get("nama") || ""));
    const body = encodeURIComponent(
      "Nama: " + (data.get("nama") || "") +
      "\nPerusahaan: " + (data.get("perusahaan") || "") +
      "\nTelepon: " + (data.get("telepon") || "") +
      "\nLayanan: " + (data.get("layanan") || "") +
      "\n\nPesan:\n" + (data.get("pesan") || "")
    );
    window.location.href = `mailto:direktur.ptrgtp@gmail.com?subject=${subject}&body=${body}`;
    const note = document.getElementById("form-note");
    if (note) note.textContent = "Membuka aplikasi email Anda…";
  });
}
