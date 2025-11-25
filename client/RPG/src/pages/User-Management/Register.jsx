import Nav from "../../components/Navigation-Bar/Nav"
import Footer from "../../components/footer/Footer"

import "./User-Management.css"
function Register(){
    return (
    <>
    <Nav />
        <h1>Create Account</h1>

    <section className="standard-window">
    <form>
        <div>
        <label for="user">Choose your Username</label><br/>
        <input name="user" id="user" type="text" placeholder="enter your username" required></input>
        </div>

        <div>
        <label for="user-pass">Enter a Password</label><br/>
        <input name="user-pass" id="user-pass" type="password" required></input>
        </div>

         <div>
        <label for="confirm-pass">Confirm Password</label><br/>
        <input name="confirm-pass" id="confirm-pass" type="password" required></input>
        </div>
        
        <button type="button" id= "send">Send</button>
        {/*Maybe pop up a salted pass or jwt that they need to use for login and be on session until window closed */}
    </form>
    </section>
    <Footer />
    </>
    )
}
export default Register