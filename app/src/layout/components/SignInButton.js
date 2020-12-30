import React from 'react'

const SignInButton = () => {
  return (
    <Button onClick={() => history.push('/signin')} style={{ marginRight: "1rem" }}>
      <LoginOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
      <span >SIGN IN</span>
    </Button>
  )
}

export default SignInButton
