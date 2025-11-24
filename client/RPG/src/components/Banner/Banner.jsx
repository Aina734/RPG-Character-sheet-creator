import "./Banner.css"
import HotNews from "./HotNews"
function Banner(){
    return(
        <>
        <h1>Welcome to RPG Character Creator</h1>

        <div className="banner-order">
        <section className="banner-section">

            <h2>Let your Creativity run Wild!</h2>

            <p>Here you will be able to create your character for your next campaign!</p>
            <p>The Character creator is based on DnD Character Sheet</p>
            <p>Keep all your characters organized and in reach in one place</p>
        
        </section>

        <section className="banner-section">
            <HotNews />
        </section>
        </div>
        </>
    )
}
export default Banner