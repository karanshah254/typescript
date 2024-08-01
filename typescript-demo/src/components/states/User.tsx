import React from 'react'
import { useState } from 'react'

type Auth = {
    name: string,
    email: string,
}

const User = (props: Auth) => {
    const [user, setUser] = useState<Auth>({} as Auth)
    const handleLogIn = () => {
        setUser({
            name: props.name,
            email: props.email
        })
    }


    return (
        <div>
            <button style={{
                marginTop: '40px',
                padding: '10px',
                backgroundColor: 'lightblue',
                color: 'black',
                border: 'none',
                borderRadius: '5px'
            }} onClick={handleLogIn}>Logged In</button>
            <div style={{
                marginTop: '10px',
                color: 'blue',
                fontSize: '20px',
                fontWeight: 'bold',
                display: user.name ? 'block' : 'none'
            }}>User name is {user.name} </div>
            <div style={{
                marginTop: '10px',
                color: 'blue',
                fontSize: '20px',
                fontWeight: 'bold',
                display: user.name ? 'block' : 'none'
            }}>User email is {user.email} </div>
        </div>
    )
}

export default User
