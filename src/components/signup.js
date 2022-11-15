import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
const SignupModel = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your First name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input your Last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Please input your Phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Property Address"
        name="property"
        rules={[
          {
            required: true,
            message: 'Please input your Property Address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

   
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
     
    </Form>
  );
};
export default SignupModel;