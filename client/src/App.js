import React, {useState} from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = (value) => {
    setValues(preValue=>({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickValues = () => {
    Axios.post("http://localhost:3001/cliente/cadastro", {
      name: values.name,
      documentNumber: values.documentNumber,
      dateNas: values.dateNas,
      email: values.email,
      password1: values.password1,
      password2: values.password2,
    }).then((response)=>{
      console.log(response);
    });
  };

  return (
    <div className="App--container">
      <div className="register--container">
        <h1 className="register--title">Criar Conta!</h1>
        <p>*Preencha com seus dados pessoais</p>

        <input 
          type="text" 
          name="name" 
          placeholder="Nome" 
          className="register--input"
          onChange={handleChangeValues}
        />

        <input 
          type="text" 
          name="documentNumber" 
          placeholder="CPF/CNPJ" 
          className="register--input"
          onChange={handleChangeValues}
        />

        <input 
          type="date" 
          name="dateNas" 
          className="register--input"
          onChange={handleChangeValues}
        />

        <input 
          type="text" 
          name="email" 
          placeholder="email" 
          className="register--input"
          onChange={handleChangeValues}
        />

        <input 
          type="password" 
          name="password1" 
          placeholder="senha" 
          className="register--input"
          onChange={handleChangeValues}
        />

        <input 
          type="password" 
          name="password2" 
          placeholder="confirmar senha" 
          className="register--input"
          onChange={handleChangeValues}
        />

        <button 
          className="register--button"
          onClick={() => handleClickValues()}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default App;
