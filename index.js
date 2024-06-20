function sayNo() {
    let displayImage = document.getElementById('fastImg')
    let no = document.getElementById('no').value
    if (displayImage.src.match('no/img_7.gif')) {
        displayImage.src = 'no/img_1.gif'
    } else if (displayImage.src.match('no/img_1.gif')) {
        displayImage.src = 'no/img_2.gif'
    } else if (displayImage.src.match('no/img_2.gif')) {
        displayImage.src = 'no/img_3.gif'
    } else if (displayImage.src.match('no/img_3.gif')) {
        displayImage.src = 'no/img_4.gif'
    } else if (displayImage.src.match('no/img_4.gif')) {
        displayImage.src = 'no/img_5.gif'
    } else if (displayImage.src.match('no/img_5.gif')) {
        displayImage.src = 'no/img_6.gif'
    } else if (displayImage.src.match('no/img_6.gif')) {
        displayImage.src = 'no/img_8.gif'
    } else if (displayImage.src.match('no/img_8.gif')) {
        displayImage.src = 'no/img_9.gif'
    } else if (displayImage.src.match('no/img_9.gif')) {
        displayImage.src = 'no/img_10.gif'
    } else if (displayImage.src.match('no/img_10.gif')) {
        displayImage.src = 'no/img_11.gif'
    }else if(displayImage.src.match('no/img_11.gif')){
        displayImage.src = 'no/img_12.gif'
    }else{
        displayImage.src = 'no/img_7.gif'
    }
console.log(no)
}