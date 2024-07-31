import React from 'react'
import { Name } from './Person.type'
type ListProps = {
    names: Name[]
}

const PersonList = (props: ListProps) => {
    return (
        <div>
            {props.names.map(names => {
                return (
                    <h3 key={names.first}>
                        {names.first} {names.last}
                    </h3>
                )
            })}
        </div>
    )
}

export default PersonList
