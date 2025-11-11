const hakukentta = document.querySelector(".hakukentta");
const hakusana = hakukentta.value.trim();

// Luodaan AJAX-olio
function haeData (hakusana) {
    // Luodaan URL, jossa on käyttäjän syöte otettu huomioon (title)
    let url = "https://openlibrary.org/search.json?title=" + encodeURIComponent(hakusana);
    let xhr = new XMLHttpRequest();
    // Kerrotaan mihin osoitteeseen tietopyyntö lähtee
    xhr.open("GET", url, true);
    //Määritellään käsittelijä vastauksen saapuessa
    xhr.onreadystatechange = function () {
        // jos ei ole tullut virheitä matkalla
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Muutetaan vastaus JSON-muotoon
            let data = JSON.parse(xhr.responseText);
            // Oma funktio käsittelee haetun datan
            parsiData(data);
        }
    };
    // Lähetetään edellä muovattu AJAX-olio
    xhr.send();

    // Datan käsittelevä funktio
    function parsiData(data) {
        // Luodaan muuttuja kohon tulokset kootaan
        let rivit;

        // Luodaan silmukka joka käy läpi kaikki tulostusrivit
        for (let i = 0; i < data.length; i++) {
            rivit += `<tr>
                        <td>${data.title}</td>
                        <td>${data.author_name}</td>
                        <td>${data.first_publish_year}</td>
                        <td>${data.language}</td>
                        <td>${data.ebook_access}</td>
                        <td>${data.lending_edition_s}</td>
                    <tr>`;
        // Rakennetaan taulu tuloksille
        let taulu = `
            <table border = 1>
                ${rivit}
            </table>
            `;
        }

        // Sijoitetaan tulokset nimiseen div-elementtiin
        document.querySelector("#tulokset").innerHTML = taulu;
    }
}

// Lisätään kuuntelija hakukenttään
hakukentta.addEventListener("keypress", clickEnter);

// Enter-näppäimen painalluksesta submit
function clickEnter (e) {
    const pituus = hakukentta.value.length;
    // Tarkistetaan, että painettu Enter-näppäintä
    if (e.key === "Enter") {
        e.preventDefault(); // Estetään lomakkeen oletustoiminta

        // Hakukentän tarkastus
        if (pituus === 0) {
        alert("Hakukenttä on tyhjä.")
        hakukentta.disabled = true;
        return;
    }
        // Jos kenttä ei ole tyhjä
        haeData(hakukentta.value.trim());
    }
}
