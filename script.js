const alert = document.getElementById("my-alert");
const btnKosongFormulir = document.querySelectorAll('.reset');
const btnNoReset = document.querySelectorAll("no-reset");
const myForms = document.querySelectorAll('.form');

function kosongFormulirAlert() {
    disableForm();
    alert.style.display = "block";
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

document.querySelector('.data-kelamin').addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
        uncheckOtherCheckboxes(event.target);
    }
});

function uncheckOtherCheckboxes(checkedCheckbox) {
    const checkboxes = document.querySelectorAll('.data-kelamin input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox !== checkedCheckbox) {
            checkbox.checked = false;
        }
    });
}


function sendToWhatsApp() {
    
    try {
        var nomorWhatsApp = '6281615650796';
        var nama = document.getElementById('nama').value;
        var tempatLahir = document.getElementById('tempatLahir').value;
        var tglLahir = document.getElementById('tanggalLahir').value;
        var jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        var asalSekolah = document.getElementById('asalSekolah').value;
        var nomorHp = document.getElementById('nomorHp').value;
        var alamat = document.getElementById('alamat').value;
        var namaOrtu = document.getElementById('namaOrtu').value;
        var pekerjaanOrtu = document.getElementById('pekerjaan').value;
        var alamatOrtu = document.getElementById('alamat-ortu').value; 

        if (!nama || !tempatLahir || !tglLahir || !jenisKelamin || !asalSekolah || !nomorHp || !alamat || !namaOrtu || !pekerjaanOrtu || !alamatOrtu ) {
            return;
        }
        
        // Tautan WhatsApp 
        var linkWhatsApp = 'https://wa.me/' + nomorWhatsApp +
                           '?text=Nama : %20' + encodeURIComponent(nama) +
                           '%0ATempat lahir : %20' + encodeURIComponent(tempatLahir) + 
                           '%0ATanggal lahir : %20' + encodeURIComponent(tglLahir) +
                           '%0AJenis Kelamin : %20' + encodeURIComponent(jenisKelamin) +
                           '%0Asal Sekolah : %20' + encodeURIComponent(asalSekolah) +
                           '%0ANomor HP : %20' + encodeURIComponent(nomorHp) +
                           '%0AAlamat : %20' + encodeURIComponent(alamat) +
                           '%0ANama Orangtua : %20' + encodeURIComponent(namaOrtu) +
                           '%0APekerjaan Orangtua : %20' + encodeURIComponent(pekerjaanOrtu) +
                           '%0AAlamat Orangtua : %20' + encodeURIComponent(alamatOrtu);

                           
        window.open(linkWhatsApp, '_blank');
    } catch (error) {
        
        // Menangkap dan menanggapi kesalahan
        alert('Terjadi kesalahan: ' + error.message);
    }
}
const btnKirim = document.getElementById('submit');

btnKirim.addEventListener("click", sendToWhatsApp);


