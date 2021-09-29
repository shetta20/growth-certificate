import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Print from './components/Print';
import SignIn from './components/SignIn';
import peer from './images/peer.png'


function App() {
  const [Details,setDetails] = useState({name:'Jason Statham',award:'dftc',awardIMG:peer,img:'peer',print:false,quarter:'Q1',year:'2021'})
  const [signin,setsignin] = useState({user:'',password:'',success:false})

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
              {signin.success === true?<Home setDetails={setDetails} Details={Details}/>:<SignIn signin={signin} setsignin={setsignin}/>}
          </Route>
          <Route path='/home' exact>
              <Home setDetails={setDetails} Details={Details}/>
          </Route>
          <Route path='/certificate'>
              <Print Details={Details} setDetails={setDetails}/>
          </Route>
        </Switch>
        </Router>
      </div>
  );
}

export default App;
