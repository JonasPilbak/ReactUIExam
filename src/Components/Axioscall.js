import React from 'react';

import axios from 'axios';

export default class AxiosCall extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:46897/api/Ideas`)
      .then(res => {
        const persons = res.data;
        console.log(res.data)
        console.log(res.status)
        JSON.stringify(res);
console.log(JSON.stringify(res));

        
        this.setState({ persons });
      })
  }

  render() {
      
    return (
        
        <div>
        
        

      <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.Title}</li>)}
      </ul>

      </div>
    )
  }
}