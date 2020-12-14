import React from 'react';
import "../Api.css";




class ApiFetch extends React.Component {

  
 
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:46897/api/Ideas')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const  { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div  className="Api">

               
              

              
              <table className="container">
                
                  <tr>

              <th>Title</th>
                            <th>Description</th>
                            <th>Text</th>
                            <th>Key</th>
                  </tr>
                    {items.map(item => (
                        <tr className="items" key={item.ideaID}>
                          
                           

                             <td className="titles">{item.title}</td>
                            
                           
                            
                           

                            <td>  {item.description}</td>
                          
                           

                            <td> {item.text}</td>
                        
                          
                                
                            <td>     {item.ideaID}</td>
                            <td className="right_row">
                                <button>CLick me</button>
                            </td>
                          
                           {/* <div id="Name"> ideaID: {item.ideaID}</div> 
                           <div id="Email"> companyID: {item.companyID}</div>
                           <div id="Name"> userID: {item.userID}</div> 
                           <div id="Email"> priorityID: {item.priorityID}</div>
                           <div id="Name"> ideaStatusID: {item.ideaStatusID}</div> 
                           <div id="Email"> title: {item.title}</div>
                           <div id="Name"> description: {item.description}</div> 
                           <div id="Email"> text: {item.text}</div> */}
                        </tr>
                        
                    ))}
                    
                </table>
               
            </div>
        );

    }

}

export default ApiFetch;