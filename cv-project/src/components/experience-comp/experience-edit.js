import React, { Component } from 'react';
import '../../styles/experience-style.css';

class EditExperience extends Component {
    constructor(props) {
        super(props)

        this.array = props.array;
        this.num = props.num;
        this.state = {
            extitle: this.array[this.num].title,
            excompany: this.array[this.num].company,
            exresponsibilities: this.array[this.num].responsibilities,
            exstartYear: this.array[this.num].startYear,
            exfinishYear: this.array[this.num].finishYear,
            id: this.num,
        }
    }

    handleEdit = (e) => {
        this.setState({
            extitle: this.state.extitle,
            excompany: this.state.excompany,
            exresponsibilities: this.state.exresponsibilities,
            exstartYear: this.state.exstartYear,
            exfinishYear: this.state.exfinishYear,
            id: this.state.id,
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.array[this.num].title = this.state.extitle;
        this.array[this.num].company = this.state.excompany;
        this.array[this.num].responsibilities = this.state.exresponsibilities;
        this.array[this.num].startYear = this.state.exstartYear;
        this.array[this.num].finishYear = this.state.exfinishYear;
        document.querySelector(`#ex${this.num}.experienceEditForm`).classList.add('hidden');
        let buttons = document.querySelectorAll(`.ex${this.num}`)
        buttons.forEach((button) => {
            button.classList.remove('hidden');
        })
        this.props.rerender();
    }

    render() {
        return (
            <div>
                <form id={`ex${this.props.num}`} className='experienceEditForm hidden'>
                    <label htmlFor='extitle'>Job Title: </label>
                    <input className='experienceFormInput' onChange={this.handleEdit} type='text' id='extitle' name='extitle'/>
                    <label htmlFor='excompany'>Company: </label>
                    <input className='experienceFormInput' onChange={this.handleEdit} type='text' id='excompany' name='excompany'/>
                    <label htmlFor='exresponsibilities'>Job Responsibilities: </label>
                    <input className='experienceFormInput' onChange={this.handleEdit} type='text' id='exresponsibilities' name='exresponsibilities' />
                    <label htmlFor='eexStartYear'>Start Year: </label>
                    <input className='experienceFormInput' onChange={this.handleEdit} type='text' id='eexStartYear' name='eexStartYear' />
                    <label htmlFor='eexFinishYear'>Finish Year: </label>
                    <input className='experienceFormInput' onChange={this.handleEdit} type='text' id='eexFinishYear' name='eexFinishYear' />
                    <button onClick={this.handleSubmit} className='exSubmitEdit' type='submit'>Submit Changes</button>
                </form>
            </div>
        )
    }
}

export default EditExperience;