import React, { useState, useEffect } from 'react';
 // components
import LoginSignupLayout from '../components/templates/LoginSignupLayout';
import LoginForm from '../components/organisms/LoginForm';

const Login = () => {

  const [userList, setUserList] = useState<any[]>([]);
  console.log(process.env.REACT_APP_API_URL)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/user/`)
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