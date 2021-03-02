import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { onSignup } from '../../shared/api/api'

const Signup = () => {
  const firstRef = useRef()
  const lastRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [helpText, setHelpText] = useState('')

  const history = useHistory()

  const onClickSignUp = async () => {
    console.log('first', firstRef.current.value)
    const data = {
      firstname: firstRef.current.value,
      lastname: lastRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    const res = await onSignup(data)
    if (res.data === 'User not exist') {
      setHelpText('Email not exist')
      return;
    }
    setHelpText('')
    history.push('/login')
  }

  return (
    <div className='content'>
      <h1>Sign Up</h1>
      <form className='form' noValidate autoComplete="off">
        <TextField inputRef={firstRef} id="outlined-basic" label="First name" variant="outlined" />
        <TextField inputRef={lastRef} id="outlined-basic" label="List name" variant="outlined" />
        <TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
        <TextField inputRef={passwordRef} id="outlined-basic" label="Password" variant="outlined" />
        <TextField inputRef={confirmPasswordRef} id="outlined-basic" label="Confirm Password" variant="outlined" />
      </form>
      {helpText && <p>{helpText}</p>}
      <Button className='btn-signup' variant="contained" color="primary" onClick={() => onClickSignUp()}>
        Sign Up
      </Button>
    </div>
  )
}

export default Signup