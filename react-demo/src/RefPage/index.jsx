import React, { Component } from 'react'

export default class RefPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.nameRef = React.createRef()
        this.passwordCompRef = React.createRef()
        this.ageRef = React.createRef()


    }

    submit = e => {
        console.log(this.nameRef.current)
        console.log(this.passwordCompRef.current);
        
    }

    render() {
        return (
            <div>
                <div>
                <button onClick={this.submit}>submit</button>

                </div>
                nameRef
                <input type="text" ref={this.nameRef} />

                <PasswordInput ref={this.passwordCompRef}/>
            </div>
        )
    }
 
}

class PasswordInput extends Component {
    constructor(props) {
        super(props)

        this.passwordRef = React.createRef()
    }

    render() {
        return (
            <div>
                passwordRef
                <input type="text" ref={this.passwordRef} />
            </div>

        )
    }
}

function AgeInput(props, ref) {
    return (
        <div>
            age
            <input type="text" ref={ref} />
        </div>
    )
}