import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { orange } from '@ant-design/colors';

import api from '../../services/api';

const { Title } = Typography;

const cardHeadStyle = {
    borderRadius: '10px 10px 0px 0px',
    boxShadow: '2px 2px black',
    backgroundColor: `${orange[5]}`,
    display: 'flex',
    justifyContent: 'center',
    padding: '0px',
};

const cardBodyStyle = {
    borderRadius: '0px 0px 10px 10px',
    boxShadow: '2px 2px black',
    backgroundColor: `${orange[4]}`,
    display: 'flex',
    justifyContent: 'center',
};

const cardStyle = {
    background: 'none',
};

const Login = ({ history }) => {
    const handleOnFinish = async (values) => {
        console.log('Received values of form: ', values);
        const { email, password } = values;

        const response = await api.post('/login', { email, password });
        const userId = response.data._id || false;

        if (userId) {
            localStorage.setItem('user', userId);
            history.push('/dashboard');
        } else {
            const { message } = response.data;
            console.log('message ->', message);
        }
    };

    return (
        <>
            <Row justify="center">
                <Col sm={8} xs={24}>
                    <Card title={<Title>Log in</Title>} style={cardStyle} headStyle={cardHeadStyle} bodyStyle={cardBodyStyle}>
                        {/* login form */}
                        <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={handleOnFinish}>
                            {/* email */}
                            <Form.Item name="email" rules={[{ required: true, message: 'Missing email.' }]}>
                                <Input prefix={<MailOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
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
                                Or <a href="/register">register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Login;
