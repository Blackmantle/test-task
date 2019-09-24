import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/container/PrivateRoute';
import Results from './components/container/Results';
import Login from './components/container/Login';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute path="/results" render={(props) => <Results {...props} />} />
                    <Route path="/login" component={Login} />
                    <Redirect to="/results" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
