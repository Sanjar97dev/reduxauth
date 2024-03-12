import React, { useState } from 'react'
import Header from '../header/Header'
import SignUp from '../signUp/SignUp'

const Layout = () => {
    const [isVisible, setIsVisible] = useState(false);

    const subMutSign = () => {
        setIsVisible(true)
    }

    const submitDelete = () => {
        setIsVisible(false)
    }
   
  return (
    <div>
        <Header subMutSign= {subMutSign}/>
        {isVisible && <SignUp  setIsVisible={setIsVisible} submitDelete={submitDelete}/>}
    </div>
  )
}

export default Layout