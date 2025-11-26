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
        {/*<img src="https://placehold.co/600x400" alt="simple armor drawing" width="200px"/>
        this as a background since I need to put armor class */}
        <div className="armor-val-box">
            <div></div>
            <input type="text" id="armor-value" placeholder="0"/>
            <span>AC</span>
        </div>
        </div>
            <ul>
                <li>Weapon <input type="text" id="weapon"  className="equipment" placeholder="Enter your Weapon or -"/></li>
                <li>Armor <input type="text" id="armor"  className="equipment" placeholder="Enter your Armor or -"/></li>
                <li>Shield <input type="text" id="shield"  className="equipment" placeholder="Enter your Shield or -"/></li>
                <li>Ammunition<input type="text" id="ammunition"  className="equipment" placeholder="Enter your Ammunition or -"/></li>
                {/* for time reason I will probably take out the selection for type out */}
               <li> Special Item Type

                    <select id="special-select" name="special" >
                    <option value="">--Choose your special item--</option>
                    <option value="Arcane Focus">Arcane Focus</option>
                    <option value="Druidic Focus">Druidic Focus</option>
                    <option value="Holy Symbol">Holy Symbol</option>
                    <option value="Other">Other</option>
                    </select>

                </li>
                <li>Special Item <input type="text" id="special"  className="equipment" placeholder="Enter your special item or -"/></li>
            </ul>

        </div>

    </section>

        </>
    )
}
export default ChPicEquip