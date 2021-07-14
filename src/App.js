import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {Navbar} from "./Navbar";
import {Home} from "./Home";
// import {About} from "./About";
import {Work} from "./Work";
import {Contact} from "./contact";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path="/" render={()=>{
        return(
            <Home/>
        )
      }}>
          </Route>
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          <Route exact path="/Work">
            <Work/>
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
          <Route path='/facebook' component={() => { 
              window.location.href = 'https://www.facebook.com/akshat.mehta.522'; 
              return null;
          }}/>
          <Route path='/instagram' component={() => { 
              window.location.href = 'https://instagram.com/akshatmehta74?utm_medium=copy_link'; 
              return null;
          }}/>
          <Route path='/snapchat' component={() => { 
              window.location.href = 'https://www.snapchat.com/add/rishimehta74744'; 
              return null;
          }}/>
          <Route path='/linkedin' component={() => { 
              window.location.href = 'https://www.linkedin.com/in/akshat-mehta-981100172'; 
              return null;
          }}/>
        </Switch>  
    </div>
    </Router>
  );
}

export default App;
