import React, { useState } from "react";


const Form = () => {

  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()

  

  

  const handleSubmit = (e) => {
    e.preventDefault()

    if(userName.lenght > 5 || userEmail.contain('@')){
       alert("se agrego correctamente al usuario" `{${userName}}`);
    }
    
 

  
  }
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form onSubmit={ handleSubmit } className="form">
          <label className="label" value="name" >Nombre Completo</label>
          <input className="input" type="text" name="name" placeholder="Ingresar Nombre Completo" 
          onChange={(e)=> {setUserName(e.target.value)}}/>
          <label className="label" value="email">Email</label>
          <input className="input" type="email" name="email" placeholder="Ingresa el Email"
          onChange={(e)=> {setUserEmail(e.target.value)}}/>

          <button type="submit" className="ingreso" >Ingresar</button>
      </form>
    </div>
  );
};

export default Form;
