import React, { Component } from 'react';
import '../../styles/education-style.css'
import EditEducation from './education-edit';

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
                id: 0,
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
                id: this.state.individual.id,
                [e.target.name]: e.target.value,
            },  
        })
    }

    submitBtn = (e) => {
            e.preventDefault();
            this.setState({
                overall: this.state.overall.concat(this.state.individual),
                individual: {
                    school: '',
                    degree: '',
                    major: '',
                    startYear: '',
                    finishYear: '',
                    id: this.state.individual.id + 1,
                }
            })
            const inputs = document.querySelectorAll('.educationInput');
            inputs.forEach((input) => {
                input.value = '';
            })
            document.querySelector('.educationForm').classList.add('hidden');
            document.querySelector('.educationInfo').classList.remove('hidden');
            document.querySelector('.addBtn').classList.remove('hidden');
    }

    addBtn = (e) => {
        document.querySelector('.educationForm').classList.remove('hidden');
    }

    editBtn = (i) => {
        // document.querySelector('.educationForm').classList.remove('hidden');
        document.querySelector('#school').value = i.school;
        document.querySelector('#degree').value = i.degree;
        document.querySelector('#major').value = i.major;
        document.querySelector('#startYear').value = i.startYear;
        document.querySelector('#finishYear').value = i.finishYear;
        document.querySelector('.educationInfo').classList.add('hidden');
        document.querySelector('.addBtn').classList.remove('hidden');
    }

    deleteBtn = (i) => {
        let array = [...this.state.overall];
        this.setState({
            overall: array.filter(item => item.id !== i),
        })
    }

    render() {
        return (
            <div>
                <h1>Education Section</h1>
                <form className='educationForm'>
                    <label htmlFor='school'>School: </label>
                    <input className='educationInput' onChange={this.handleChange} type='text' id='school' name='school'/>
                    <label htmlFor='degree'>Degree Acquired: </label>
                    <input className='educationInput' onChange={this.handleChange} type='text' id='degree' name='degree'/>
                    <label htmlFor='major'>Major: </label>
                    <input className='educationInput' onChange={this.handleChange} type='text' id='major' name='major'/>
                    <label htmlFor='startYear'>Start Year: </label>
                    <input className='educationInput' onChange={this.handleChange} type='text' id='startYear' name='startYear'/>
                    <label htmlFor='finishYear'>Finish Year: </label>
                    <input className='educationInput' onChange={this.handleChange} type='text' id='finishYear' name='finishYear'/>
                    <button onClick={this.submitBtn} className='submitBtn' type='submit'>Submit Education</button>
                </form>
                <div className='educationInfo hidden'>
                        {this.state.overall.map((item) => {
                            return (
                                <div key={item.id} className='educationItem'>
                                    {item.school}, {item.degree}, {item.major}, {item.startYear}, {item.finishYear}
                                    <button onClick={() => <EditEducation />}>Edit Entry</button>
                                    <button onClick={() => this.deleteBtn(item.id)} className='deleteBtn'>Delete Entry</button>
                                </div>
                            )
                        })}
                </div>
                <button onClick={this.addBtn} className='addBtn hidden'>Add Education Entry</button>
            </div>
        )
    }
}

export default Education;