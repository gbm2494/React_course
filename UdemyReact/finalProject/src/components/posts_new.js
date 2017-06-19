import React, { Component } from 'react';
//Field: react componet wired up to redux form
//reduxForm: similar to connect helper we used
//before
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component{
  //this param has handlers how are responsible
  //to wire up JSX with field component
  renderField(field){
    var className = 'form-group';

    if(field.meta.touched && field.meta.error){
      className += ' has-danger';
    }
    else{
      className += '';
    }

    return(
      <div className={className}>
        <label>{field.labelToShow}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} //wire up with field, JSX syntax to avoid wire up props manually
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  //(field.meta.error) automatically added from our validate
  //function, using error object with field name

  onSubmit(values){
    //programatically navigation on callback,
    //to change page only when post method
    //has been made
    //call action creator
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit} = this.props;

    return (
      //handleSubmit validates form and if it is valid
      //it calls the callback function you sent by param
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          labelToShow="Title" //any property label could be used
          name="title"
          component={this.renderField} //without () because is a reference to a function
        />
        <Field
          labelToShow="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          labelToShow="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

//redux form helps validate automatically
//it will be call every time someone tries
//to submit the form
//values is an object wih every form
//property (like title, categories, content)
function validate(values){
  const errors = {};

  //validate the inputs from 'values'
  if(!values.title){
    errors.title = "Enter a title!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories!";
  }
  if(!values.content){
    errors.content = "Enter some content please!";
  }

  //if errors is empty, the form is fine to submit
  return errors;
}

/*code when I haven't wire up action creator
//only receives a function as a parameter.
//with configuration details
export default reduxForm({
    validate : validate,  //can be just validate because same name
    form : 'PostsNewForm' //has to be unique
  })(PostsNew);
*/

export default reduxForm({
    validate : validate,  //can be just validate because same name
    form : 'PostsNewForm' //has to be unique
  })(
    connect(null,{createPost})(PostsNew)
  );
