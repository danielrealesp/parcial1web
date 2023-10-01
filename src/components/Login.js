import { useState } from 'react'
import { FormattedMessage } from 'react-intl'

export const Login = ({ callback }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState(false)

    const clearFields = (e) => {
        e.preventDefault()
        setPassword('')
        setUsername('')
        setWarning(false)
    }

    const attemptLogin = async (e) => {
        e.preventDefault()
        const result = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: username, password })
        })
        const data = await result.json()
        console.log(data)
        if (data.status === 'success') {
            callback()
            clearFields(e)
        } else {
            setWarning(true)
        }

    }

    return (
        <div className='flex flex-col justify-center content-center gap-4 w-[65%]'>
            <h2 className='text-2xl font-bold'>
                <FormattedMessage id='login' />
            </h2>
            <div className='bg-[#E0BBBB33]'>
                <form className='flex flex-col justify-center gap-4 p-4 px-16'>
                    <label className='text-xl font-bold'>
                        <FormattedMessage id='username' />
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        className={'border-2 rounded-md p-2' + (warning ? ' border-red-500' : ' border-black')}
                        type='text'
                        value={username}
                    />
                    <label className='text-xl font-bold'>
                        <FormattedMessage id='password' />
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className={'border-2  rounded-md p-2 ' + (warning ? ' border-red-500' : ' border-black')}
                        type='password'
                    />
                    <div className='flex justify-center gap-4'>
                        <button className='bg-[#8FA98F] text-lg grow px-8'
                            onClick={attemptLogin}
                        >

                            <FormattedMessage id='login' />
                        </button>
                        <button className='bg-[#E75D5D] text-lg grow  px-8'
                            onClick={clearFields}
                        >
                            <FormattedMessage id='clear' />
                        </button>
                    </div>
                    <div>
                        {warning && <p className='text-red-500'>
                            <FormattedMessage id='auth_error' /> 
                            </p>}
                    </div>
                </form>
            </div>
        </div>

    )
}





