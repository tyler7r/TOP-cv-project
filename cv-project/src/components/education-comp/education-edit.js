import Education from "./educational-info";
import React, { Component } from "react";

class EditEducation extends Component {
    constructor(props) {
        super(props)

        this.state = '';
    }

    render() {
        return (
            <div>
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
                <button onClick={this.submitBtn} className='submitEdit' type='submit'>Submit Changes</button>
            </div>
        )
    }
}

export default EditEducation;