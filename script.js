document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('h1')
    let gekozenClub = localStorage.getItem('Club')
    h1.textContent = gekozenClub
})

function verdeelTaken() {
    let taken = [
        'Balken leggen',
        'binnen roepen',
        'omroepen',
        'mest scheppen',
        'jury',
        'jury dressuur',
    ]
    let resultaatLijst = document.getElementById('resultaat')

    resultaatLijst.innerHTML = ''

    let aantal = parseInt(prompt('Hoeveel leden?'))

    for (let i = 0; i < aantal; i++) {
        let naam = prompt('Naam lid')

        let menu = 'Kies taak uit menu: \n'
        taken.forEach((taak, index) => {
            menu += `${index + 1}: ${taak}\n`
        })

        let gekozenNummer = parseInt(prompt(menu)) - 1

        let gekozenTaak = taken.splice(gekozenNummer, 1)[0]

        resultaatLijst.innerHTML += `<li><strong>${naam}</strong>: ${gekozenTaak}</li>`
    }
}
