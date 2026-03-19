const themeToggle = document.getElementById("themeToggle");
const actionBtn = document.getElementById("actionBtn");
const dynamicText = document.getElementById("dynamicText");
const clock = document.getElementById("clock");
const revealElements = document.querySelectorAll(".reveal");

const messages = [
    "Excelente escolha. Visual mais limpo!",
    "Interacao registada com sucesso.",
    "Esta pagina ficou muito mais elegante.",
    "Pequenos detalhes fazem grande diferenca."
];

let clickCount = 0;

function updateClock() {
    const now = new Date();
    const formatted = now.toLocaleTimeString("pt-PT");
    clock.textContent = formatted;
}

function updateThemeLabel() {
    const isLight = document.body.classList.contains("light");
    themeToggle.textContent = isLight ? "Tema Escuro" : "Tema Claro";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    updateThemeLabel();
});

actionBtn.addEventListener("click", () => {
    clickCount += 1;
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    dynamicText.textContent = `${randomMessage} (Cliques: ${clickCount})`;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

revealElements.forEach((element) => observer.observe(element));

updateThemeLabel();
updateClock();
setInterval(updateClock, 1000);