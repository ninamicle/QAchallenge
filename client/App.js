import React from 'react';
//import ReactDOM from 'react-dom';
import PostList from './Components/PostList';


class App extends React.Component{
    render(){
        return(
            <div className='app'>
            <PostList/>
            </div>
        )
    }
}

export default App;