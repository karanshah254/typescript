import React from 'react'
import { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () => {
        setIsLoggedIn(false)
     }
    const handleLogIn = () => { 
        setIsLoggedIn(true)
    }

    const styes = {
        border: '1px solid black',
        padding: '1rem',
        color: 'red',
        backgroundColor: 'lightgray',
        margin: '1rem'
    }

    return (
        <div>
            <button style={styes} onClick={handleLogIn}>Log In</button>
            <button style={styes} onClick={handleLogout}>Log out</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}

export default LoggedIn
