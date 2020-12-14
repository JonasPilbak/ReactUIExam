import React, { Component } from 'react';
import PostForm from "./PostForm";
import ApiFetch from "./ApiFetch";
import Sidebar from './Sidebar';
import "../BrowsePage.css";
class BrowsePage extends Component {
    
    render() { 
        return ( 
            <div className="BrowsePage">
             <Sidebar/>
           
            <div className="Post">
            
           
            
            </div>
            <div className="table_display">

            <ApiFetch/>
            </div>
1
            </div>

            

         );
    }
}
 
export default BrowsePage;