import Footer from "../../components/footer/Footer"
import Nav from "../../components/Navigation-Bar/Nav"
import CharacterHeader from "../../components/CharacterCreation/CharacterHeader"
import ChPicEquip from "../../components/CharacterCreation/ChPicEquip"
function CharacterCreator(){
    return (
    <>
    <Nav />
    <CharacterHeader />
    <ChPicEquip />
    <Footer />
    </>
    )
}
export default CharacterCreator