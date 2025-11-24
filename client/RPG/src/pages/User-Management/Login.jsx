import Nav from "../../components/Navigation-Bar/Nav"
import Footer from "../../components/footer/Footer"

import { Link } from "react-router"
import "./User-Management.css"
function Login(){
    return (
    <>
    <Nav />
    <h1>User Login/Register</h1>
    
    <section className="standard-window">
    <form>
        <div>
        <input type="text" placeholder="enter username" required></input>
        </div>
        <div>
        <input type="password" placeholder="Password" required></input>
        </div>
        <Link to="/dashboard"><button type="button">Login</button></Link>
        {/*Forgot password feature link will be go here */}
    </form>
    <Link to="/registration"><button>Create Account</button></Link>
    </section>

    <Footer />

    </>
    )
}
export default Login