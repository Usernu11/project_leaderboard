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
const removeBtns = $('.lb__btns--remove')
const plusBtns = $('.lb__btns--plus')
const minusBtns = $('.lb__btns--minus')
const warn = $('.warn')
let playersData = []

// sort function
const sortPlayers = () => {
    const playerScores = $('.lb__score')    // find and store all cur scores
    const sortedPlayers = playerScores.toArray().sort((a, b) => {     // convert all el to array and the arr
        const scoreA = parseInt($(a).text())    // convert strings to numbers for sort
        const scoreB = parseInt($(b).text())    // convert str to num for sort
        return scoreB - scoreA          // Sort in descending order
    })

    sortedPlayers.forEach((player, index) => {      // for all (sorted) array
        $(player).closest('.lb__player').css('order', index)      // el from arr request to closest parrent and change order or the parrent by arr index
    })
}

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

    // Fill players data object
    players.each(function () {
        let firstName = $(this).find('.lb__name--first').text() // use (this) for access for cur el 
        let lastName = $(this).find('.lb__name--last').text()
        let country = $(this).find('.lb__country').text()
        let score = $(this).find('.lb__score').text()
        let time = $(this).find('.lb__date').text()
        let id = $(this).attr('id')

        let playerData = {
            firstName: firstName,
            lastName: lastName,
            country: country,
            score: Number(score),
            time: time,
            id: id
        }

        playersData.push(playerData)
    })

    // Adding player card
    inputBtn.on('click', () => {
        pNameValue = playerName.val()
        pLastNameValue = playerLastName.val()
        pCountryValue = playerCountry.val()
        pScoreValue = playerScore.val()
        let pId = `${pNameValue.split('')[0]}${pLastNameValue.split('')[0]}-jan-${pCountryValue.split('')[0]}`
        const newPlayerObj = {
            firstName: pNameValue,
            lastName: pLastNameValue,
            country: pCountryValue,
            id: pId.toLowerCase(),
            time: 'jan 30, 2020 01:09',
            score: Number(pScoreValue)
        }

        if (pNameValue !== '' &&
            pLastNameValue !== '' &&
            pCountryValue !== '' &&
            pScoreValue !== '') {

            // creating new el for new player card
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
                <button class="lb__btns--remove">❌</button>
                <button class="lb__btns--plus">+5</button>
                <button class="lb__btns--minus">-5</button>
            </div>
            </div>`

            // clear inputs
            $('.inputs__input').each(function (index, input) {
                if ($(input).val() !== '') {
                    $(input).val('')
                }
            })

            // add new player card
            lb.append(newPlayer)

            // add new player to obj
            playersData.push(newPlayerObj)

            // sort
            sortPlayers()

            if (!$(warn).hasClass('disabled')) {
                $(warn).toggleClass('disabled')
            }
        } else {
            $(warn).toggleClass('disabled')
        }
    })
})

// Button (player card -> ❌,➕,➖)
// Remove btn
lb.on('click', '.lb__btns--remove', (event) => {    // delegation event to parrent
    $(event.currentTarget).closest('.lb__player').remove()   // remove closest parent el of the cur btn
    let curPlayerId = $(event.currentTarget).closest('.lb__player').attr('id')  // current player Id

    playersData = $.grep(playersData, function (player) {   // removing obj from array
        return player.id !== curPlayerId
    })

    sortPlayers()
})

// Plus btn (new)
lb.on('click', '.lb__btns--plus', (event) => {    // delegation event to parrent
    let newCurScore = $(event.currentTarget).closest('.lb__player').find('.lb__score')   // find the score element
    let newCurScoreVal = parseInt(newCurScore.text())   // get the current score val
    let curPlayerId = $(event.currentTarget).closest('.lb__player').attr('id')  // current player Id
    let addScoreNum = 5

    // playersData = playersData.each(player => {
    //     if (player.id === curPlayerId) {
    //         player.score += scoreNum
    //     }
    // })

    $.each(playersData, function (index, player) {
        if (player.id === curPlayerId) {
            player.score += addScoreNum
        }
    })

    newCurScoreVal += addScoreNum         // add num for cur score
    newCurScore.text(newCurScoreVal)    // update content
    sortPlayers()
})

// Minus btn (new)
lb.on('click', '.lb__btns--minus', (event) => {    // delegation event to parrent
    let newCurScore = $(event.currentTarget).closest('.lb__player').find('.lb__score')   // find the score element
    let newCurScoreVal = parseInt(newCurScore.text())   // get the current score val
    let curPlayerId = $(event.currentTarget).closest('.lb__player').attr('id')  // current player Id
    let minusScoreNum = 5

    $.each(playersData, function (index, player) {
        if (player.id === curPlayerId) {
            player.score -= minusScoreNum
        }
    })

    newCurScoreVal -= 5         // minus num for cur score
    newCurScore.text(newCurScoreVal)    // update content

    sortPlayers()
})