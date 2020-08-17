import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography } from 'antd';

import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const { Title } = Typography;

const App = () => {
    return (
        <div className="root">
            <Row>
                <Col span={24}>
                    <Title>Sport's App</Title>
                    <Login />
                    <Dashboard />
                </Col>
            </Row>
        </div>
    );
};

export default App;
