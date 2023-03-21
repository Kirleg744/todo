import React, { Component } from "react";
import './add-form.css'

export default class AddForm extends Component{

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        this.props.onAdded(this.state.label);
        e.preventDefault()
        this.setState({
            label: ''
        })

    }

    render(){
        return(
            <form onSubmit = {this.onSubmit} className="d-flex">
                <input value = {this.state.label} onChange={this.onLabelChange} placeholder = "Что нужно сделать?" className="form-control" type="text" />
                <button className="btn btn-success">Добавить задачу</button>
            </form>
        )
    }

}
