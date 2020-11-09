import React, { createContext, useEffect, useState } from 'react'

export const GlobalState = createContext()

export function Provider(props) {
    const [users, setUsers] = useState([])

    const state = {
        users,
        getUsers: () => {
            fetch('http://localhost:4000/api/about')
                .then(res => res.json())
                .then((data) => setUsers(data.uz))
        }
    }

    useEffect(() => {
        state.getUsers()
    }, [])

    return (
        <GlobalState.Provider value={state}>
            {props.children}
        </GlobalState.Provider>
    )
}
