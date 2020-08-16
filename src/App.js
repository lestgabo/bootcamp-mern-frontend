import React from 'react';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import 'antd/dist/antd.css';

const App = () => {
    return (
        <div className="App">
            <Login />
            <Dashboard />
        </div>
    );
};

export default App;
