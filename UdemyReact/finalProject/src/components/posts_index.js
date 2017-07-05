import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';
//component to navigate between routes
import {Link} from 'react-router-dom';

class PostsIndex extends Component {
//React call this function immediately after
//the component has shown up inside the DOM.
  componentDidMount(){
    this.props.fetchPosts();
    console.log(this.props.posts);
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
    return { posts : state.posts };
}

//first argument is null because we are
//not passing any state to props
export default connect(mapStateToProps,{fetchPosts : fetchPosts})(PostsIndex);
