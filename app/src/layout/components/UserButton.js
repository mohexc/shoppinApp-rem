import React from 'react'

const UserButton = () => {
  return (
    <Popover placement="bottom" content={popoverAccount()} trigger="click" >
      <Button>Account: {user.name}</Button>
    </Popover>
  )
}

export default UserButton
