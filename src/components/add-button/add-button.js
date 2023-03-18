import React, { Component } from "react";

export default class AddButton extends Component{

    render(){
        return(
            <div>
                <button onClick={() => this.props.onAdded()} className="btn btn-success">Добавить задачу</button>;
            </div>
        )
    }

}
