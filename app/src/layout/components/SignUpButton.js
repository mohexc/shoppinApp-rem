import React from 'react'

const SignUpButton = () => {
  return (
    <Button onClick={() => history.push('/signup')} style={{ marginRight: "1rem" }}>
      <SolutionOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
      <span >SIGN UP</span>
    </Button>
  )
}

export default SignUpButton
