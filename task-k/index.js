// index.js
// Author: Maria Halla-aho
// Date: 2025-12-11




// Kun lomake lähetetään
document.getElementById('tilauslomake').addEventListener('submit', function(event) {
    event.preventDefault(); // Estää oikean lähetyksen

    // Haetaan kenttien arvot
    const nimi = document.getElementById('nimi').value.trim();
    const email = document.getElementById('email').value.trim();
    const puhelin = document.getElementById('puhelin').value.trim();
    const alkupaiva = document.getElementById('alkupaiva') ? document.getElementById('alkupaiva').value : "";
    const loppupaiva = document.getElementById('loppupaiva') ? document.getElementById('loppupaiva').value : "";
    const ehdot = document.querySelector('input[name="ehdot"]');



    // Tarkistus: jos joku kenttä puuttuu, näytetään virhe
    if (nimi === "" || email === "" || puhelin === "") {
        alert("Täytä nimi, sähköposti ja puhelinnumero ennen lähettämistä.");
        return; // Estää alertin "Tilaus lähetetty!"


    }

// Tarkistus päivämäärille
    if (alkupaiva === "" || loppupaiva === "") {
        alert("Valitse sekä alkupäivä että loppupäivä ennen lähettämistä.");
        return

    }

    if (!ehdot.checked) {
      alert("Sinun täytyy hyväksyä vuokrasehdot ja tietosuojakäytäntö ennen lähettämistä");
      return;
    }

    // Kaikki ok:
    alert("Tilaus lähetetty!");

    //tyhjennä lomake
    form.reset();
});



