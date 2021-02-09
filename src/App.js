import React from 'react';
import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";
import Materials from './Components/Materials';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
const App = () => {
    return (
        <div>
            <Router>
                <nav >
                    <ul style={{
                        display: 'flex', listStyleType: 'none', position: 'relative',
                        height: '100px',
                        width: '100%'
                    }}>
                        <li style={{ paddingRight: '1rem' }} >
                            <Link to="/">SignUp</Link>
                        </li>
                        <li style={{ paddingRight: '1rem' }}>
                            <Link to="/SignIn">SignIn</Link>
                        </li>
                        <li style={{ paddingRight: '1rem' }}>
                            <Link to="/materials">Materials</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>

                    <Route path="/materials">
                        <Materials />
                    </Route>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route path="/">
                        <SignUp />
                    </Route>
                </Switch>

            </Router>

        </div>

    )
}

export default App
