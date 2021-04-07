import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Child from './components/Child';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/child" component={Child}/>
        <Route exact path="/" component={Home}/>
        <Redirect from="*" to="/" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
