const hakukentta = document.querySelector(".hakukentta");

// Lisätään kuuntelija hakukenttään
hakukentta.addEventListener("keypress", clickEnter);

// Enter-näppäimen painalluksesta submit
function clickEnter (e) {
    // Tarkistetaan, että painettu Enter-näppäintä
    if (e.key === "Enter") {
        e.preventDefault(); // Estetään lomakkeen oletustoiminta
        const pituus = hakukentta.value.length;
        const hakusana = hakukentta.value.trim();

        // Hakukentän tarkastus
        if (pituus === 0) {
        alert("Hakukenttä on tyhjä.")
        hakukentta.disabled = true;
        return;
    }
        // Jos kenttä ei ole tyhjä
        haeData(hakusana);
    }
}

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
}
// Datan käsittelevä funktio
function parsiData(data) {
    // Luodaan muuttuja kohon tulokset kootaan
    let rivit = "";

    // Luodaan silmukka joka käy läpi kaikki tulostusrivit
    for (let i = 0; i < data.docs.length; i++) {
        rivit += `<tr>
                    <td>${data.docs[i].title}</td>
                    <td>${data.docs[i].author_name}</td>
                    <td>${data.docs[i].first_publish_year}</td>
                    <td>${data.docs[i].language}</td>
                </tr>`;
    }

    // Rakennetaan taulu tuloksille
    const taulu = `
        <table class = "kirjataulu">
            <thead>
                <tr>
                    <th>Kirjan nimi</th>
                    <th>Tekijä</th>
                    <th>Julkaisuvuosi</th>
                    <th>Kielet</th>
                </tr>
            </thead>
            <tbody>
                ${rivit}
            </tbody>
        </table>
    `;

    // Sijoitetaan tulokset nimiseen div-elementtiin
    document.querySelector("#tulokset").innerHTML = taulu;
}