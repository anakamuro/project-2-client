const indexPlayerContainer = document.querySelector('#index-player-container')
const messageContainer = document.querySelector('#message-container')
const showPlayerContainer = document.querySelector('#show-player-container')
const indexBattingStatsContainer = document.querySelector('#index-battingStats-container')
const showBattingStatsContainer = document.querySelector('#show-battingStats-container')
const indexPitchingStatsContainer = document.querySelector('#index-pitchingStats-container')
const showPitchingStatsContainer = document.querySelector('#show-pitchingStats-container')
const authContainer = document.querySelector('#auth-container')


export const onIndexPlayerSuccess = (players) => {
    console.log(players, 'players')
    players.forEach(players => {
        const div = document.createElement('div')
        div.innerHTML = `
            <p>${players.name}</p> 
            <p>${players.position}</p>
            <p>${players.birthplace}</p>
            <p>${players.yearsBorn}</p>
            <p>${players.homerun}</p>
            <p>${players.rbi}</p>
            <button data-id="${players._id}">Show Player</button>
            console.log( player.battingStats.homerun)
        `

        indexPlayerContainer.appendChild(div)
    })
}

export const onIndexBattingStatsSuccess = (battingStats) => {
    console.log(battingStats, 'battingStats')
    battingStats.forEach(battingStat => {
        const div = document.createElement('div')
        div.innerHTML = `
            <p>${battingStat.name}</p>  
            <p>${battingStat.homerun}</p>
            <p>${battingStat.rbi}</p>
            <button data-id="${battingStat._id}" >Show Batting Stats</button>
        `

        indexBattingStatsContainer.appendChild(div)
    })
}

export const onIndexPitchingStatsSuccess = (pitchingStats) => {
    pitchingStats.forEach(pitchingStat => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${pitchingStat.name}  ${pitchingStat.era}</h3>
            <button data-id="${pitchingStat._id}" >Show Batting Stats</button>
        `

        indexPitchingStatsContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreatePlayerSuccess = () => {
    messageContainer.innerText = 'You have created a player!! :)'
}

export const onCreateBattingStatsSuccess = () => {
    messageContainer.innerText = 'You have created a batting stats!! :)'
}

export const onCreatePitchingStatsSuccess = () => {
    messageContainer.innerText = 'You have created a pitching stats!! :)'
}

export const onShowPlayerSuccess = (player, battingStat) => {
    console.log(battingStat)
    const div = document.createElement('div')
    div.innerHTML = `
        <p>${player.name}</p>
        <p>${player.position}</p>
        <p>${player.birthplace}</p>
        <p>${player.yearsBorn}</p>
        <p>${battingStat.homerun}</p>
        <p>${battingStat.rbi}</p>
        <p>${player._id}</p>
        <form data-id="${player._id}">
            <input type="text" name="name" value="${player.name}" />
            <input type="text" name="position" value="${player.position}" />
            <input type="text" name="birthplace" value="${player.birthplace}" />
            <input type="number" name="yearsBorn" value="${player.yearsBorn}" />
            <input type="text" name="homerun" value="${player.battingStat.homerun}" />
            <input type="number" name="rbi" value="${player.battingStat.rbi}" />
            <input type="submit" value="Update Player" />
        </form>
        <button class="delete" type="button" data-id="${player._id}">Delete Player</button>
    `
    showPlayerContainer.appendChild(div)
}

export const onShowBattingStatsSuccess = (battingStats) => {
    console.log(battingStats, 'battingStats')
    const div = document.createElement('div')
    div.innerHTML = `
    <p>>${battingStats.name}</p> 
    <p>${battingStats.average}</p>>
    <p>${battingStats.homerun}</p>
    <p>${battingStats.rbi}</p>
    <p>${battingStats._id}</p>
      
        <form data-id="${battingStats._id}">
            <input type="text" name="name" value="${battingStats.name}" />
            <input type="text" name="average" value="${battingStats.average}" />
            <input type="text" name="homerun" value="${battingStats.homerun}" />
            <input type="number" name="rbi" value="${battingStats.rbi}" />
            <input type="submit" value="Update Batting Stats" />
        </form>
        <button type="button" data-id="${battingStats._id}">Delete Batting Stats</button>
    `
    showBattingStatsContainer.appendChild(div)
    console.log('showBattingStatsContainer', showBattingStatsContainer)
}

export const onShowPitchingStatsSuccess = (pitchingStats) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <p>${pitchingStats.name}</p>
        <p>${pitchingStats.win}</p>
        <p>${pitchingStats.loss}</p>
        <p>${pitchingStats.era}</p>
        <p>${pitchingStats._id}</p>
        <form data-id="${onIndexPitchingStatsSuccess._id}">
            <input type="text" name="name" value="${pitchingStats.name}" />
            <input type="text" name="win" value="${pitchingStats.win}" />
            <input type="text" name="loss" value="${pitchingStats.loss}" />
            <input type="text" name="era" value="${pitchingStats.era}" />
            <input type="submit" value="Update Pitching Stats" />
        </form>
        <button type="button" data-id="${pitchingStats._id}">Delete Pitching Stats</button>
    `
    showPitchingStatsContainer.appendChild(div)
}

export const onSigninSuccess = (signinData) => {
    authContainer.style.display = 'none'
    messageContainer.innerText = ''
}

export const onSignupSuccess = (signupData) => {
    messageContainer.innerText = 'You signed up!! Please signin to continue'
}

export const onUpdatePlayerSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onUpdateBattingStatsSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onUpdatePitchingStatsSuccess = () => {
    messageContainer.innerText = 'Update was successful :)'
}

export const onDeletePlayerSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}

export const onDeleteBattingStatsSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}

export const onDeletePitchingStatsSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}