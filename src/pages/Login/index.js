import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { geekblue } from '@ant-design/colors';

import api from '../../services/api';

const { Title } = Typography;

const cardBodyStyle = {
    width: '100%',
    backgroundColor: `${geekblue[8]}`,
};

const cardStyle = {
    width: '600px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
};

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <Card style={cardStyle} bodyStyle={cardBodyStyle}>
                        <Row>
                            <Title>Login</Title>
                        </Row>

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
