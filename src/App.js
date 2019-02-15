import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import api from '../src/app/api/index';
import testComponent from './app/components/testComponent';
import RedirectGoogle from './app/components/RedirectGoogle';
import RedirectedGoogle from './app/components/RedirectedGoogle';


//only url that works
//http://localhost:3000/redirect-google?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDBjZTVmYi03YTAxLTRmOWQtYjk5NC1hOTBkMTUyZGRjMTQiLCJyb2xlcyI6IlVTRVIiLCJpYXQiOjE1NTAyMjA5MTIsImV4cCI6MTU1MTA4NDkxMn0.QbYk91Xcu44TQs54xqo3pqJpeuMyRa-_qd3bfWx-WwzRe7hiU65RsWvFWkm7JE0mlLDleq9lvhIQxAxCus_q5w

class App extends Component {
    constructor() {
        super();
        api.testApi();
    }

    render() {
        return (
            <Switch>
                <Redirect to="/login" exact path='/' component={testComponent}/>
                <Route path='/login' component={testComponent}/>
                <Route path='/redirected-google' component={RedirectedGoogle}/>
                <Route path='/redirect-google' component={RedirectGoogle}/>
            </Switch>
            );
    }
}

export default App;
