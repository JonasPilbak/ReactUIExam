import React, { Component } from 'react';
import SideBar from "./Sidebar";
import "../IdeaPages.css";
import Idinput from "./Idinput";
import TextAreacomp from "./TextAreacomp";
import Taginput from "./TagInput";
import Text from "./Text"
class IdeaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 


            <div className="inputs">
                <SideBar/>
                <div className="title">
                
                </div>
                  <div className="Idinput">

<Idinput/>

</div>
<div className="description">

<TextAreacomp/>
</div>
<div className="tag_emp">
<Taginput/>

</div>
<div className="checkboxes">
   
   <p>1<Text/></p>
   <p>2<Text/></p>
   <p>3<Text/></p>
   <p>4<Text/></p>
   <p>5<Text/></p>
            


</div>
<div className="checkboxstuff">

 
<p>1<Text/></p>
   <p>2<Text/></p>
   <p>3<Text/></p>
   <p>4<Text/></p>
   <p>5<Text/></p>
</div>


            </div>



         );
    }
}
 
export default IdeaPage;