import React, { useState } from 'react'
import { useAuth } from 'contexts/AuthContext'
import { Alert } from 'antd'
import { GoogleLoginButton } from 'react-social-login-buttons'

export default function GoogleLogin({ tempDisplayName }) {
  const { currentUser, googleSignup } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')

  const google = async () => {
    try {
      await googleSignup()
      return null
    } catch (error) {
      return setErrorMessage('Could now create account :( Please try again!')
    }
  }

  if (currentUser) {
    return (
      <Alert
        message={`Welcome to Studyflow, ${
          tempDisplayName || currentUser.displayName
        }!`}
        type="success"
        showIcon
        style={{ marginBottom: '10px' }}
      />
    )
  }

  return (
    <div>
      {errorMessage ? (
        <Alert message={errorMessage} type="error" showIcon />
      ) : (
        <span />
      )}
      <GoogleLoginButton onClick={() => google()} />
    </div>
  )
}
