// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
if (navToggle && mobileMenu) {
  navToggle.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobileMenu.classList.add("hidden"))
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
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => obs.observe(el));
}

// Contact form -> mailto
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = encodeURIComponent("Permintaan Penawaran - " + (d.get("nama") || ""));
    const body = encodeURIComponent(
      "Nama: " + (d.get("nama") || "") +
      "\nPerusahaan: " + (d.get("perusahaan") || "") +
      "\nTelepon: " + (d.get("telepon") || "") +
      "\nLayanan: " + (d.get("layanan") || "") +
      "\n\nPesan:\n" + (d.get("pesan") || "")
    );
    window.location.href = `mailto:direktur.ptrgtp@gmail.com?subject=${subject}&body=${body}`;
    const note = document.getElementById("form-note");
    if (note) note.textContent = "Membuka aplikasi email Anda…";
  });
}
