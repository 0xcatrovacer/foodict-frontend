import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/home">
                        <Navbar />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
