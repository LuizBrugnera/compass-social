import React from 'react'

import LoginSignupLayout from '../components/templates/LoginSignupLayout';
import SignupForm from '../components/organisms/SignupForm';

const Login = () => {
  return (
    <section id='signup'>
        <LoginSignupLayout text='Para continuar navegando de forma segura, efetue o login' styleContent="section-content-register">
            <SignupForm/>
        </LoginSignupLayout>
    </section>
  )
}

export default Login