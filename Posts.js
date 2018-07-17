import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Route } from 'react-router-dom';



class Posts extends Component{

  render(){
    const {submitPost} = this.props

    return(
    <div>
      <h1>List of Posts</h1>

      <input
        type='text'
        ref={(input) => this.input = input}
        placeholder="Add a Post"
      />
      <button onClick={submitPost}>Submit</button>
      <button >KILL FOOD</button>

      <p>
        Post:
      </p>

      <Link
          to="/postdetails"
          className="open-posts"
        >Go To Deatils
      </Link>
      <div>-------</div>
      <Link
          to="/"
          className="home"
        >Go Home
      </Link>

    </div>
    )
  }
}

export default Posts
