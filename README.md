# KirjaLähde - REST API-pohjainen kirjahakusovellus
Tekijä: Saara Orvas

## Verkkolinkit:
Linkki videoesittelyyn: 

Linkki julkaistuun APIin: [KirjaLähde](https://kirjalahde-api.netlify.app/)


## Oma arvio työstä ja oman osaamisen kehittymisestä
Sovelluksen luominen oli hauskaa, muuta olen myös kokenut sovelluksen tekemisen ajoittain haasteelliseksi ja joutunut kaventamaan sovelluksen toteuttamisen suunnitelmia, esim. olin ajatellut alussa enemmän toiminnallisuutta ja sisältöä sovellukseen, kuten kategoriat-osion, jossa olisi voinut tehdä kirjahaun genren mukaan, ja asetukset-osion, jossa käyttäjä olisi itse voinut valita esim. dark/light moden ja fontin/fonttikoon, mutta minulla meni kauemmin aikaa AJAX-olion kanssa ja sen kanssa, että sain hakusanalla tehtyä API-haun. MYös taulukon luominen aiheutti päänvaivaa.

Minusta tuntuu, että tämän sovelluksen luomisen aikana oma osaaminen on kasvanut huomattavasti: AJAX ja API -kutsujen laatiminen, painikkeiden tilan päivitys ja liittäminen API-hakuun sekä erilaisten virheilmoituksien käsittely. Sovelluksen luomisen yhteydessä olen myös päässyt palauttelemaan aikaisemmin opittuja HTML, CSS ja Bootstrap sekä niiden käyttöä. Antaisin arvosanan itselleni 3, sillä jouduin monesti käyttämään tekoälyä hyödyksi, kun en saanut koodia toimimaan haluamallani tavalla.

## Sisällysluettelo

- [Tietoja sovelluksesta](#tietoja-sovelluksesta)
- [Kuvakaappaus](#kuvakaappaus)
- [Teknologiat](#teknologiat)
- [Asennus](#asennus)
- [Kiitokset](#kiitokset)
- [Lisenssi](#lisenssi)

## Tietoja sovelluksesta
KirjaLähde on selainpohjainen hakusovellus, jonka avulla käyttäjä voi etsiä kirjoja Open Libraryn julkisesta rajapinnasta. Sovellus tarjoaa yksinkertaisen ja responsiivisen käyttöliittymän, jossa käyttäjä voi syöttää hakusanan (kirjan nimi tai kirjailijan nimi) ja saada hakutuloksista lista, jossa on teoksen nimi, tekijän nimi, teoksen julkaisuvuosi sekä millä kielillä teos on saatavilla.

Sovelluksen logo on luotu Microsoft Copilotin avulla.

## Kuvakaappaus
Sovelluksen ulkoasu:

![Etusivu](./Kuvat/kuvakaappausKirjaLähde.png)


Sovelluksen ulkoasu hakutuloksien kanssa:

![Etusivu](./Kuvat/kuvakaappausTuloksetKirjaLähde.png)


## Teknologiat
Projektin toteutuksessa on käytetty seuraavia teknologioita:

- HTML5: Käyttöliittymän rakenteen luominen
- CSS3: Ulkoasun, värien ja responsiivisuuden hallinta
- Bootstrap 5: Responsiivinen ulkoasu ja käyttöliittymän muotoilu
- JavaScript: DOM-manipulaatio, tapahtumien käsittely ja dynaamisen sisällön tuottaminen
- AJAX: Tiedonhaku ulkoisesta rajapinnasta
- Open Library REST API (Search API): Julkinen kirjatietokanta, josta haettu kirjojen tiedot
- Google Fonts: Hakukentän kuvakkeen esittäminen
- Visual Studio Code: Kehitysympäristö

## Asennus
1. Lataa tai kloonaa tämä repositorio
2. Avaa index.html selaimessa

TAI

Mene [linkistä](https://kirjalahde-api.netlify.app/) julkaistuun sovellukseen, jolloin repositorion lataaminen ei ole tarpeen.

## Kiitokset
Projektin toteutuksessa hyödynnettiin seuraavia lähteitä:

- [Open Library API, Search API](https://openlibrary.org/dev/docs/api/search)
- [Stackoverflow](https://stackoverflow.com/questions/48123635/add-user-text-input-to-url)
- [dcode](https://www.youtube.com/watch?v=f6ocDCkCmhM)
- [W3school](https://www.w3schools.com/)
- [Google Fonts](https://fonts.google.com/icons?selected=Material+Symbols+Outlined:search:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=search&icon.size=24&icon.color=%231f1f1f)
- [Developer.Mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [Mika Stenberg - Gitbook](https://mika-stenberg.gitbook.io/web-sovelluksia-javascriptin-avulla/vastauksen-parsiminen-ja-nayttaminen-sivulla)

Projektin toteutuksessa on hyödynnetty Microsoft Copilotia koodin suunnittelussa ja virheiden korjauksessa, esim. taulukon luomisessa, sekä responsiivisen käyttöliittymän suunnittelussa. 

## Lisenssi
MIT lisenssi @ Saara Orvas