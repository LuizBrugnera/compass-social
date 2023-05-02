import React, { useState, useEffect } from 'react';
 // components
import LoginSignupLayout from '../components/templates/LoginSignupLayout';
import LoginForm from '../components/organisms/LoginForm';

const Login = () => {

  const [userList, setUserList] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/v1/user/')
      .then(response => response.json())
      .then(data => setUserList(data.users));
  }, []);

  return (
    <section id='login'>
        <LoginSignupLayout text='Para continuar navegando de forma segura, efetue o login'>
            <LoginForm userList={userList}/>
        </LoginSignupLayout>
    </section>
  )
}

export default Login