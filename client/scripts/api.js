import { store } from './store.js'


export const indexPlayer = () => {
    return fetch(`http://localhost:8000/players`)
        /*
        headers: {
            'Authorization': `Bearer ${store.userToken}`,
        }*/
    
}

export const indexBattingStats = () => {
    return fetch(`http://localhost:8000/batting-stats`)
}

export const indexPitchingStats = () => {
    return fetch(`http://localhost:8000/pitching-stats`)
}


export const createPlayer = (data) => {
    return fetch(`http://localhost:8000/players`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const createBattingStats = (data) => {
    return fetch(`http://localhost:8000/batting-stats`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const signin = (data) => {
    return fetch(`http://localhost:8000/sign-in`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const signup = (data) => {
    return fetch(`http://localhost:8000/sign-up`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const createPitchingStats = (data) => {
    return fetch(`http://localhost:8000/pitching-stats`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showPlayer = (id) => {
    return fetch(`http://localhost:8000/players/${id}`), {
        /*
        headers: {
			Authorization: `Bearer ${store.userToken}`,
		},*/
    }
}

export const showBattingStats = (id) => {
    return fetch(`http://localhost:8000/batting-stats/${id}`)
}

export const showPitchingStats = (id) => {
    return fetch(`http://localhost:8000/pitching-stats/${id}`)
}

export const updatePlayer = (data, id) => {
    return fetch(`http://localhost:8000/players/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const updateBattingStats = (data, id) => {
    return fetch(`http://localhost:8000/batting-stats/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const updatePitchingStats = (data, id) => {
    return fetch(`http://localhost:8000/pitching-stats/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deletePlayer = (id) => {
    return fetch(`http://localhost:8000/players/${id}`, {
        method: 'DELETE'
    })
}

export const deleteBattingStats = (id) => {
    return fetch(`http://localhost:8000/batting-stats/${id}`, {
        method: 'DELETE'
    })
}

export const deletePitchingStats = (id) => {
    return fetch(`http://localhost:8000/pitching-stats/${id}`, {
        method: 'DELETE'
    })
}