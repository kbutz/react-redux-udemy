import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    // set up component state by initializing in constructor
    constructor(props) {
        super(props);

        this.state = { term: ''};

        // this (our instance of search bar) has a fuction called onInputChange. 
        // Bind that function to this(SearchBar), then replace onInputChange with this new bound instance of this function
        // Take existing function, bind it to this, then replace the existing function
        // Rule of thumb - if you're passing a callback around as a function, and that callback has a reference to "this", bind the context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        // when we pass of an event handler and call it, the value of "this" will have the incorrect context
        // alternatively, call it with arrow function () =>...
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit </button>
                </span>
            </form>
        )
    }
}

// Hook up action creator to our search-bar container
// causes the action creator when action is called to bind action creators with dispatch, 
// makes sure the action flows down to middleware then reducers inside our redux application
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

// null passed first - no state passed in, dispatch to props must be second arg
export default connect(null, mapDispatchToProps)(SearchBar);