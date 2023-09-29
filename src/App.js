import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { Login } from './components/Login'
import { TableCoffe } from './components/TableCoffe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [showCoffe, setShowCoffe] = useState(false)
  const attemptLogin = async (e) => {
    e.preventDefault()
    //Todo: Conectar al backend
    console.log("Login exitoso")
    setShowCoffe(true)
  }

  return (
    <div className='px-8 m-8'>
      <div className='flex flex-col justify-center gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>El aroma mágico</h1>
          <hr />
          <img src="banner1.png" alt="banner" />
          <hr />
        </div>
        <div className='w-full'>
          {showCoffe ? <TableCoffe/> : <Login callback={attemptLogin} />}
        </div>
        <div className='flex justify-center'>
          <p>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
        </div>
      </div>
    </div>
  );
}

export default App;
