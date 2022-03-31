/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { useAuth } from 'contexts/AuthContext'
import { Typography } from 'antd'
import GoogleLogin from 'components/Authentication/GoogleLogin'

export default function CreateAccount() {
  const { currentUser, logout, updateDisplayName } = useAuth()
  const [tempDisplayName, setTempDisplayName] = useState('')

  return (
    <div>
      <Typography.Title id="create-account" level={2}>
        Create Account
      </Typography.Title>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <GoogleLogin tempDisplayName={tempDisplayName} />
        {currentUser ? (
          <div>
            <Typography.Title
              editable={{
                tooltip: 'change your username',
                onChange: value => {
                  setTempDisplayName(value)
                  updateDisplayName(value)
                }
              }}
              level={5}
              style={{ margin: 0 }}
            >
              {tempDisplayName || currentUser.displayName}
            </Typography.Title>
            <p
              style={{
                marginTop: '10px',
                cursor: 'pointer',
                color: '#448EF7'
              }}
              onClick={() => logout()}
            >
              Signed up with the wrong email? Sign out and restart.
            </p>
          </div>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
