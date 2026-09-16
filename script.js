const btn = document.getElementById('btn')

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('h1')
    let gekozenClub = localStorage.getItem('Club')
    h1.textContent = gekozenClub
})

function verdeelTaken() {
    let resultaatLijst = document.getElementById('resultaat')
    if (localStorage.getItem('Ingevuld') !== 'true') {
        let taken = [
            'Balken leggen',
            'binnen roepen',
            'omroepen',
            'mest scheppen',
            'jury',
            'jury dressuur',
        ]

        resultaatLijst.innerHTML = ''

        let aantal = parseInt(prompt('Hoeveel leden?'))

        if (aantal > taken.length) {
            alert(`Er zijn maar ${taken.length} taken beschikbaar.`)
            aantal = taken.length
        }

        for (let i = 0; i < aantal; i++) {
            let naam = ''
            while (!naam || naam.trim() === '') {
                naam = prompt(`Naam lid ${i + 1}:`)
                if (naam === null) return
            }
            let menu = 'Kies taak uit menu: \n'
            taken.forEach((taak, index) => {
                menu += `${index + 1}   : ${taak}\n`
            })

            let gekozenNummer = parseInt(prompt(menu)) - 1

            let gekozenTaak = taken.splice(gekozenNummer, 1)[0]

            resultaatLijst.innerHTML += `<li><strong>${naam}</strong>: ${gekozenTaak}</li>`
            localStorage.setItem('Ingevuld', true)
            localStorage.setItem('Verdeelde lijst', resultaatLijst.innerHTML)
        }
    } else {
        resultaatLijst.innerHTML = localStorage.getItem('Verdeelde lijst')
    }
}
