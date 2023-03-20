import React, { Component } from 'react';

class General extends Component {
    constructor() {
        super()

        this.state = ''
    }



    render() {
        return (
            <div>
                <form>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' id='name'/>
                    <label htmlFor='mail'>Email: </label>
                    <input type='email' id='mail'/>
                    <label htmlFor='phone'>Phone: </label>
                    <input type='text' id='phone'/>
                </form>
            </div>
        )
    }
}

export default General;