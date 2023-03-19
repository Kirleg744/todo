 import React, {Component} from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

    render() {

        const buttonStyle = {
            width: "40px",
            "margin-left": "5px",
        };

        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = "todo-list-item";
        if (done) {
            classNames += " done"
        }

        if( important) {
            classNames += " important"
        }

        return (
            <div className="d-flex align-items-center justify-content-between">
                <span onClick={onToggleDone} className={classNames}>
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
                        onClick={onToggleImportant}
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



