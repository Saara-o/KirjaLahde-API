// Luodaan hakukenttä: lisätään täpät title, author ?

// Poimitaan hakusana käyttäjän syöttestä
let hakusana = document.getElementById("hakuInput").value;

// Luodaan URL, jossa on käyttäjän syöte otettu huomioon
let url = "https://openlibrary.org/search.json?q=" + encodeURIComponent(hakusana);

// Luodaan AJAX-olio
// function haeData () {
    let xhr = new XMLHttpRequest();
    // Kerrotaan mihin osoitteeseen tietopyyntö lähtee
    xhr.open("GET", url, true);
    //Määritellään käsittelijä vastauksen saapuessa
    xhr.onreadystatechange = function () {
        // jos ei ole tullut virheitä matkalla
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Muutetaan vastaus JSON-muotoon
            let data = JSON.parse(xhr.responseText);
        }
    };
// } function

xhr.send();

// Parsitaan data

