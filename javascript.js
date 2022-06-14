let good_words = ["Life is better than you think", "You can do everything",
"Don't forget you have friend", "Best thing is for you",
"Happy = Good Work", "You life is your friends!", "Grow up!", "U can't lost!", "Let Enjoy!", "Code, eat, Sleep",
"Party, Listen, Dance", "Code, Listen, Sleep", "const life.status = 'Best';", "Wake Up!", "Let Start!"]

const background = ['1.jpg', '2.png', '3.jpg', '4.jpg', '5.jpg', 
    '6.jpg', '7.png', '8.jpg','9.jpg', '10.png', '11.jpg']

const random_background = Math.floor(Math.random() * background.length)
$('#background').html(`<img src="assets/${background[random_background]}" alt="">`)
$('#good b').text(good_words[Math.floor(Math.random() * good_words.length)])

// Clock!
const date = new Date()
let hour = date.getHours();
let min = date.getMinutes()
setInterval(() => {
    const date2 = new Date()
    if (hour !== date2.getHours()) hour = date2.getHours();
    if (min !== date2.getMinutes()) min = date2.getMinutes();
    if (parseInt(hour) > 12) {
        hour = parseInt(hour) - 12
    }
    if (parseInt(min) < 10) {
        min = "0" + min
    }
    $('#clock b').html(hour + " : " + min)
}, 100)

// date
$('#clock p').html(date.getMonth() + " / " + date.getDay() + " / " + date.getFullYear())

//timer
let doing = true;
$('#timer_form p').click(() => {
    let sec = document.forms['timer']['sec'].value;
    let min = document.forms['timer']['min'].value;
    const target = $('#target');
    $('#timer_form').slideToggle()
    target.slideToggle();
    $('#timer').addClass('timing');
    target.addClass('show');
    const timing = setInterval(() => {
        if (doing) {
            if(!parseInt(sec) && !parseInt(min)) {
                clearInterval(timing)
                $('#timer_form').slideToggle()
                target.slideToggle();
            }
            target.html(`<b>${min} : ${sec}</b> <p>Pause</p>`)
            sec--;
            if (parseInt(sec) === -1) {
                min--
                sec = "59"
            }
            $('#target p').click(() => {
                doing = !doing
                if (doing) $('#target p').text('Pause')
                else $('#target p').text('Play')
            })
            $('#target p').dblclick(() => {
                $('#timer_form').slideToggle()
                $('#target').slideToggle();
                $('#target b').text('Loading...')
                clearInterval(timing)
                doing = true
            })
        }
    }, 1000)
})