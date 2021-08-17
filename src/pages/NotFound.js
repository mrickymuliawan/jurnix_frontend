import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to='/dashboard'>
            <Button type="primary">Back to Dashboard</Button>
          </Link>
        }
      />
    </div>
  )
}

export default NotFound
