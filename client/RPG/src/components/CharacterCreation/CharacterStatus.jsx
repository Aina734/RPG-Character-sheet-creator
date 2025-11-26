import "./CharacterStatus.css"
function CharacterStatus() {
    return (
        <>
        {/*This one is missing part of the status because of time*/}
         <section className="status">

        <div>
            <label for="str" className="stat-labels">Strength</label>
            <input type="text" name="str" id="str"  className="status" placeholder="0"/>
            <span>+ <input type="text" name="str-bonus" id="str-bonus"  className="stat-bonus" placeholder="0"/></span>
        </div>
        <div>
            <label for="dex" className="stat-labels">Dexterity</label>
            <input type="text" name="dex" id="dex"  className="status" placeholder="0"/>
            <span>+ <input type="text" name="dex-bonus" id="dex-bonus"  className="stat-bonus" placeholder="0"/></span>
        </div>
        <div>
            <label for="const" className="stat-labels">Constitution</label>
            <input type="text" name="const" id="const"  className="status" placeholder="0"/>
            <span>+ <input type="text" name="const-bonus" id="const-bonus"  className="stat-bonus" placeholder="0"/></span>
        </div>
        <div>
            <label for="int" className="stat-labels">Inteligence</label>
            <input type="text" name="int" id="int"  className="status" placeholder="0"/>
            <span>+ <input type="text" name="int-bonus" id="int-bonus"  className="stat-bonus" placeholder="0"/></span>
        </div>
        <div>
            <label for="wis" className="stat-labels">Wisdom</label>
            <input type="text" name="wis" id="wis"  className="status" placeholder="0"/>
            <span>+ <input type="text" name="wis-bonus" id="wis-bonus"  className="stat-bonus" placeholder="0"/></span>
        </div>
        <div>
            <label for="cha" className="stat-labels">Charisma</label>
            <input type="text" name="cha" id="cha"  className="status" placeholder="0"/>
            <span>+ <input type="text" name="cha-bonus" id="cha-bonus"  className="stat-bonus" placeholder="0"/></span>
        </div>
        

    </section>

        </>
    )
}

export default CharacterStatus