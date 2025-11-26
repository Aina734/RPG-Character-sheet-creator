import "./Proficiencies.css"
function Proficiencies() {
return (
    <>
    <section className="proficiencies">

        <div>
            <label for="initiative" className="prof-labels">Initiative</label>
            <input type="text" name="initiative" id="initiative"  className="proficiencies" placeholder="0"/>
        </div>
        <div>
            <label for="speed" className="prof-labels">Speed</label>
            <input type="text" name="speed" id="speed"  className="proficiencies" placeholder="0"/>
        </div>
        <div>
            <label for="pr-bonus" className="prof-labels">Proficiency Bonus</label>
            <input type="text" name="pr-bonus" id="pr-bonus"  className="proficiencies" placeholder="0"/>
        </div>
        <div>
            <label for="insp-bonus" className="prof-labels">Inspiration Bonus</label>
            <input type="text" name="insp-bonus" id="insp-bonus"  className="proficiencies" placeholder="0"/>
        </div>

    </section>
    </>
)
}

export default Proficiencies