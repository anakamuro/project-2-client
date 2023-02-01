import { store } from './store.js'


const indexPlayerContainer = document.querySelector('#index-player-container')
const messageContainer = document.querySelector('#message-container')
const showPlayerContainer = document.querySelector('#show-player-container')
const indexBattingStatsContainer = document.querySelector('#index-battingStats-container')
const showBattingStatsContainer = document.querySelector('#show-battingStats-container')
const indexPitchingStatsContainer = document.querySelector('#index-pitchingStats-container')
const showPitchingStatsContainer = document.querySelector('#show-pitchingStats-container')
const authContainer = document.querySelector('#auth-container')
const createSigninForm = document.querySelector('#signin-form')



export const onShowPlayerSuccess = (players) => {
    console.log(players, 'players')
    players.forEach(player => {
        const div = document.createElement('div')
        div.innerHTML = `
        <form class="main-form" data-id="${player._id}">
            <h3>Player's Information</h3>
            <div><span class="title">Name: </span><input type="text" name="name" value="${player.name}"></div>
        <div><span class="title">Position: </span><input type="text" name="position" value="${player.position}" /></div>
        <div><span class="title">Birthplace: </span><input type="text" name="birthplace" value="${player.birthplace}" /></div>
        <div><span class="title">Years Born: </span><input type="number" name="yearsBorn" value="${player.yearsBorn}" /></div>
        <div><span class="title">RBI </span><input type="text" name="rbi" value="${player?.battingStats[0]?.homerun}" /></div>
        <div><span class="title">RBI </span><input type="text" name="rbi" value="${player?.battingStats[0]?.rbi}" /></div>

        


            <input type="submit" value="Update Player" />
            <button class="delete" type="button" data-id="${player._id}">Delete Player</button>
            <button class="batStat-btn" id="${player._id}">Add battingStat</button>
        </form>
    `
        showPlayerContainer.appendChild(div)



        // document.querySelectorAll(".batStat-btn").forEach(batBtn=> {
        //     batBtn.addEventListener("click", (e)=> {

        //         console.log(e.target);
        //          store.playerId= e.target.id
        //          console.log(e.target.id)

        //          console.log(store)
        //     })
        // })
    })
}


const playerBattingStat = (player) => {
    return `<h1>{player.rbi}</h1>`
}


/*
<div><span class="title">Homerun: </span><input type="text" name="homerun" value="${player.battingStats.length > 0 ? player.battingStats[0].homerun : ''}"/></div>
       <div><span class="title">RBI: </span><input type="text" name="rbi" value="${player.battingStats.length > 0 ? player.battingStats[0].rbi : ''}"/></div>
            <input type="submit" value="Update Player" />
            <button class="delete" type="button" data-id="${player._id}">Delete Player</button>
            <button class="batStat-btn" id="${player._id}">Add battingStat</button>


export const onIndexPlayerSuccess = (players) => {
 
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
}*/

export const onIndexBattingStatsSuccess = (players) => {
    console.log(battingStats, 'battingStats')
    players.forEach(player => {
        const div = document.createElement('div')
        div.innerHTML = `
            <p>${battingStat.name}</p>  
            <p>${battingStat.homerun}</p>
            <p>${battingStat.rbi}</p>
            <button data-id="${battingStat._id}" >Show Batting Stats</button>
            <button class="batStat-btn" id="${player._id}">Add battingStat</button>
        `

        indexBattingStatsContainer.appendChild(div)
    })
    document.querySelectorAll(".batStat-btn").forEach(batBtn => {
        batBtn.addEventListener("click", (e) => {
            store.playerId = e.target.id
            console.log(e.target.id)

            console.log(store)
        })

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

export const onSigninSuccess = (userToken) => {
    messageContainer.innerHTML = ''
    store.userToken = userToken
    createSigninForm.classList.add('hide')
    indexPlayerContainer.classList.remove('hide')
}

export const onSignupSuccess = () => {
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




/*
export const onIndexPlayerSuccess = (players) => {
    console.log({ players })
    players.forEach(player => {
        let playerHTML = `
      <div>
      <p>${player.name}</p> 
      <p>${player.position}</p>
      <p>${player.birthplace}</p>
      <p>${player.yearsBorn}</p>
      <p>${player.battingStats.length > 0 ? player.battingStats[0].homerun : ''} </p>
      <p>${player.battingStats.length > 0 ? player.battingStats[0].rbi : ''} </p>
      <p>${player.pichingStats.length > 0 ? player.pitchingStats[0].homerun : ''} </p>
      <p>${player.pitchingStats.length > 0 ? player.pitchingStats[0].rbi : ''} </p>
      <button class="batStat-btn" id="${player._id}">Add battingStat</button>
    
      </div>
  `

        indexPlayerContainer.insertAdjacentHTML("beforeend", playerHTML);





        /*  const div = document.createElement('div')
          div.innerHTML = `
              <p>${player.name}</p> 
              <p>${player.position}</p>
              <p>${player.birthplace}</p>
              <p>${player.yearsBorn}</p>
              <p>${player.battingStats[0].homerun}</p>
              <p>${player.battingStats[0].rbi}</p>
              <button data-id="${player._id}">Show Player</button>
              console.log( player.battingStats.homerun)
          `
  
          indexPlayerContainer.appendChild(div) 
    })

    document.querySelectorAll(".batStat-btn").forEach(batBtn=> {
        batBtn.addEventListener("click", (e)=> {
             store.playerId= e.target.id
             console.log(e.target.id)

             console.log(store)
        })
        
    })
    document.querySelectorAll(".pitchStat-btn").forEach(pitchBtn=> {
        pitchBtn.addEventListener("click", (e)=> {
             store.playerId= e.target.id
             console.log(e.target.id)

             console.log(store)
        })
        
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



}*/
