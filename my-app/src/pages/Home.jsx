import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        }).catch(err => console.log(err));
    }





    return(
          <>
            <div>
                {
                    auth ?
                    <div>
                        <h3>You are Atuthorized --- {email}</h3>
                        <button onClick={handleDelete}>Logout</button>
                    </div>
                    :
                    <div>
                        <h3>{message}</h3>
                        <h3>Login Now</h3>
                        <Link to="/LogIn">LogIn</Link>
                    </div>
                }
            </div>
        </>
    )
} export default Home