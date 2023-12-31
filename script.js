const alert = document.getElementById("my-alert");
const btnKosongFormulir = document.querySelectorAll('.reset');
const btnNoReset = document.querySelectorAll("no-reset");
const myForms = document.querySelectorAll('.form');

function kosongFormulirAlert() {
    disableForm();
    alert.style.display = "block";
    dataUtama.style.position = 'relative';
    dataPelengkap.style.position = "relative";
}

function resetForm() {
    myForms.forEach(form => {
        enableForm();
        alert.style.display = "none";
        form.reset();
    });
}

function noResetForm() {
    enableForm();
    alert.style.display = "none";
}

function disableForm() {
    myForms.forEach(form => {
        form.style.pointerEvents = 'none';
    });
}

function enableForm() {
    myForms.forEach(form => {
        form.style.pointerEvents = 'auto';
    });
}

btnNoReset.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        noResetForm();
    });
});
