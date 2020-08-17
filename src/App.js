import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Typography } from 'antd';

import './App.css';
import { Routes } from './routes';

const { Title } = Typography;

const App = () => {
    return (
        <div className="root">
            <Row justify="center">
                <Col sm={24} xs={24}>
                    <Title style={{ textAlign: 'center' }}>Sport's App</Title>
                    <Routes />
                </Col>
            </Row>
        </div>
    );
};

export default App;
