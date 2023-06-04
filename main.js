// psc
// + make sort lb func

// event lb btns
// remove btn -> remove el from lb + use sort btn
// plus btn -> change score + use sort btn
// minus btn -> change score + use sort btn

// Variables
const inputBtn = $('#input-btn') // add player
const lb = $('.lb') // leaderboard
let playerName = $('#input-name')
let pNameValue  // for updating value
let playerLastName = $('#input-l-name')
let pLastNameValue  // for updating value
let playerCountry = $('#input-country')
let pCountryValue  // for updating value
let playerScore = $('#input-score')
let pScoreValue     // for updating value
const players = $('.lb__player')
const playerScores = $('.lb__score')
const removeBtns = $('.lb__btns--remove')
const plusBtns = $('.lb__btns--plus')
const minusBtns = $('.lb__btns--minus')
const warn = $('.warn')

$(document).ready(() => {
    playerName.on('input', () => {  // updating first name
        pNameValue = playerName.val()
    })

    playerLastName.on('input', () => {  // updating last name
        pLastNameValue = playerLastName.val()
    })

    playerCountry.on('input', () => {  // updating country
        pCountryValue = playerCountry.val()
    })

    playerScore.on('input', () => {  // updating score
        pScoreValue = playerScore.val()
    })

    // Adding player card
    inputBtn.on('click', () => {
        pNameValue = playerName.val()
        pLastNameValue = playerLastName.val()
        pCountryValue = playerCountry.val()
        pScoreValue = playerScore.val()

        if (pNameValue !== '' &&
            pLastNameValue !== '' &&
            pCountryValue !== '' &&
            pScoreValue !== '') {
            let pId = `${pNameValue.split('')[0]}${pLastNameValue.split('')[0]}-jan-${pCountryValue.split('')[0]}`

            let newPlayer = `<div class="lb__player" id="${pId.toLowerCase()}">
        <div class="lb__player-data">
            <div class="lb__player-nd">
                <div class="lb__name">
                    <span class="lb__name--first">${pNameValue}</span>
                    <span class="lb__name--last">${pLastNameValue}</span>
                </div>
        
                <div class="lb__date">jan 30, 2020 01:09</div>
            </div>
        
            <div class="lb__player-cs">
                <div class="lb__country">${pCountryValue}</div>
                <div class="lb__score">${pScoreValue}</div>
            </div>
        </div>
        
        <div class="lb__btns">
            <button class="lb__btns--remove">x</button>
            <button class="lb__btns--plus">+5</button>
            <button class="lb__btns--minus">-5</button>
        </div>
        </div>`

            // clear inputs
            playerName.val('')
            playerLastName.val('')
            playerCountry.val('')
            playerScore.val('')

            // add new player card
            lb.append(newPlayer)

            if (!$(warn).hasClass('disabled')) {
                $(warn).toggleClass('disabled')
            }
        } else {
            $(warn).toggleClass('disabled');
        }
    })
})