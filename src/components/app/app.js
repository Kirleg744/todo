import React, {Component} from "react";
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import DoneCounter from "../app-header/done-counter";
import TaskFilter from "../task-filter";
import AddButton from "../add-button";
import './app.css'

export default class App extends Component {
    state = {
        todoData: [
            { label: "Drink Coffee", id: 1 },
            { label: "Make Awesome App", id: 2 },
            { label: "Have a lunch", id: 3 },
            { label: "Drop Genshin", id: 4 },
        ],
        doneData: [{ label: "All" }, { label: "Active" }, { label: "Done" }],
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            todoData.splice(idx, 1);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx),
            ];
            return {
                todoData: newArray,
            };
        });
    };

    addItem = () => {
        console.log('lox')
        this.setState(({ todoData }) => {
            const newArray = todoData
            newArray.push({label: "Ilya lox", id: todoData.length + 1})
            console.log(newArray)
        
            return{
                todoData: newArray
            }

        });
    }

    render() {
        return (
            <div className="mx-auto container">
                <div className="d-flex align-items-center justify-content-between">
                    <AppHeader />
                    <DoneCounter />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <SearchPanel />
                    <TaskFilter items={this.state.doneData} />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <AddButton
                    onAdded = {this.addItem}
                />
            </div>
        );
    }
};

