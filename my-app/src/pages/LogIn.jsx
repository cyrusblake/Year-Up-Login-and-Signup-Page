import React, {useState} from 'react'
import '../styles/LogIn.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'




function LogIn(){


    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/LogIn', values)
        .then((res) => {
            if(res.data.Status === "Success"){
                navigate('/');
            } else {
                // alert(res.data.Error);
                alert("Userame and Password not matched");
            }
            // console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
        // .then(res => console.log(res))
        // .then(err => console.log(err));
    }

   


    return(
        <>  
            <div>

                <NavBar/>
            </div>
            <div className="popup" id="popup-1">
                 <div>
                 <img  src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/>
                </div>
                <div className="popup_content">
                   
                    <div className="pop_right">
                        <h1 className='ih1'>Log in to Contor</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='uu'>
                                <p>Email</p>
                                <input className="userI" placeholder='Enter Email'
                                onChange={e => setValues({...values, email: e.target.value})}/>
                            </div>
                            <div className='up'>
                                <p>Password</p>
                                <input className="userI" placeholder='Enter Password' 
                                onChange={e => setValues({...values, password: e.target.value})}/>
                            </div>
                            <button type="submit" className='lb'>Log In</button> 
                        </form>
                        <Link to='/SignUp' className="b-btn">Don't have an account? Sign Up</Link>
                    </div>
                   
                </div>
            </div>
        </>
    )
} export default LogIn