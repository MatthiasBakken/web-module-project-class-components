import React, { Component } from 'react'

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';


const TodoFormSchema = Yup.object().shape( {
  task: Yup.string()
    .min( 2, 'Must be at least 2 characters long' )
    .max( 40, 'Must be less than 40 characters' )
    .required( 'Required' ),
} );

class TodoForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      todo: {
        task: "",
        completed: false,
        id: Date.now()
      }
    }
  }

  handleSubmit ( todo ) {
    this.props.handleTodos( todo );
  }
  
  render () {
    
    return (
      <div className="form-container">
        <Formik
          initialValues={{
            task: '',
            completed: false,
            id: Date.now(),
          }}
          validationSchema={TodoFormSchema}
          onSubmit={( values ) => {
            console.log( "values", values );
            this.setState( {
              todo: {
                task: values.task,
                completed: false,
                id: Date.now()
              }
            } );
            return this.handleSubmit( this.state.todo );
          }}
        >
          {( { errors, touched, isValid, dirty } ) => (
            <Form className="todo-form">
              <label >Todo: </label>
              <Field name="task" />
              {errors.task && touched.task ? (
                <div className="error-div">{errors.task}</div>
              ) : null}
              <span className="button-container">
                <button className="submit-button" type="submit" disabled={!( dirty && isValid )} >Create Todo</button>
              </span>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

export default TodoForm;
