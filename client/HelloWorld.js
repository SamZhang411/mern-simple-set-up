import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>it is a pleasure</h2>
        </div>
    )
}

export default hot(module)(HelloWorld)