import Button from "../../components/Button/Button"
import { Link, Navigate } from "react-router-dom"

const Main = ({logOut}) => {

  const onClick = async (e) =>{
    e.preventDefault()
    logOut()
    return <><Navigate to='/' replace/> </>
  }

  return (
    <>
      <h1>Succefully sign up / login</h1>
      <form action="" onSubmit={onClick}>
      <Button text={'Log Out'} type={'submit'}/>
      </form>
    </>
  )
}

export default Main
