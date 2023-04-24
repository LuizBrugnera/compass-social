import React from 'react'

import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='conteiner_login'>
        
        <h2 className="form-title">Registro</h2>
    
        <form className="form">
            <div>

                <input className="form-input user" type="text" placeholder="Usuário"/>
                <span className="input-name"></span>

                <input className="form-input password" type="password" placeholder="Senha"/>
                <span className="input-password"></span>

            </div>
        <span className="error-warning error1"></span>
        <span className="error-warning error2"></span>
        <span className="success-warning"></span>

        <button type="submit" className="btn-register">Logar-se</button>
    </form>
    <p className="p-form">Novo por aqui?<a href="/" className="a-register"> Registre-se</a></p>
    </div>
  )
}

export default LoginForm