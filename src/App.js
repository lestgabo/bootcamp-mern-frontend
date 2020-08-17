import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography } from 'antd';

import './App.css';
import { Routes } from './routes';

const { Title } = Typography;

const App = () => {
    return (
        <div className="root">
            <Row>
                <Col span={24}>
                    <Title>Sport's App</Title>
                    <Routes />
                </Col>
            </Row>
        </div>
    );
};

export default App;
