import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import OtherPage from './OtherPage';
import Fib from './Fib';


function App() {
    return (
        <Router>

            <div className="App">
                <header className="App-header" style={{"minHeight": "unset"}}>
                    {/*<img src={logo} className="App-logo" alt="logo"/>*/}
                    <h1>Udemy complex application</h1>

                    <div style={{"padding": "20px"}}>
                        <Link to="/">Home</Link>
                        &nbsp;&nbsp;
                        <Link to="/otherpage">Other Page</Link>
                    </div>
                </header>

                <div style={{"padding": "20px"}}>
                    <Route exact path="/" component={Fib} />
                    <Route path="/otherpage" component={OtherPage} />
                </div>
            </div>

        </Router>
    );
}

export default App;
