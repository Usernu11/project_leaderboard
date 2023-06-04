// $(document).ready(function() {   // jquery works well
//     $('body').css('background-color', 'steelblue')
// }) 

// psc
// event input btn
// if all fields aren't filled and btn clicked -> make warning html el
// if all fields filled and btn clicked -> create e new el
// + make sort lb func

// event lb btns
// remove btn -> remove el from lb + use sort btn
// plus btn -> change score + use sort btn
// minus btn -> change score + use sort btn

const inputBtn = $('#input-btn')
const lb = $('.lb') // leaderboard
let playerId = ''
let playerName = ''
let playerLastName = ''
let playerCountry = ''
let playerScore = ''
const players = $('.lb__player')
const playerScores = $('.lb__score')
const removeBtns = $('.lb__btns--remove')
const plusBtns = $('.lb__btns--plus')
const minusBtns = $('.lb__btns--minus')
let newPlayer = `<div class="lb__player" id="${playerId}">
<div class="lb__player-data">
    <div class="lb__player-nd">
        <div class="lb__name">
            <span class="lb__name--first">${playerName}</span>
            <span class="lb__name--last">${playerLastName}</span>
        </div>

        <div class="lb__date">jan 30, 2020 01:09</div>
    </div>

    <div class="lb__player-cs">
        <div class="lb__country">${playerCountry}</div>
        <div class="lb__score">${playerScore}</div>
    </div>
</div>

<div class="lb__btns">
    <button class="lb__btns--remove">x</button>
    <button class="lb__btns--plus">+5</button>
    <button class="lb__btns--minus">-5</button>
</div>
</div>`

// lb.append(newPlayer) ✔

// console.log(inputBtn)