import React, { useState } from 'react'
import styled from 'styled-components'

import CategoryBtns from './CategoryBtns'
import RightNav from './RightNav'

const HamburgerMenu = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
bottom: 15px;
right: 20px;
z-index: 20;
display: none; 

@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {  
  width: 32px;
  height: 4px;
  background-color: ${({ open }) => (open ? '#000' : '#000')};  
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};    
  }
  &:nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')}; 
    opacity:   ${({ open }) => (open ? 0 : 1)};  
  }
  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};    
  }  
}`

const Menu = () => {
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </HamburgerMenu>
      {open && <RightNav open={open} />}
      {!open && <CategoryBtns /> }  
    </>
  )
}

export default Menu