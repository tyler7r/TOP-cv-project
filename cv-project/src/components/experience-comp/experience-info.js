import React, { Component } from 'react';
import '../../styles/experience-style.css'
import EditExperience from './experience-edit';

class Experience extends Component {
    constructor() {
        super()

        this.state = {
            overall: [],
            individual: {
                title: '',
                company: '',
                responsibilities: '',
                exstartYear: '',
                exfinishYear: '',
                id: 0,
            }
        }

        this.deleteBtn = this.deleteBtn.bind(this);
        this.editState = this.editState.bind(this);
    }

    editState() {
        this.setState({
            overall: this.state.overall
        })
    }

    handleChange = (e) => {
        this.setState({
            individual: {
                title: this.state.individual.title,
                company: this.state.individual.company,
                responsibilities: this.state.individual.responsibilities,
                exstartYear: this.state.individual.exstartYear,
                exfinishYear: this.state.individual.exfinishYear,
                id: this.state.individual.id,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitBtn = (e) => {
        e.preventDefault();
        this.setState({
            overall: this.state.overall.concat(this.state.individual),
            individual: {
                title: '',
                company: '',
                responsibilities: '',
                exstartYear: '',
                exfinishYear: '',
                id: this.state.individual.id + 1,
            }
        })
        const inputs = document.querySelectorAll('.experienceInput');
        inputs.forEach((input) => {
            input.value = '';
        })
        document.querySelector('.experienceForm').classList.add('hidden');
        document.querySelector('.experienceInfo').classList.remove('hidden');
        document.querySelector('.exAddBtn').classList.remove('hidden');
    }

    addBtn = (e) => {
        document.querySelector('.experienceForm').classList.remove('hidden');
    }

    editBtn = (i) => {
        document.querySelector(`#ex${i.id}`).classList.remove('hidden');
        let buttons = document.querySelectorAll(`.ex${i.id}`);
        buttons.forEach((button) => {
            button.classList.add('hidden');
        })
        document.querySelector('.exAddBtn').classList.remove('hidden');
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
            <div className='experienceSection content'>
                <h1>EXPERIENCES</h1>
                <form className='experienceForm'>
                    <label htmlFor='title'>Job Title: </label>
                    <input className='experienceInput' onChange={this.handleChange} type='text' id='title' name='title'/>
                    <label htmlFor='company'>Company: </label>
                    <input className='experienceInput' onChange={this.handleChange} type='text' id='company' name='company'/>
                    <label htmlFor='responsibilities'>Job Responsibilities: </label>
                    <input className='experienceInput' onChange={this.handleChange} type='text' id='responsibilities' name='responsibilities' />
                    <label htmlFor='exstartYear'>Start Year: </label>
                    <input className='experienceInput' onChange={this.handleChange} type='text' id='exstartYear' name='exstartYear' />
                    <label htmlFor='exfinishYear'>Finish Year: </label>
                    <input className='experienceInput' onChange={this.handleChange} type='text' id='exfinishYear' name='exfinishYear' />
                    <button onClick={this.submitBtn} className='exSubmitBtn' type='submit'>Submit Experience</button>
                </form>
                <div className='experienceInfo hidden'>
                    {this.state.overall.map((item) => {
                        return (
                            <div key={item.id} className='experienceItem'>
                                <div className='title'>Job Title: {item.title}</div>
                                <div className='company'>Company: {item.company}</div>
                                <div className='responsibilities'>Responsibilities: {item.responsibilities}</div>
                                <div className='exstartYear'>Start: {item.exstartYear}</div>
                                <div className='exfinishYear'>Finish: {item.exfinishYear}</div>
                                <button onClick={() => this.editBtn(item)} className={`editButton ex${item.id}`}>Edit Entry</button>
                                <button onClick={() => this.deleteBtn(item.id)} className={`deleteBtn ex${item.id}`}>Delete Entry</button>
                                <EditExperience array={overall} num={item.id} rerender={this.editState}/>
                            </div>
                        )
                    })}
                </div>
                <button onClick={this.addBtn} className='exAddBtn hidden'>Add Experience Entry</button>
            </div>
        )
    }
}

export default Experience;