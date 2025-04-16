
const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
        alert("Koltuklarınızı ayırdığınız için teşekkür ederiz. Yakında Telefon Numaranıza ve Posta Kimliğinize onaylar için bir mesaj gönderilecektir!");
        form.reset();
    } else {
        alert("Please fill out all required fields!");
    }
});
