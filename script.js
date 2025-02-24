// Добавим базовую интерактивность для формы, например, валидацию перед отправкой

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем отправку формы по умолчанию

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Спасибо за ваше сообщение, я свяжусь с вами скоро!');
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
});

