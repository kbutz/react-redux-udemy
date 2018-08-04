import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    // *Application state managed by Redux is in no way connected to Component state, ie this.state, this.setState
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);