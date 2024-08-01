import React, { useContext } from 'react'
import { createContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{
            backgroundColor: theme.primary.main,
            color: theme.primary.text,
            padding: '1rem',
            margin: '1rem'
        }}>
            Theme Context
        </div>
    )
}

export default Box
