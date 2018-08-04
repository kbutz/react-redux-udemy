import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Container - a component that has direct access to the state produced by redux. 
// React and Redux are two separate libaries only interacting through a third library, react-redux
// a smart component, a component with a direct connection to Redux
// Other views "dumb components" have no need for a direct rection with redux
// Only the most parent component that cares about a particular piece of state needs to be connected to Redux
// Ex. app.js doesn't really care when the state changes

class BookList extends Component {
    renderList() {
        return this.props.books.map(
            (book) => {
                return (
                    <li 
                        onClick={() => this.props.selectBook(book)}
                        key={book.title} 
                        className="list-group-item">{book.title}</li>
                );
            }
        );
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about new dispatch method selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);