// Get the HTML elements of the clock 
let head  = document.getElementById('intro')

let clock = document.querySelector('.clock')

let hourNum = document.querySelectorAll('#number')

let hourHand = document.getElementById('hour')
let minuteHand = document.getElementById('minute')
let secondHand = document.getElementById('second')

let displayDate = document.getElementById('date')

function displayTime() {
    var time = new Date()
    
    // Get the times for rotating the hands
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

    // Calculating the degrees for rotating the hands in the clock
    let secDeg = (second / 60) * 360
    let minDeg = (minute / 60) * 360
    let hrDeg = (hour % 12 + minute / 60) * 30

    // Applying the rotation of the hands by using the CSS rotate function
    hourHand.style.transform = `rotate(${hrDeg}deg)`
    minuteHand.style.transform = `rotate(${minDeg}deg)`
    secondHand.style.transform = `rotate(${secDeg}deg)`
}
setInterval(displayTime, 1000)

// Display the Date
let time2 = new Date()
displayDate.innerText = time2.toDateString()

// Dynamic Background
let dynamic = time2.getHours()

let day = ['#D9DFC6', '#EFF3EA']
let night = ['#222831', '#393E46']

let handsTheme = document.querySelectorAll('i')
let secTheme = document.getElementById('green-hand')

// Changes the theme to dark in the night
if (dynamic >= 18 || dynamic < 6) {
    // Change background
    document.body.style.background = night[0]

    // header Visibility
    head.style.color = day[0]

    // Change clock backgroud
    clock.style.background = night[1]
    clock.style.boxShadow = `0 0 30px black`

    // Hours numbers readability
    hourNum.forEach((number) => {
        number.style.color = day[0]
    })

    // Hands visibility
    // - hour & minute
    handsTheme.forEach((hand) => {
        hand.style.background = day[0]
    })
    
    // - second
    secTheme.style.background = '#7BC74D'

    // - indicator
    let styleSheet = document.styleSheets[0]; 
    styleSheet.insertRule(`
        .clock::before {
            background: ${day[0]};
        }
    `, styleSheet.cssRules.length);
    
    // Date Readability
    displayDate.style.color = day[0]
}