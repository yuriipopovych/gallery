
import React, { Component } from 'react'
import './SearchForm.css';

export default class SearchForm extends Component {
    state = {
        inputValue: ''
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchPictures(this.state.inputValue);
        this.setState({inputValue: ''})
     }
    render() {
        return (
        <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
            </button>

            <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            />
        </form>
        )
    }
}

