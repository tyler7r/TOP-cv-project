import React, { Component } from 'react';
import '../styles/education-style.css'

class Education extends Component {
    constructor() {
        super()

        this.state = {
            overall: [],
            individual: {
                school: '',
                degree: '',
                major: '',
                startYear: '',
                finishYear: '',
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            individual: {
                school: this.state.individual.school,
                degree: this.state.individual.degree,
                major: this.state.individual.major,
                startYear: this.state.individual.startYear,
                finishYear: this.state.individual.finishYear,
                [e.target.name]: e.target.value,
            },  
        })
    }

    submitBtn = (e) => {
        e.preventDefault();
        document.querySelector('.educationForm').classList.add('hidden');
        document.querySelector('.educationInfo').classList.remove('hidden');
    }

    editBtn = (e) => {
        document.querySelector('.educationForm').classList.remove('hidden');
        document.querySelector('.educationInfo').classList.add('hidden');
    }

    render() {
        return (
            <div>
                <h1>Education Section</h1>
                <form className='educationForm'>
                    <label htmlFor='school'>School: </label>
                    <input onChange={this.handleChange} type='text' id='school' name='school'/>
                    <label htmlFor='degree'>Degree Acquired: </label>
                    <input onChange={this.handleChange} type='text' id='degree' name='degree'/>
                    <label htmlFor='major'>Major: </label>
                    <input onChange={this.handleChange} type='text' id='major' name='major'/>
                    <label htmlFor='startYear'>Start Year: </label>
                    <input onChange={this.handleChange} type='text' id='startYear' name='startYear'/>
                    <label htmlFor='finishYear'>Finish Year: </label>
                    <input onChange={this.handleChange} type='text' id='finishYear' name='finishYear'/>
                    <button onClick={this.submitBtn} className='submitBtn' type='submit'>Submit Education</button>
                </form>
                <div className='educationInfo hidden'>
                    <h3>School: {this.state.individual.school}</h3>
                    <h3>Degree: {this.state.individual.degree}</h3>
                    <h3>Major: {this.state.individual.major}</h3>
                    <h3>Start Year: {this.state.individual.startYear}</h3>
                    <h3>Finish Year: {this.state.individual.finishYear}</h3>
                    <button onClick={this.editBtn}>Edit Education</button>
                </div>
            </div>
        )
    }
}

export default Education;