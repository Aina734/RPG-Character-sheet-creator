import "./CharacterHeader.css"
function CharacterHeader(){
    return(
        <>
    <section className="character-header">

     <section className="character-name">
        <h1>Character Name</h1>
    </section>
    <ul className="ch-basic-info">
        <li>Class:<span id="class">your Class</span></li>
        <li>Race:<span id="race">your Race</span></li>
        <li>Alignment:<span id="alignment">your Alignment</span></li>
        <li>Exp:<span id="experience">your Experience</span></li>
        <li>Lv:<span id="level">your Level</span></li>
    </ul>
    {/* add a + button to add more characteristics */}
    </section>
        </>
    )
}
export default CharacterHeader