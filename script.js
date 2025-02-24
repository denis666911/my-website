// Получаем элементы
const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// Открытие всплывающего окна при клике на кнопку
contactButton.onclick = function() {
    contactModal.style.display = "block";
}

// Закрытие окна при клике на крестик
closeModal.onclick = function() {
    contactModal.style.display = "none";
}

// Закрытие окна при клике за пределами окна
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}
