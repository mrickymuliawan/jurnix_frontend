import React, { useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { Button, Modal, Row, Form, Input, message, Table, Col, DatePicker, Divider } from 'antd'
import Spacer from '../components/Spacer'

function HistoryPage() {
  const tableColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (value) => <Button onClick={() => showDetail(value)} type='primary'>Detail</Button>
    },
    {
      title: 'Account Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    }
  ]
  const dummy = [{
    id: 1,
    name: 'beli makan',
    amount: 20000,
    createdAt: '10-10-2021'
  },
  {
    id: 2,
    name: 'beli minum',
    amount: 20000,
    createdAt: '10-10-2021'
  },
  ]

  const [form] = Form.useForm()
  const [selectedHistory, setSelectedHistory] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const showDetail = (id) => {
    const selected = dummy.find(item => item.id == id)
    setSelectedHistory(selected)
    setShowModal(true)
  }
  return (
    <AdminLayout>
      <Row justify='space-between'>
        <h2>History</h2>
        <DatePicker.RangePicker />
      </Row>
      <Spacer size={3} />
      <Row>
        <Col md={24}>
          <Table dataSource={dummy} columns={tableColumns} />
        </Col>
      </Row>

      <Modal title='Detail History' visible={showModal} onCancel={() => setShowModal(false)} footer={false}>
        <p>ID: {selectedHistory?.id}</p>
        <p>Account Name: {selectedHistory?.name}</p>
        <p>Amount: {selectedHistory?.amount}</p>
        <p>Created At: {selectedHistory?.createdAt}</p>
      </Modal>
    </AdminLayout>
  )
}

export default HistoryPage
