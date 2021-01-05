import React from 'react'

function Header() {
  return (
    <header style = {headerStyle}>
      <h1>Todo List</h1>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#002233',
  color: 'white',
}

export default Header