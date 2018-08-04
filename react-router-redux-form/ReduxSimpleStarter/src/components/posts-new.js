import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    // render furnction that is being passed through the component arg
    // renderTitleField is just supposed ot return some ammount of jsx, but we still need to wire up the jsx to the field component
    // to do that, we call the function with the field argument - "field" contains some event handlers that we need to wire up to the jsx we are returning
    renderField(field) {
        // field.input explodes the properties on object "input" which contains field's event handlers
        return (
            <div className="form-group">
                <label>{ field.label }</label>
                <input  
                    className="form-control" 
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {
        // this === component, which is why we add on .bind(this) when passing onSubmit as a callback function to handleSubmit
        console.log(values);
    }

    // three diferent states for a form
    // pristine - has not been touched yet. just loaded, not modified.
    // touched  - the form has been updated
    // invalid  - validate function returned a non-empty errors object

    render() {
        // handleSubmit is a property passed to the component on behalf of redux-form, 
        // wired together with reduxForm on the export statement at the bottom of the class
        const { handleSubmit } = this.props;

        // component property takes in a function or another component that will be used to display the Field component
        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

// validate is called automatically at different points in the form's lifecycle - notable, on form submit
function validate(values) {
    // console.log(values) -> { title: 'asdf', categories: '', content: ' }
    // always start by creating an errors object
    const errors = {};

    // Validate the inputs from the 'values' object
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter a title!";
    }

    // If errors is empty, the form is fine to submit
    // if errors has *any* properties, redux form assumes form is invalid
    return errors;

}

// wiring up the redux form, setting the name of the form we are using
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);