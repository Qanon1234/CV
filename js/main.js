document.addEventListener("DOMContentLoaded", () => {
  // skapa knappen
  const btn = document.createElement("button");
  btn.id = "toTopBtn";
  btn.setAttribute("aria-label", "Till toppen");
  btn.textContent = "↑";

  //  styling av knappen
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    padding: "10px 14px",
    fontSize: "18px",
    lineHeight: "1",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#145c4d",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
    display: "none",
    zIndex: "9999"
  });

  btn.addEventListener("mouseenter", () => (btn.style.backgroundColor = "#0f4b3f"));
  btn.addEventListener("mouseleave", () => (btn.style.backgroundColor = "#145c4d"));

  document.body.appendChild(btn);

  // visa/dölj beroende på scroll
  const toggle = () => {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    btn.style.display = y > 300 ? "block" : "none";
  };

  window.addEventListener("scroll", toggle, { passive: true });

  // klick => mjuk scroll till toppen
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // initialt läge
  toggle();
});
