import React from 'react'

import './SignupForm.css';
import InputBirth from '../atoms/InputBirth';

const SignupForm = () => {
  return (
    <div className='conteiner_signup'>
        
        
        <h2 className="form-title">Registro</h2>
    
    <form className="form">
        <div>
        <input className="form-input name" id="name" type="text" placeholder="Nome"/>
        <span className="input-name"></span>

        <input className="form-input user" type="text" placeholder="Usuário"/>
        <span className="input-user"></span>

        <InputBirth/>
        <span className="input-birth"></span>

        <input className="form-input email" type="email" placeholder="Email"/>
        <span className="input-email"></span>

        <input className="form-input password" type="password" placeholder="Senha"/>
        <span className="input-password"></span>

        <input className="form-input cnfPassword" type="password" placeholder="Confirmar Senha"/> 
        <span className="input-confirm-password"></span>
        </div>
        <span className="error-warning"></span>
        <span className="success-warning"></span>

        <button type="submit" className="btn-register">Registre-se</button>
    </form>
    <p className="p-form">Já possui uma conta?<a href="../login/index.html" className="a-login"> Faça Login</a></p>

    </div>
  )
}

export default SignupForm