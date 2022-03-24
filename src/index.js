import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Articles from './component/Articles';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import "./style/index.css";
import Sidebar from './component/Sidebar';
import Help from './component/Help';
import Article from './component/Article';
import FourOhFour from './component/FourOhFour';

ReactDOM.render(
    <Router>
<div className='container flex'>
    <Sidebar />
    <main>
        <Switch>
        <Route path='/articles' exact>
            <Articles />
        </Route>
        <Route path='/' exact>
            <App />
        </Route>
        <Route path='/help'>
            <Help />
        </Route>
        <Route path='/articles/:slug'>
            <Article />
        </Route>
        <Route path='*'>
            <FourOhFour />
        </Route>
        </Switch>
    </main>
        </div>
    </Router>,
    document.getElementById('root')
);