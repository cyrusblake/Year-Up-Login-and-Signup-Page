import react from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';
import yearupyLogo from '../assets/yearupylogo.webp'
// import yearupLeft from '../assets/yearupLeft.png'



function NavBar() {
    return(
        <>
            <div className="navbar">
                <div className="navbar_left">
                    <div>
                        <Link to="/Home">
                            <img className="yimage" src={yearupyLogo} alt=""/>
                        </Link>
                    </div>
                    <div className="lp">
                        <p>Internships</p>
                        <p>Training</p>
                        <p>About</p>
                        <p>
                            <Link className='h-link' to='/Home'>
                                Home
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="navbar_right">
                    <div>
                        <Link to="/Home">
                            <img className="yrimg" src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/>
                        </Link> 
                    </div>
                </div>

            </div>
        </>
    )
} export default NavBar