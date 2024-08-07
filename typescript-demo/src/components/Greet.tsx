import React from 'react'
type GreetProps = {
    name: string,
    age: number
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            <h3>
                Good Morning! My name is {props.name}. I am {props.age} year old.
            </h3>
        </div>
    )
}

export default Greet
