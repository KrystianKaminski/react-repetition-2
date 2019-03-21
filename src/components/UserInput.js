import React from 'react'

const style = {
    input: {
        margin: 20,
        padding: 20,
        display: 'flex',
        justifyContent: 'center'
    }
}

const UserInput = props => (
    <div
        style={style.input}
    >
        User input: <input type="text" />
    </div>
)

export default UserInput