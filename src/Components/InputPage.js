import React, { Component } from 'react';
import PostForm from "./PostForm";

class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <PostForm/>

            </div>
          );
    }
}
 
export default InputPage;