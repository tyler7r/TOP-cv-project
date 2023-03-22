import React, { Component } from "react";
import '../../styles/education-style.css'

class EditEducation extends Component {
    constructor(props) {
        super(props)

        this.array = props.array;
        this.num = props.num;
        this.state = {
            eschool: this.array[this.num].school,
            edegree: this.array[this.num].degree,
            emajor: this.array[this.num].major,
            estartYear: this.array[this.num].startYear,
            efinishYear: this.array[this.num].finishYear,
            id: this.num,
        }
    }

    handleEdit = (e) => {
        this.setState({
            eschool: this.state.eschool,
            edegree: this.state.edegree,
            emajor: this.state.emajor,
            estartYear: this.state.estartYear,
            efinishYear: this.state.efinishYear,
            id: this.state.id,
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.array[this.num].school = this.state.eschool;
        this.array[this.num].degree = this.state.edegree;
        this.array[this.num].major = this.state.emajor;
        this.array[this.num].startYear = this.state.estartYear;
        this.array[this.num].finishYear = this.state.efinishYear;
        document.querySelector(`#no${this.num}.educationEditForm`).classList.add('hidden');
        let buttons = document.querySelectorAll(`.no${this.num}`);
        buttons.forEach((button) => {
            button.classList.remove('hidden');
        })
        this.props.rerender();
    }

    render() {
        return (
            <div>
                <form id={`no${this.props.num}`} className='educationEditForm hidden'>
                    <label htmlFor='eschool'>School: </label>
                    <input className='educationFormInput' onChange={this.handleEdit} type='text' id='school' name='eschool' value={this.state.eschool}/>
                    <label htmlFor='edegree'>Degree Acquired: </label>
                    <input className='educationFormInput' onChange={this.handleEdit} type='text' id='degree' name='edegree' value={this.state.edegree}/>
                    <label htmlFor='emajor'>Major: </label>
                    <input className='educationFormInput' onChange={this.handleEdit} type='text' id='major' name='emajor' value={this.state.emajor}/>
                    <label htmlFor='estartYear'>Start Year: </label>
                    <input className='educationFormInput' onChange={this.handleEdit} type='text' id='startYear' name='estartYear' value={this.state.estartYear}/>
                    <label htmlFor='efinishYear'>Finish Year: </label>
                    <input className='educationFormInput' onChange={this.handleEdit} type='text' id='finishYear' name='efinishYear' value={this.state.efinishYear}/>
                    <button onClick={this.handleSubmit} className='submitEdit' type='submit'>Submit Changes</button>
                </form>
            </div>
        )
    }
}

export default EditEducation;