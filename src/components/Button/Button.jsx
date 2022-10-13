import './Button.css'
import GoogleIcon from '@mui/icons-material/Google';

const Button = ({text,type,sucClass,icons}) => {
  return (
    <>
        {type ? <button className={`btn ${sucClass ? sucClass: ''}`} type={type}>{icons ? <GoogleIcon fontSize='large'/>: ''}{text}</button>:
        <button className={`btn ${sucClass ? sucClass: ''}`}>{icons ? <GoogleIcon fontSize='large'/>: ''}{text}</button>}
    </>
  )
}

export default Button
