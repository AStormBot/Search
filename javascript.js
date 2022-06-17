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
$('#clock p').html(date.getMonth()+1  + " / " + date.getDate() + " / " + date.getFullYear())

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

// add css variable
const root = document.querySelector(':root');
root.style.setProperty('--height', `${screen.height}px`)

// url detector
document.getElementById("q").addEventListener("keypress", myFunction);

function myFunction(e) {
    const value = document.forms['url']['q'].value
    console.log('function called')
    if (value.endsWith('.com') || value.endsWith('.ir') || value.endsWith('.tv') || value.endsWith('.info')) {
        window.open(`https://www.${value}`, "_self")
        console.log('If is true')
    }
}

// shadow of span
let element = document.documentElement;

element.addEventListener("mousemove", e => {
    element.style.setProperty('--mouse-x', e.clientX + "px");
    element.style.setProperty('--mouse-y', e.clientY + "px");
});

// add local storage
function toggle() {
    $('.add-panel').fadeToggle();
    return true
}
$('.add').click(() => {
    toggle()
})
$('.save-pack').click(() => {
    const name = document.forms['add-pack']['name'].value;
    const url = document.forms['add-pack']['url'].value;
    let icon_pack = undefined;
    if (url.startsWith('www.')) {
        icon_pack = `url=https://${url}&size=16`;
    }else if (url.startsWith('https' || url.startsWith('http'))) {
        icon_pack = `url=${url}&size=16`;
    }else {
        icon_pack = `url=http://www.${url}&size=32`
    }
    const length = local.length / 3;
    local.setItem(`${length}-name`, name);
    local.setItem(`${length}-url`, url);
    local.setItem(`${length}-icon`, icon_pack);
    toggle();
})
$('.cancel').click(() => {
    toggle();
})

// Local Storage
let check = "";
const local = localStorage;
for (let i = 0; i < local.length / 3; i++) {
    const name = local.getItem(`${i}-name`);
    const url = local.getItem(`${i}-url`);
    const icon = local.getItem(`${i}-icon`);
    check += `<span onclick="window.open(${url})">
<img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&${icon}"> <br> ${name}
</span>`
}
check += `<span class="add" onclick="toggle()">
                            <div id="add-icon">
                                <div></div>
                                <div></div>
                            </div> <br>
                            add
                        </span>`
$('#favorite').html(check)