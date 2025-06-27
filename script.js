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
let imagePassword = document.getElementById('img-passwod_again')

let inputCapcha = document.getElementById('capcha')
let captionCapcha = document.getElementById('caption-capcha')
let imageCapcha = document.getElementById('img-capcha')

function denied(input, image, caption, message) {
    caption.textContent = message
    image.src = 'reject.png'
    input.classList.remove('accept')
    input.classList.add('deny')
}

function accepted(input, image, caption) {
    caption.textContent = ''
    image.src = 'shield.png'
    input.classList.remove('deny')
    input.classList.add('accept')
}

function checkInput(input, image, caption, message) {
    if (!input.value.trim()) {
        denied(input, image, caption, message)
    } else {
        accepted(input, image, caption)
    }
}

function checkCapcha(input, image, caption, message) {
    if (input.value.trim() === '8064801') {
        accepted(input, image, caption)
    } else {
        denied(input, image, caption, message)
    }
}

function checkPassword(password, secondPassword, image, caption, message) {
    if (password.value !== secondPassword.value) {
        denied(secondPassword, image, caption, message) 
    } else {
        accepted(secondPassword, image, caption)
    }
}


inputName.addEventListener('change', function (e) {
    checkInput(e.target, imageName, captionName, 'Введите имя')
})

inputSurname.addEventListener('change', function (e) {
    checkInput(e.target, imageSurname, captionSurname, 'Введите фамилию')
})

inputCity.addEventListener('change', function (e) {
    checkInput(e.target, imageCity, captionCity, 'Введите город')
})

inputEmail.addEventListener('change', function (e) {
    checkInput(e.target, imageEmail, captionEmail, 'Введите эл. почту')
})

inputCapcha.addEventListener('change', function (e) {
    checkCapcha(e.target, imageCapcha, captionCapcha, 'Неправильное число')
})

inputPasswordAgain.addEventListener('change', function(e) {
    checkPassword(inputPassword, e.target, imagePassword, captionPasswordAgain, 'Неправильный пароль')
})









