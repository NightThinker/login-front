import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const history = useHistory()

  const onClickLogin = () => {
    history.push('/')
  }

  return (
    <div className='content'>
      <h1>Sign Up</h1>
      <form className='form' noValidate autoComplete="off">
        <TextField inputRef={emailRef} id="outlined-basic" label="Email" variant="outlined" />
        <TextField inputRef={passwordRef} id="outlined-basic" label="Password" variant="outlined" />
      </form>
      <Button className='btn-signup' variant="contained" color="primary" onClick={() => onClickLogin()}>
        Login
      </Button>
    </div>
  )
}

export default Login