import React from 'react'
type GreetProps = {
    name: string,
    age: number
}

const greet = (props: GreetProps) => {
    return (
        <div>
            <h3>
                Good Morning! My name is {props.name}. I am {props.age} year old.
            </h3>
        </div>
    )
}

export default greet
