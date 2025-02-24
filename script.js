document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "rotateY(10deg) scale(1.05)";
        });
        
        card.addEventListener("mouseout", () => {
            card.style.transform = "rotateY(0) scale(1)";
        });
    });

    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
        alert("Добро пожаловать в моё портфолио!");
    });
});