import BasketballPlayer from "./BasketballPlayer"

//                       You are doing both destructuring and setting default values for them all :)
function BasketballTeam({team_name = "Unnamed Team", team_star_player = "Unnamed Star Player", team_manager = "Unnamed Manager", players = ["Unnamed Players"]}){ 
    // You can use destructuring to do props
    return(
        // Using <div> could also act as the parent element, replacing empty tags
        <div>
            <h2>Team Name : {team_name}</h2>
            <h3>Star Player : {team_star_player}</h3>
            <p>Manager : {team_manager}</p>
            <h3>Players : </h3>
            {/* .map() is for you to iterate through every element in the array */}
            {players.map((player, index) => (
                <BasketballPlayer key={index} player_name={player} />
            ))}
            {/* In the instance above, we iterate through players */}
            {/* Reference from ShowBasketballTeam.jsx to see players, it should be in the form of an array */}
            {/* Because it is an array, we use .map() to parse through each element */}
            {/* Each item in the array will be used as 'player' in the .map() function */}
            {/* We also include index as the key because we are displaying multiple BasketballPlayer components */}
            {/* Then, we use 'player' to assign to BasketballPlayer's player_name prop, so it can display player_name in the BasketballPlayer component */}
            {/* Basically acting like a ForEach for arrays at this point */}
        </div>
    )
}

export default BasketballTeam