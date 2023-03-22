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

        this.deleteBtn = this.deleteBtn.bind(this);
        this.editState = this.editState.bind(this);
    }

    editState() {
        this.setState({
            overall: this.state.overall,
        })
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
        document.querySelector(`#no${i.id}`).classList.remove('hidden');
        let buttons = document.querySelectorAll(`.no${i.id}`);
        buttons.forEach(button => {
            button.classList.add('hidden');
        })
        document.querySelector('.addBtn').classList.remove('hidden');
    }

    deleteBtn = (i) => {
        let array = [...this.state.overall];
        this.setState({
            overall: array.filter(item => item.id !== i),
        })
    }

    render() {
        const { overall } = this.state;
        return (
            <div className='educationSection content'>
                <h1>EDUCATION</h1>
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
                                <div className='school'>School: {item.school}</div>
                                <div className='degree'>Degree: {item.degree}</div>
                                <div className='major'>Major: {item.major}</div>
                                <div className='startYear'>Start Year: {item.startYear}</div>
                                <div className='finishYear'>Finish Year: {item.finishYear}</div>
                                <button onClick={() => this.editBtn(item)} className={`editButton no${item.id}`}>Edit Entry</button>
                                <button onClick={() => this.deleteBtn(item.id)} className={`deleteBtn no${item.id}`}>Delete Entry</button>
                                <EditEducation array={overall} num={item.id} rerender={this.editState}/>
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