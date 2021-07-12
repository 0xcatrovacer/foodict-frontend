import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
