let no = document.querySelector('#no')
let noBtn = document.getElementById('no')
let yes = document.getElementById('yes')
let sayNoContainer = document.getElementById('sayNoContainer')
let sayYesContainer = document.getElementById('sayYesContainer')
let secondImg = document.getElementById('secondImg')


let fontSize = 1

function sayNo() {
    let displayImage = document.getElementById('fastImg')

    if (displayImage.src.match('no/img_7.gif') || no.innerText == 'No') {

        displayImage.src = 'no/img_1.gif'
        no.textContent = 'Oh no! are you sure?'

    } else if (displayImage.src.match('no/img_1.gif') || no.innerText == 'Oh no! are you sure?') {

        displayImage.src = 'no/img_2.gif'
        no.textContent = 'Are you really sure?'

    } else if (displayImage.src.match('no/img_2.gif') || no.innerText == 'Are you really sure?') {


        displayImage.src = 'no/img_3.gif'
        no.textContent = 'Are you really sure, huh?'

    } else if (displayImage.src.match('no/img_3.gif') || no.innerText == 'Are you really sure, huh?') {

        displayImage.src = 'no/img_4.gif'
        no.textContent = 'Are you positive?'

    } else if (displayImage.src.match('no/img_4.gif') || no.innerText == 'Are you positive?') {

        displayImage.src = 'no/img_5.gif'
        no.textContent = 'Say yes, please.'

    } else if (displayImage.src.match('no/img_5.gif') || no.innerText == 'Say yes, please.') {

        displayImage.src = 'no/img_6.gif'
        no.textContent = 'Just think about it'

    } else if (displayImage.src.match('no/img_6.gif') || no.innerText == 'Just think about it') {

        displayImage.src = 'no/img_8.gif'
        no.textContent = 'I will be very sad'

    } else if (displayImage.src.match('no/img_8.gif') || no.innerText == 'I will be very sad') {

        displayImage.src = 'no/img_9.gif'
        no.textContent = "Okay, I'll stop asking..."

    } else if (displayImage.src.match('no/img_9.gif') || no.innerText == "Okay, I'll stop asking...") {

        displayImage.src = 'no/img_10.gif'
        no.textContent = 'Just kidding, PLEASE SAY YES'

    } else if (displayImage.src.match('no/img_10.gif') || no.innerText == 'Just kidding, PLEASE SAY YES') {

        displayImage.src = 'no/img_11.gif'
        no.textContent = 'You are breaking my heart :('

    } else if (displayImage.src.match('no/img_11.gif') || no.innerText == 'You are breaking my heart :(') {

        displayImage.src = 'no/img_12.gif'
        no.textContent = 'NO... I already said yes'

    } else {
        displayImage.src = 'no/img_7.gif'
        no.textContent = 'No'
    }

    fontSize = fontSize + 0.5
    yes.style.fontSize = `${fontSize}rem`
    yes.style.marginRight = '20px'

}

function sayYes() {
    let yesImages = ['yes/img_15.gif', 'yes/img_14.gif', 'yes/img_13.gif'] 
    sayNoContainer.style.display = 'none'
    sayYesContainer.style.display = 'flex'

    setInterval(() => {
        let random = Math.floor(Math.random() * 3)
        secondImg.src = yesImages[random]
    }, 800);
}