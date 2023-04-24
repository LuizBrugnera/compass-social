import React from 'react'

import compass_img from '../../assets/compass.png';

import './LoginSignupLayout.css';

const LoginSignupLayout = ({ children, text }) => {
  return (
    <main className="main">

        <section className="section-content">
            <div>
    
                <h1 className="h1-title">Olá,</h1>
    
                <p className="p-title">{text}</p>
    
            </div>
    
            <div>
    
                {children}
            </div>
        </section>
    
        <section className="section-images">
            <img className="notbook-img" src={compass_img} alt="Notbook"/>
        </section>

    </main>
  )
}

export default LoginSignupLayout