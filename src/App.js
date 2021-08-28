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
// import {Contact} from "./Contact";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path="/aksh.at/" render={()=>{
        return(
            <Home/>

        )
      }}>
          </Route>
          {/* <Route exact path="/aksh.at/about">
            <About />
          </Route> */}
          <Route exact path="/aksh.at/Work">
            <Work/>
          </Route>
          {/* <Route exact path="/aksh.at/Contact">
            <Contact/>
          </Route> */}
          <Route path='/aksh.at/facebook' component={() => { 
              window.location.href = 'https://www.facebook.com/'; 
              return null;
          }}/>
          <Route path='/aksh.at/instagram' component={() => { 
              window.location.href = 'https://instagram.com/akshatmehta74?utm_medium=copy_link'; 
              return null;
          }}/>
          <Route path='/aksh.at/snapchat' component={() => { 
              window.location.href = 'https://www.snapchat.com/add/rishimehta74744'; 
              return null;
          }}/>
          <Route path='/aksh.at/linkedin' component={() => { 
              window.location.href = 'https://www.linkedin.com/in/akshat-mehta-981100172'; 
              return null;
          }}/>
          <Route path='/aksh.at/contact' component={() => { 
              window.location.href = 'https://akshmeh.github.io/aksh.at#contact'; 
              return null;
          }}/>
        </Switch>  
    </div>
    </Router>
  );
}

export default App;
