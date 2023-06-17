import React, { Component } from "react";
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import DoneCounter from "../app-header/done-counter";
import TaskFilter from "../task-filter";
import AddForm from "../add-form";
import "./app.css";

export default class App extends Component {
    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem("Drink Coffee"),
            this.createTodoItem("Make Awesome App"),
            this.createTodoItem("Have a lunch"),
        ],
        term: "",
        filter: "all",
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        };
    }

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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "important"),
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, "done"),
            };
        });
    };

    addItem = (text) => {
        this.setState(({ todoData }) => {
            if (text === ''){
                return todoData
            }
            const newItem = this.createTodoItem(text);
            const newArray = todoData;
            newArray.push(newItem);
            return {
                todoData: newArray,
            };
        });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearchChange = (term) => {
        this.setState({ term });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    filter(items, filter) {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const { todoData, term, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCounter = todoData.filter((el) => el.done).length;
        const todoCounter = todoData.filter((el) => !el.done).length;

        return (
            <div className="mx-auto container">
                <div className="d-flex align-items-center justify-content-between">
                    <AppHeader />
                    <DoneCounter done={doneCounter} todo={todoCounter} />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <TaskFilter
                        onFilterChange={this.onFilterChange}
                        filter={filter}
                    />
                </div>
                <AddForm onAdded={this.addItem} />
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
            </div>
        );
    }
}
