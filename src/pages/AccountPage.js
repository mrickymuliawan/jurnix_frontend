import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Row, Form, Input, message, Table, Col } from 'antd'
import React, { useState } from 'react'
import AdminLayout from '../components/AdminLayout'

function AccountPage() {
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Account Name',
      dataIndex: 'name',
      key: 'name'
    }
  ]
  const dummy = [{
    id: 1,
    name: 'beli makan'
  },
  {
    id: 2,
    name: 'beli minum'
  },
  {
    id: 2,
    name: 'beli minum'
  },
  {
    id: 2,
    name: 'beli minum'
  },
  {
    id: 2,
    name: 'beli minum'
  },
  ]
  const [form] = Form.useForm()
  const [showModal, setShowModal] = useState(false)
  const submitForm = (value) => {
    // hit api
    setShowModal(false)
    message.success('Account Created')
    form.resetFields()
  }
  return (
    <AdminLayout>
      <Row justify='space-between'>
        <h2>Account</h2>
        <Button type='primary' onClick={() => setShowModal(true)}> <PlusOutlined /> Add Account</Button>
      </Row>
      <Row>
        <Col md={24}>
          <Table dataSource={dummy} columns={tableColumns} />
        </Col>
      </Row>

      <Modal title='Add Account' visible={showModal} onCancel={() => setShowModal(false)} footer={false}>
        <Form
          form={form}
          onFinish={submitForm}
          layout='vertical' >
          <Form.Item
            label='Name'
            name='name'
            rules={[{ message: 'wajib diisi', required: true }]}>
            <Input autoComplete='off' />
          </Form.Item>
          <Button type='primary' htmlType='submit'>Save</Button>
        </Form>
      </Modal>
    </AdminLayout>
  )
}


export default AccountPage
