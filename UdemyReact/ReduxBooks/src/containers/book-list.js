//if you import with a word you import entire object from this library,
//if you use { } you are importing just a single property
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//function to make sure that the action generated
//by the actionCreaator actually ends flowing
//to all the different reducers
import { bindActionCreators } from 'redux';

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return(
				<li
				onClick={() => this.props.selectBook(book)}
				key={book.title}
				className="list-group-item">
				{book.title}
				</li>
			);
		});
		}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//glue between react and redux
//take app state as an argument and whatever it returns will
//show up as props inside of BookList
function mapStateToProps(state){
	return {
		books : state.books
	};
}

//Anything returned from this function will
//end up as a props on the BookList container
function mapDispatchToProps(dispatch){
	//whenever selectBook is called, the result
	//should be passed to all of our reducers
	return bindActionCreators({selectBook : selectBook}, dispatch)
}

//Promote BookList from a component to a container
//It needs to know about this new dispatch method,
//selectBook. Make it available as a prop
//connect receives a function and a component
//and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
