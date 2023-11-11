import React, { useState } from "react";
import '../styles/SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../components/NavBar'

function SignUp() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // 'http://localhost:8081/SignUp'
        // 'https://yu-backend-fv2r.onrender.com/SignUp'
        axios.post('http://localhost:8081/SignUp', values)
        .then((res) => {
            if(res.data.Status === "Success"){
                navigate('/LogIn');
            } else {
                alert("Error");
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
            <div className="popup" id="popup-2">
                
                <div className="popup_content">
                   
                    <img  src={'https://www.yearup.org/themes/yearup/assets/img/yu-logo-copy.svg'} alt=""/>
                    
                    <h1 className='sh1'>Sign Up</h1>
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
                        <button type="submit" className='sb'>Sign Up</button>
                    </form>
                    <Link to='/LogIn' className="b-btn">Already have an account? Log in</Link>
                </div>
            </div>
          
        </>
    )
} export default SignUp