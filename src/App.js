import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Print from './components/Print';
import SignIn from './components/SignIn';
import champ from './images/champ.png'
import rocket from './images/rocket.png'
import Warning from './components/Warning';
import WarningBrowser from './components/WarningBrowser';


function App() {
  const [Details,setDetails] = useState(
    {
      name:'Jason Statham',
      award:'dftc',
      awardIMG:champ,
      img:'peer',
      print:false,
      quarter:'Q1',
      month:'January',
      year:'2021',
      bordercolor:'#05438E',
      nameFont:'Train One, cursive',
      awardFont:'Varela Round, sans-serif',
      line1:'has been awarded with the',
      line2:`For the Quarter Q1 and year 2021`
    }
    )
  const [signin,setsignin] = useState({user:'',password:'',success:false})
  const isChrome = !window.chrome;
  const [bordercolor,setbordercolor] = useState("");

  return (
    <div className="App">
      <Warning />
      {isChrome === false?
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
        </Router>:<WarningBrowser />}
      </div>
  );
}

export default App;
