const dataUtama = document.getElementById('data-utama');
const dataPelengkap = document.getElementById('data-pelengkap');
const btnNext = document.getElementById('next');
const btnBack = document.getElementById('back');

btnNext.addEventListener('click', () => {
    fadeOut(dataUtama);
    setTimeout(() => {
        dataKelengkapan();
        fadeIn(dataPelengkap);
    }, 500);
});

function fadeIn(element) {
    element.style.opacity = 1;
    element.style.transition = "opacity 0.5s ease-in-out";
}

function fadeOut(element) {
    element.style.opacity = 0;
    element.style.transition = "opacity 0.5s ease-in-out";
}

function dataPribadi() {
    dataUtama.style.display = "block";
    dataPelengkap.style.display = "none";
}

function dataKelengkapan() {
    dataUtama.style.display = "none";
    dataPelengkap.style.display = "block";
}

const alert = document.getElementById("my-alert");
const btnKosongFormulir = document.querySelectorAll('.reset');
const btnNoReset = document.querySelectorAll("no-reset");
const myForms = document.querySelectorAll('.form');

function kosongFormulirAlert() {
    alert.style.display = "block";
    dataUtama.style.position = 'relative';
    dataPelengkap.style.position = "relative";
}

function resetForm() {
    myForms.forEach(form => {
        form.reset();
        alert.style.display = "none";
    });
}

function noResetForm() {
    alert.style.display = "none";
}

btnNoReset.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        noResetForm();
    });
});
