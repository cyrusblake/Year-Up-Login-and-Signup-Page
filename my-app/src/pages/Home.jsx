import react from 'react'
import '../styles/Home.css'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            <div>
                <div>
                    <NavBar/>
                </div>
                {
                    auth ?
                    <div>
                        <h3>You are Atuthorized --- {username}</h3>
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