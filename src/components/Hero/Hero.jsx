import { Link } from "react-router-dom"
import Button from "../Button/Button"
import FinalProImg from '../../imgs/Che.PNG'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <section className="hero">
            <div className="hero-content">
                <div>
                    <h1>Third Brain</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, ut optio. Porro, culpa atque hic, obcaecati quibusdam molestiae, sapiente quaerat laboriosam rerum pariatur voluptates voluptate. Nihil illo dicta sed numquam?</p>
                    <span>Sign up for free right now!</span>
                </div>
                <div>
                    <Link to='/signup'><Button text={'Sign Up'}/></Link>
                </div>
            </div>
            <div>
                <img src={FinalProImg} alt="Reponsive" className="heroImg" />
            </div>
      </section>
    </div>
  )
}

export default Hero
