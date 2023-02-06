import { store } from './store.js'
// Wonderful job on this file. Only feedback would be to add comments and group together your api calls on what resource they handle. Having all the batting calls, the pitching calls, and the player calls together with comments separating the sections will make coming back to this project so much easier. 

export const indexPlayer = () => {
    return fetch(`http://localhost:8000/players`, {
        headers: {
            'Authorization': `Bearer ${store.userToken}`,
        }
    })
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
    return fetch(`http://localhost:8000/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const signup = (data) => {
    return fetch(`http://localhost:8000/signup`, {
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
    return fetch(`http://localhost:8000/players/${id}`)
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
