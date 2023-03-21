import React, { Component } from 'react';
import '../styles/general-style.css'

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            [e.target.name]: e.target.value,
        })
    }

    submitGeneral = (e) => {
        e.preventDefault();
        let formSelect = document.querySelector('.generalInfoForm');
        formSelect.classList.add('hidden');
        document.querySelector('.generalInfo').classList.remove('hidden');
    }

    editBtn = (e) => {
        let formSelect = document.querySelector('.generalInfoForm');
        formSelect.classList.remove('hidden');
        document.querySelector('.generalInfo').classList.add('hidden');
    }

    render() {
        return (
            <div>
                <h1>General Information</h1>
                <form className='generalInfoForm'>
                    <label htmlFor='name'>Name: </label>
                    <input onChange={this.handleChange} type='text' id='name' name='name'/>
                    <label htmlFor='email'>Email: </label>
                    <input onChange={this.handleChange} type='email' id='email' name='email'/>
                    <label htmlFor='phone'>Phone: </label>
                    <input onChange={this.handleChange} type='text' id='phone' name='phone'/>
                    <button onClick={this.submitGeneral} type='submit'>Submit General</button>
                </form>
                <div className='hidden generalInfo'>
                    <h3>Name: {this.state.name}</h3>
                    <h3>Email: {this.state.email}</h3>
                    <h3>Phone: {this.state.phone}</h3>
                    <button onClick={this.editBtn} className='editBtn'>Edit General</button>
                </div>
            </div>
        )
    }
}

export default General;