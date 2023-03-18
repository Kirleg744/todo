import React from "react";
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import DoneCounter from "../app-header/done-counter";
import TaskFilter from "../task-filter";

const App = () => {
    
    const todoData = [
        { label: "Drink Coffee", id: 1 },
        { label: "Make Awesome App", id: 2 },
        { label: "Have a lunch", id: 3 },
    ];


    const doneData = [{ label: "All" }, { label: "Active" }, { label: "Done" }];

    const containerStyle = {
        width: "500px",
    };

    return (
        <div className="mx-auto" style={containerStyle}>
            <div className="d-flex align-items-center justify-content-between">
                <AppHeader />
                <DoneCounter />
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <SearchPanel />
                <TaskFilter items={doneData} />
            </div>
            <TodoList 
            todos={todoData}
            onDeleted = {(id) => console.log('del', id)}
            />
        </div>
    );
};


export default App;
