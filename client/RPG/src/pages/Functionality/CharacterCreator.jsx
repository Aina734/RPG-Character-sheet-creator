import Footer from "../../components/footer/Footer"
import Nav from "../../components/Navigation-Bar/Nav"
import CharacterHeader from "../../components/CharacterCreation/CharacterHeader"
import ChPicEquip from "../../components/CharacterCreation/ChPicEquip"
import Proficiencies from "../../components/CharacterCreation/Proficiencies"
import CharacterStatus from "../../components/CharacterCreation/CharacterStatus"
function CharacterCreator(){
    return (
    <>
    <Nav />
    <CharacterHeader />
    <ChPicEquip />
    <Proficiencies />
    <CharacterStatus />
    <Footer />
    </>
    )
}
export default CharacterCreator