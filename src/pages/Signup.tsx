import React from 'react'

import LoginSignupLayout from '../components/templates/LoginSignupLayout';
import SignupForm from '../components/organisms/SignupForm';

const Login = () => {
  return (
    <section id='login'>
        <LoginSignupLayout text='Para continuar navegando de forma segura, efetue o login'>
            <SignupForm/>
        </LoginSignupLayout>
    </section>
  )
}

export default Login