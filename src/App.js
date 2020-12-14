
import './App.css';

import ManagerLogin from "./Components/ManagerLogin";
import IdeaPage from "./Components/IdeaPage";
import {BasicTable} from "./Components/BasicTable";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import BrowsePage from "./Components/BrowsePage";
import TableFetch from "./Components/TableFetch";
function App() {
  return (
    <div className="App">
      <Router>
      
      <Switch>
      
      <Route exact path="/" component={IdeaPage}></Route>
    
      <Route exact path="/Browse" component={BrowsePage}></Route>
     
            
            <Route exact path="/overview" component={TableFetch}></Route>

            <Route exact path="/managerLogin" component={ManagerLogin}></Route>
            
      </Switch>

      </Router>


    
    </div>
  );
}

export default App;
