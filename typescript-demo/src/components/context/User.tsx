import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext.setUser({
            name: 'Karan',
            email: 'karan@mail.com'
        })

    }

    const handleLogout = () => {
        userContext.setUser(null)

    }

    return (
        <div>
            <button style={{
                backgroundColor: 'green',
                margin: '1rem',
                color: 'white',
                padding: '0.5rem'
            }} onClick={handleLogin}>Logged In</button>
            <button style={{
                backgroundColor: 'green',
                padding: '0.5rem',
                margin: '1rem',
                color: 'white',
            }} onClick={handleLogout}>Logged out</button>
            <div style={{
                margin: '1rem',
                fontSize: '1.5rem',
                fontFamily: 'Arial',
                fontWeight: 'bold',
            }}>User name is {userContext?.user?.name} </div>
            <div style={{
                fontSize: '1.5rem',
                fontFamily: 'Arial',
                fontWeight: 'bold',
            }}>User email is {userContext?.user?.email} </div>
        </div>
    )

}
export default User