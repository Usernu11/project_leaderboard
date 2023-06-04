// psc
// + make sort lb func

// event lb btns
// remove btn -> remove el from lb + use sort btn
// plus btn -> change score + use sort btn
// minus btn -> change score + use sort btn

// object system (upgrade)
// create an object which contains all exist players (it's more correct and comfortable)
// add to exist fucntions or listeners which also add new person info to the exist obj
// make a fucntion which can sort the obj by some params

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

// Remove btn -> for old elements on page
removeBtns.each(() => {     // for each remove btn
    $(this).on('click', () => {     // add eventListener for cur btn
        $(this).closest('.lb__player').remove()     // remove closest parent el of the cur btn
    })
})

// Remove btn -> for new elements on page
lb.on('click', '.lb__btns--remove', (event) => {    // delegation event to parrent
    $(event.currentTarget).closest('.lb__player').remove()   // remove closest parent el of the cur btn
})

// Add btn -> for old el (new)
plusBtns.each(function () {
    $(this).on('click', function () {
        let curScore = $(this).closest('.lb__player').find('.lb__score')     // find the score element
        let scoreValue = parseInt(curScore.text())      // get the current score value
        scoreValue += 5         // add 5 to the current score
        curScore.text(scoreValue)            // update the score text
    })
})

// Plus btn -> for new el (new)
lb.on('click', '.lb__btns--plus', (event) => {    // delegation event to parrent
    let newCurScore = $(event.currentTarget).closest('.lb__player').find('.lb__score')   // find the score element
    let newCurScoreVal = parseInt(newCurScore.text())   // get the current score val
    newCurScoreVal += 5         // add num for cur score
    newCurScore.text(newCurScoreVal)    // update content
})

