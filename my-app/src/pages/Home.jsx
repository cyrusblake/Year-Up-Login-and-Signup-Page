import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/NavBar.css'
import yearupyLogo from '../assets/yearupylogo.webp'
// import NavBar from '../components/NavBar';

function Home() {

    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    // const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081')
        .then((res) => {
            if(res.data.Status === "Success"){
                setAuth(true)
                setEmail(res.data.email)
            } else {
                setAuth(false);
                setMessage(res.data.Error)
                
            }
            // console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [])

    const handleDelete = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            location.reload(true);
            alert("You have been loged out!")
        }).catch(err => console.log(err));
    }

    return(
          <>    
                {
                auth ?
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
                        <p className='logout' onClick={handleDelete}>Logout</p>
                        <div>
                            <Link to="/Home">
                                <img className="hyrimg" src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
                :
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
                        <p className=''> 
                            <Link className='h-link' to='/LogIn'>Login</Link>
                        </p>
                        <p className=''>
                            <Link className='h-link' to='/SignUp'>Signup</Link>
                        </p>
                        <div>
                            <Link to="/Home">
                                <img className="hyrimg" src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
                }
                <div className='b-div'> 
                    {/* <img className='mi'  src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/> */}
                    <img className='mi'  src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/>
                </div>
                
        </>
    )
} export default Home