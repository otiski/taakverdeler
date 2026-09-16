function gaNaarVerdeler() {
    const selectedClub = document.querySelector('#clubs')
    const clubValue = selectedClub.value
    localStorage.setItem('Club', clubValue)

    window.location.href = 'verdeler.html'
}
