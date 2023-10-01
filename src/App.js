import './App.css';
import { useState } from 'react'
import { Login } from './components/Login'
import { TableCoffe } from './components/TableCoffe';
import { FormattedMessage } from 'react-intl'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [showCoffe, setShowCoffe] = useState(false)

  const attemptLogin = async () => {
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
          {showCoffe ? <TableCoffe /> :
            <div className='flex justify-center w-full'>
              <Login callback={attemptLogin} />
            </div>}
        </div>
        <div className='flex justify-center'>
          <p>
            <FormattedMessage id='footer' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
