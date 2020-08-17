import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography, Card } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
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

const Register = ({ history }) => {
    const handleOnFinish = async (values) => {
        console.log('Received values of form: ', values);
        const { firstName, lastName, email, password } = values;
        console.log('firstName -> ', firstName);
        console.log('lastName -> ', lastName);
        console.log('email -> ', email);
        console.log('password -> ', password);

        try {
            const response = await api.post('/user/register', { firstName, lastName, email, password });
            const userId = response.data._id || false;

            if (userId) {
                localStorage.setItem('user', userId);
                history.push('/dashboard');
            } else {
                const { message } = response.data;
                console.log('message ->', message);
            }
        } catch (error) {
            console.log('error message->', error.response.data.message);
        }
    };

    return (
        <>
            <Row justify="center">
                <Col sm={8} xs={24}>
                    <Card title={<Title>Register</Title>} style={cardStyle} headStyle={cardHeadStyle} bodyStyle={cardBodyStyle}>
                        {/* login form */}
                        <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={handleOnFinish}>
                            {/* first name */}
                            <Form.Item name="firstName" rules={[{ required: true, message: 'Missing first name.' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" placeholder="First Name" />
                            </Form.Item>
                            {/* last name */}
                            <Form.Item name="lastName" rules={[{ required: true, message: 'Missing last name.' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" placeholder="Last Name" />
                            </Form.Item>
                            {/* email */}
                            <Form.Item name="email" rules={[{ required: true, message: 'Missing email.' }]}>
                                <Input prefix={<MailOutlined className="site-form-item-icon" />} type="email" placeholder="Email" />
                            </Form.Item>
                            {/* password */}
                            <Form.Item name="password" rules={[{ required: true, message: 'Missing password.' }]}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                            </Form.Item>
                            {/* register */}
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Register;
