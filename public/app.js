const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#p1')
const msg2 = document.querySelector('#p2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const loc = search.value
    msg1.textContent = 'Loading...'
    fetch('/weather?loc=' + loc).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
                msg2.textContent = ''
            } else {
                msg1.textContent = data.city + ', ' + data.country
                msg2.textContent = 'Temp: ' + data.temp + ' and FeelsLike: ' + data.feelslike

            }
        })
    })
})