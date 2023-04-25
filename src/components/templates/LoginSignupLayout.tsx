import React, { ReactNode } from 'react';

import './LoginSignupLayout.css';

type LoginSignupLayoutProps = {
    children: ReactNode;
    text: string;
}

const compass_img = require("../../assets/compass.png") as string;

const LoginSignupLayout = ({ children, text } : LoginSignupLayoutProps) => {
  return (
    <main className="main">

        <section className="section-content">
            <div className='main-title'>
    
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