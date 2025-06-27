let inputName = document.getElementById('name')
let captionName = document.getElementById('caption-name')
let imageName = document.getElementById('img-name')

let inputSurname = document.getElementById('surname')
let captionSurname = document.getElementById('caption-surname')
let imageSurname = document.getElementById('img-surname')

let inputCity = document.getElementById('city')
let captionCity = document.getElementById('caption-city')
let imageCity = document.getElementById('img-city')

let inputEmail = document.getElementById('email')
let captionEmail = document.getElementById('caption-email')
let imageEmail = document.getElementById('img-email')

let inputPassword = document.getElementById('password')
let captionPassword = document.getElementById('caption-password') 

let inputPasswordAgain = document.getElementById('password-again')
let captionPasswordAgain = document.getElementById('caption-password_again')


function checkInput(input, image, caption, messaage) {
    if(!input.target.value.trim()) {
        caption.textContent = messaage
        image.src = 'reject.png'
        input.target.classList.remove('accept')
        input.target.classList.add('deny')
    } else {
        caption.textContent = ''
        image.src = 'shield.png'
        input.target.classList.remove('deny')
        input.target.classList.add('accept')

    }
}

inputName.addEventListener('change', function(e) {
    checkInput(e, imageName, captionName, 'Введите имя')
})

inputSurname.addEventListener('change', function(e) {
    checkInput(e, imageSurname, captionSurname, 'Введите фамилию')
})

inputCity.addEventListener('change', function(e) {
    checkInput(e, imageCity, captionCity, 'Введите город')
})

inputEmail.addEventListener('change', function(e) {
    checkInput(e, imageEmail, captionEmail, 'Введите эл. почту')
})

