import React, { Component } from "react";
import './search-panel.css'

export default class SearchPanel extends Component {
    state = {
        term: "",
    };

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term});
        this.props.onSearchChange(term)
    };

    render() {
        const searchStyle = {
            fontSize: "20px",
        };

        return (
            <input 
                // onSearch = {searchValue(this.state.label)}
                onChange={this.onSearchChange}
                style={searchStyle}
                placeholder="Type here to search"
                value = {this.state.term}
                type="text"
                className="search-panel"
            />
        );
    }
};
