//all the links to home page an UI Should be manage by Nav Component
import Nav from "../components/Navigation-Bar/Nav"
import Banner from "../components/Banner/Banner"
import UserExample from "../components/UserExample/UserExample"
import Footer from "../components/footer/Footer"

function Home() {

  return (
    <>
    <Nav />
    <Banner />
    <UserExample />
    <Footer />
    </>
  )
}

export default Home
