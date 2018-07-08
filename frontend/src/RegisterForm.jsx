import React from 'react'

const RegisterForm = ({ register }) => (
  <form onSubmit={register} className='form'>
    <input type='text' name='user' placeholder='Ingresa tu nombre de usuario' required className='roboto'/>
    <input type="submit" value="Registrar" className='roboto'/>
  </form>
)

export default RegisterForm