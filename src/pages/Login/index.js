import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { geekblue } from '@ant-design/colors';

import api from '../../services/api';

const { Title } = Typography;

const cardHeadStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px',
};
const cardBodyStyle = {
    display: 'flex',
    justifyContent: 'center',
};

const cardStyle = {
    backgroundColor: `${geekblue[0]}`,
    borderRadius: '10px',
    boxShadow: '2px 2px',
};

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Row justify="center">
                <Col sm={8} xs={24}>
                    <Card title={<Title>Log in</Title>} style={cardStyle} headStyle={cardHeadStyle} bodyStyle={cardBodyStyle}>
                        <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                            {/* email */}
                            <Form.Item name="email" rules={[{ required: true, message: 'Missing email.' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
                            </Form.Item>
                            {/* password */}
                            <Form.Item name="password" rules={[{ required: true, message: 'Missing password.' }]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                            </Form.Item>
                            {/* remember or forgot password */}
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="#">
                                    Forgot password
                                </a>
                            </Form.Item>
                            {/* log in or register */}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                Or <a href="#">register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Login;
