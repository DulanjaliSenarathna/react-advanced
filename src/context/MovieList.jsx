import React, { Component } from 'react';
import UserContext from './userContext';

class MovieList extends Component {
    //use context outside of the render method

   // static contextType = UserContext; - another way instead of line 22
    componentDidMount (){
        console.log('context',this.context);
    }
    render() {
        return (
            <UserContext.Consumer>
                {UserContext =>  <div>Movie List{UserContext.name}</div>}
                
            </UserContext.Consumer>
           
        );
    }
}
//use context outside of the render method
MovieList.contextType = UserContext;

export default MovieList;