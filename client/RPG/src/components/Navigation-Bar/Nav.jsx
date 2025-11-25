import { Link } from "react-router"
import "./Nav.css"
function Nav () {
return (
    <>
<header>
    <nav>
        <ul className="navigation">
            <Link to="/"><li>Home</li></Link>
            <Link to="/create-character"><li>Create Character</li></Link>
            <Link to="/news"><li>News</li></Link>
            <Link to="/login"><li>Login</li></Link>
        </ul>
    </nav>
</header>

    </>
)
}

export default Nav