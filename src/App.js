import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Add from "./components/Pages/Add";
import Edit from "./components/Pages/Edit";
import View from "./components/Pages/View";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import EmployeeList from "./components/Pages/EmployeeList";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Register}/>
        {/* <Route exact path="/user/add" component={Add}/> */}
        <Route exact path="/user/edit/:id" component={Edit}/>
        <Route exact path="/user/:id" component={View}/>
        <Route exact path="/employees/list" component={EmployeeList}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
