import Character from "./props-lesson/Character"

function ShowCharacters(){
    return(
        <>
            <Character character_name="Spider-Man" character_element="Web" character_power_level="7000" />
            {/* You put the value in as such, <function_name variable_name="value" /> */}
            {/* You can also add more than ONE character data to it */}
            <Character character_name="Superman" character_element="Fly" character_power_level="99999" />

            {/* With these two example, add Goku with an element of Saiyan and a power level "It's over 9000!" */}
            <Character character_name="Goku" character_element="Saiyan" character_power_level="It's over 9000!" />
        </>
    )
}

export default ShowCharacters