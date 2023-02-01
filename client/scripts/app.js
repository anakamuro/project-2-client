import { indexPlayer, createPlayer, showPlayer, updatePlayer, deletePlayer, indexBattingStats, createBattingStats, showBattingStats, updateBattingStats, deleteBattingStats, indexPitchingStats, createPitchingStats, showPitchingStats, updatePitchingStats, deletePitchingStats, signin, signup } from './api.js'
import {
	//onIndexPlayerSuccess,
	onIndexBattingStatsSuccess,
	onIndexPitchingStatsSuccess,
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

logOutButton.addEventListener('click', (event) => {
	createPlayerForm.style.display = "none";
	showPlayerContainer.style.display = "none";
	createSigninForm .style.display = "block";
	createSignupForm .style.display = "block";
	}
)
// indexPlayer()
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         onIndexPlayerSuccess(res.players)
// 		onShowPlayerSuccess(res.players)
//     })
//     .catch(onFailure)

indexBattingStats()
	.then(res => res.json())
	.then(res => {
		console.log(res)
		onIndexBattingStatsSuccess(res.battingStats)
	})
	.catch(onFailure)

indexPitchingStats()
	.then(res => res.json())
	.then(res => {
		console.log(res)
		onIndexPitchingStatsSuccess(res.pitchingStats)
	})
	.catch(onFailure)


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

	// console.log(characterData)
	createPlayer(playerData)
		// .then(createBattingStats())
		.then((res) => res.json()).then((data) => {
			console.log(data);
			createBattingStats({
				battingStats: {
					playerId: data.player._id,
					name: event.target['name'].value,
					average: event.target['average'].value,
					homerun: event.target['homerun'].value,
					rbi: event.target['rbi'].value
				}
			}).then((res) => res.json()).then((data) => console.log(data))
		})
		.then(onCreatePlayerSuccess).then(indexPlayer)
		.then((res) => res.json()).then((data) => {
			onShowPlayerSuccess(data.players)
			data.players.map((player) => {
				console.log(player);
			})
		})
		.catch(onFailure)
})

createSigninForm.addEventListener('submit', (event) => {
	event.preventDefault()
	createPlayerForm.style.display = "block";
	showPlayerContainer.style.display = "block";
	createSignupForm .style.display = "none";
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

		// .then((data) => console.log(data))
		// .then((res) => onIndexPlayerSuccess(res.campaigns))
		// .then(indexBattingStats)
		// .then((res) => res.json())
		// .then((res) => onIndexBattingStatsSuccess(res.battingStats))
		// .then(indexPitchingStats)
		// .then((res) => res.json())
		// .then((res) => onIndexPitchingStatsSuccess(res.pitchgingStats))
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

	// console.log(characterData)
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

	// console.log(characterData)
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

	// console.log(pitchingStatsData)
	createPitchingStats(pitchingStatsData)
		.then(onCreatePitchingStatsSuccess)
		.catch(onFailure)
})


indexPlayerContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	// console.log(id)

	if (!id) return

	showPlayer(id)
		.then((res) => res.json())
		.then((res) => onShowPlayerSuccess(res.player))
		.catch(onFailure)
})

indexBattingStatsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	// console.log(id)

	if (!id) return

	showBattingStats(id)
		.then((res) => res.json())
		.then((res) => onShowBattingStatsSuccess(res.battingStats))
		.catch(onFailure)
})

indexPitchingStatsContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	// console.log(id)

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
		// this function (onUpdateCharacterSuccess) does not need anything to run. NO params
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
		// this function (onUpdateCharacterSuccess) does not need anything to run. NO params
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
		// this function (onUpdateCharacterSuccess) does not need anything to run. NO params
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
