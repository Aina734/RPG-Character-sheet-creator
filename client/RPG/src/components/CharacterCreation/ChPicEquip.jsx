import "./ChPicEquip.css"

function ChPicEquip(){
    return(
        <>
        <section className="picture-equipment">

        <div className="ch-profile-pic">
            <img src="https://placehold.co/600x400" alt="Character profile picture"/>
        </div>
        <div className="ch-equipment">
            {/* in the future maybe add a checker to define if the weapon is:
            ranged or melee and if it ocupies both hands */}
        <div className="armor-pic">
        <img src="https://placehold.co/600x400" alt="Character profile picture" width="200px"/>
        </div>
            <ul>
                <li>Weapon <span id="weapon"> Weapon or - </span></li>
                <li>Armor <span id="armor"> Armor or - </span></li>
                <li>Shield <span id="shield">Shield or - </span></li>
                <li>Ammunition <span id="ammunition"> Ammunition or - </span></li>
                {/* for time reason I will probably take out the selection for type out */}
               <li> Special Type

                    <select id="special-select" name="special" >

                    <option value="">--Choose your special item--</option>
                    <option value="Arcane Focus">Arcane Focus</option>
                    <option value="Druidic Focus">Druidic Focus</option>
                    <option value="Holy Symbol">Holy Symbol</option>
                    <option value="Other">Other</option>
                    </select>
                </li>
                <li>Special Item <span id="special"> Special or - </span></li>
            </ul>

        </div>

    </section>

        </>
    )
}
export default ChPicEquip