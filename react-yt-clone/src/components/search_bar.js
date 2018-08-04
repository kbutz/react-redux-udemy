import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: 'Starting Value'};
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    // onChange={(event) => this.setState({ term: event.target.value })} 

    // event handler
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;