import { useState } from 'react'

export const Login = ({ callback }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const clearFields = (e) => {
        e.preventDefault()
        setPassword('')
        setUsername('')
    }
    return (
        <div className='flex flex-col justify-center my-4 w-full gap-8'>
            <div className='flex flex-col justify-center content-center gap-4 w-[50%]'>
                <h2 className='text-2xl font-bold'>Iniciar Sesión</h2>
                <div className='bg-[#E0BBBB33]'>
                    <form className='flex flex-col justify-center gap-4 p-4 px-16'>
                        <label className='text-xl font-bold'>Nombre de usuario</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            className='border-2 border-black rounded-md p-2'
                            type='text'
                            value={username}
                            placeholder='Usuario'
                        />
                        <label className='text-xl font-bold'>Contraseña</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='border-2 border-black rounded-md p-2'
                            type='password'
                            placeholder='Contraseña'
                        />
                        <div className='flex justify-center gap-4'>
                            <button className='bg-[#8FA98F] text-lg grow px-8'
                                onClick={callback}
                            >
                                Ingresar
                            </button>
                            <button className='bg-[#E75D5D] text-lg grow  px-8'
                                onClick={clearFields}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}





