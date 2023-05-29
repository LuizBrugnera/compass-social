import React, { ReactNode } from 'react';
// css
import './LoginSignupLayout.css';
// assets
import compass_img from "../../assets/compass.png";
import compass_logo from "../../assets/compass_logo.png";
// types
type LoginSignupLayoutProps = {
    children: ReactNode;
    text: string;
    styleContent: string;
    styleMain?: string;
    styleLogo? : string;
}

const LoginSignupLayout = ({ children, text, styleContent, styleMain, styleLogo } : LoginSignupLayoutProps) => {
  return (
    <main className={`main ${styleMain}`}>

        <section className={styleContent}>
            <img className={`logo-mobile ${styleLogo}`} src={compass_logo} alt="COMPASSUOL" />
            <div className="main-title">
    
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