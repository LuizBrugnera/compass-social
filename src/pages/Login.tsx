import React from 'react'

import LoginSignupLayout from '../components/templates/LoginSignupLayout';
import LoginForm from '../components/organisms/LoginForm';

const Login = () => {
  return (
    <section id='login'>
        <LoginSignupLayout text='Para continuar navegando de forma segura, efetue o login'>
            <LoginForm/>
        </LoginSignupLayout>
    </section>
  )
}

export default Login