 import React, {Component} from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        })
    }

    onImportantClick = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }


    render() {

        const buttonStyle = {
            width: "40px",
            "margin-left": "5px",
        };

        const { label, onDeleted } = this.props;

        const { done, important } = this.state;

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done"
        }

        if( important) {
            classNames += " important"
        }

        return (
            <div className="d-flex align-items-center justify-content-between">
                <span onClick={this.onLabelClick} className={classNames}>
                    {label}
                </span>
                <div>
                    <button
                        onClick={onDeleted}
                        className="btn btn-outline-danger"
                        style={buttonStyle}
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button
                        onClick={this.onImportantClick}
                        style={buttonStyle}
                        className="btn btn-outline-success"
                    >
                        <i class="fa-sharp fa-solid fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}



