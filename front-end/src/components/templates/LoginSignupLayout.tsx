import React, { ReactNode } from 'react';
// css
import './LoginSignupLayout.css';
// assets
import compass_img from "../../assets/compass.png";
// types
type LoginSignupLayoutProps = {
    children: ReactNode;
    text: string;
    styleContent: string;
}

const LoginSignupLayout = ({ children, text, styleContent } : LoginSignupLayoutProps) => {
  return (
    <main className="main">

        <section className={styleContent}>
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