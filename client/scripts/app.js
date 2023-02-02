import { indexPlayer, createPlayer, showPlayer, updatePlayer, deletePlayer, createBattingStats, showBattingStats, updateBattingStats, deleteBattingStats, createPitchingStats, showPitchingStats, updatePitchingStats, deletePitchingStats, signin, signup } from './api.js'
import {
	onFailure,
	onCreatePlayerSuccess,
	onCreateBattingStatsSuccess,
	onCreatePitchingStatsSuccess,
	onShowPlayerSuccess,
	onShowBattingStatsSuccess,
	onShowPitchingStatsSuccess,
	onUpdatePlayerSuccess,
	onUpdateBattingStatsSuccess,
	onUpdatePitchingStatsSuccess,
	onDeletePlayerSuccess,
	onDeleteBattingStatsSuccess,
	onDeletePitchingStatsSuccess,
	onSigninSuccess,
	onSignupSuccess
} from './ui.js'
const createSigninForm = document.querySelector('#signin-form')
const createSignupForm = document.querySelector('#signup-form')
const createPlayerForm = document.querySelector('#create-player-form')
const createBattingStatsForm = document.querySelector('#create-battingStats-form')
const createPitchingStatsForm = document.querySelector('#create-pitchingStats-form')
const indexPlayerContainer = document.querySelector('#index-player-container')
const indexBattingStatsContainer = document.querySelector('#index-battingStats-container')
const indexPitchingStatsContainer = document.querySelector('#index-pitchingStats-container')
const showPlayerContainer = document.querySelector('#show-player-container')
const showBattingStatsContainer = document.querySelector('#show-battingStats-container')
const showPitchingStatsContainer = document.querySelector('#show-pitchingStats-container')
const logOutButton = document.querySelector('.logout')
const Day = document.querySelector('.day')
const Night = document.querySelector('.night')

logOutButton.addEventListener('click', (event) => {
	createPlayerForm.style.display = "none";
	showPlayerContainer.style.display = "none";
	createSigninForm.style.display = "block";
	createSignupForm.style.display = "block";

}
)
Night.addEventListener('click', (event) => {
	document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWoOexS93QilrpJVvwt4wNAm-uuPD_HUyNw&usqp=CAU')";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
}
)

Day.addEventListener('click', (event) => {
	document.body.style.backgroundImage = "url('https://cdn.britannica.com/14/125714-050-429B61D6/wall-Green-Monster-Fenway-Park-Boston.jpg')";
}
)

createPlayerForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const playerData = {
		player: {
			name: event.target['name'].value,
			position: event.target['position'].value,
			birthplace: event.target['birthplace'].value,
			yearsBorn: event.target['yearsBorn'].value,
		},
	}


	createPlayer(playerData)
		.then((res) => res.json()).then((data) => {
			console.log(data);
			createBattingStats({
				battingStats: {
					playerId: data.player._id,
					name: event.target['name'].value,
					average: event.target['average'].value,
					homerun: event.target['homerun'].value,
					rbi: event.target['rbi'].value
				},

			}).then((res) => res.json()).then((data) => {
				console.log("batting stat data", data);
				createPitchingStats({
					pitchingStats: {
						playerId: data.player._id,
						name: event.target['name'].value,
						win: event.target['win'].value,
						loss: event.target['loss'].value,
						era: event.target['era'].value
					},
				}).then((res) => res.json()).then((data) => console.log(data)).then(onCreatePlayerSuccess).then(indexPlayer)
					.then((res) => res.json()).then((data) => {
						onShowPlayerSuccess(data.players)
						data.players.map((player) => {
							console.log(player);
						})
					})
			})
		}).catch(onFailure)
})


createSigninForm.addEventListener('submit', (event) => {
	event.preventDefault()
	createPlayerForm.style.display = "block";
	showPlayerContainer.style.display = "block";
	createSignupForm.style.display = "none";
	createSigninForm.style.display = "none";
	showPlayerContainer.style.display = "flex";
	const signinData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value
		},
	}
	signin(signinData)
		.then((res) => res.json())
		.then((res) => onSigninSuccess(res.token))
		.then(indexPlayer)
		.then((res) => res.json()).then((data) => {
			onShowPlayerSuccess(data.players)
			data.players.map((player) => {
				console.log(player);
			})
		})
		.catch(onFailure)
})

createSignupForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const signupData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value
		},
	}
	signup(signupData)
		.then(onSignupSuccess)
		.catch(onFailure)
})


createBattingStatsForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const battingStatsData = {
		battingStats: {
			name: event.target['name'].value,
			average: event.target['average'].value,
			homerun: event.target['homerun'].value,
			rbi: event.target['rbi'].value,

		},
	}
	createBattingStats(battingStatsData)
		.then(onCreateBattingStatsSuccess)
		.catch(onFailure)
})

createPitchingStatsForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const pitchingStatsData = {
		pitchingStats: {
			name: event.target['name'].value,
			win: event.target['win'].value,
			loss: event.target['loss'].value,
			era: event.target['era'].value
		},
	}

	createPitchingStats(pitchingStatsData)
		.then(onCreatePitchingStatsSuccess)
		.catch(onFailure)
})


indexPlayerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showPlayer(id)
		.then((res) => res.json())
		.then((res) => onShowPlayerSuccess(res.player))
		.catch(onFailure)
})

indexBattingStatsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showBattingStats(id)
		.then((res) => res.json())
		.then((res) => onShowBattingStatsSuccess(res.battingStats))
		.catch(onFailure)
})

indexPitchingStatsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	showPitchingStats(id)
		.then((res) => res.json())
		.then((res) => onShowPitchingStatsSuccess(res.pitchingStats))
		.catch(onFailure)
})

showPlayerContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const playerData = {
		player: {
			name: event.target['name'].value,
			position: event.target['position'].value,
			birthplace: event.target['birthplace'].value,
			yearsBorn: event.target['yearsBorn'].value,
		},
	}

	if (!id) return

	updatePlayer(playerData, id)
		.then(onUpdatePlayerSuccess)
		.catch(onFailure)
})

showBattingStatsContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const battingStatsData = {
		battingStats: {
			name: event.target['name'].value,
			average: event.target['average'].value,
			homerun: event.target['homerun'].value,
			rbi: event.target['rbi'].value,
		},
	}

	if (!id) return

	updateBattingStats(battingStatsData, id)
		.then(onUpdateBattingStatsSuccess)
		.catch(onFailure)
})


showPitchingStatsContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const pitchingStatsData = {
		pitchingStats: {
			name: event.target['name'].value,
			win: event.target['win'].value,
			loss: event.target['loss'].value,
			era: event.target['era'].value,
		},
	}

	if (!id) return

	updatePitchingStats(pitchingStatsData, id)
		.then(onUpdatePitchingStatsSuccess)
		.catch(onFailure)
})

showPlayerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deletePlayer(id)
		.then(onDeletePlayerSuccess)
		.catch(onFailure)
})

showBattingStatsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteBattingStats(id)
		.then(onDeleteBattingStatsSuccess)
		.catch(onFailure)
})

showPitchingStatsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deletePitchingStats(id)
		.then(onDeletePitchingStatsSuccess)
		.catch(onFailure)
})
