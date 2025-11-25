import Nav from "../../components/Navigation-Bar/Nav"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router"

import "./Dashboard.css"


function Dashboard(){
    return (
    <>
    <Nav />
    <section className="username-bar">
        <h1>Here the name of the user will be displayed</h1>
    </section>

    <div className="dashboard-container">

    <section className="dashboard-menu">

        <h3>Welcome!</h3>
        <ul className="dashboard-options">
            {/* On profile the username is show, Date when they Joined, upload user picture */}
            <Link to=""><li>Profile</li></Link> 
            {/* On Character a component with a list of cards that open selected character */}
            <Link to=""><li>Characters</li></Link>
            <Link to=""><li>Log Out</li></Link>
        </ul>

    </section>
    </div>
    {/*Here we will add the selected component when we have also the maps done, they will be shown as card of options*/}
    <Footer />
    </>
    )
}
export default Dashboard