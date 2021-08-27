import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

function LoginPage() {
  const submitForm = (value) => {
    console.log(value);
  }
  return (
    <Row justify='center'>
      <Col md={8} style={{ margin: '30vh' }}>
        <h2>Login</h2>
        <Form
          onFinish={submitForm}
          layout='vertical'
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[{ message: 'wajib diisi', required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ message: 'wajib diisi', required: true }]}>
            <Input type='password' />
          </Form.Item>

          <Button htmlType='submit' type='primary'>Login</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default LoginPage
