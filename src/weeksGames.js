import React, { Component, useState } from 'react';
import SportsGame from './sportsGame';
import './weeksGames.css'


const WeeksGames2 = () => {

    const [games, setGames] = useState();
    const [isLoaded, setIsLoaded] = useState();

    return (
        <>
        {isLoaded ? (<ol className='games'>
            {games.map(game => ( 
                <SportsGame gameData={game} key={game.id} className='sportsGame' />
                ))}
                </ol>) : 
            

                 <ol>fail</ol>
            }
            </>
    )
}

class WeeksGames extends Component {
    constructor(props){
        super(props);
        this.state = {
            games: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch("https://localhost:5001/games/round/1",
        {
            method: "GET"
        }) //TODO: should be the appropriate round of the week
            .then(res => res.json())
            .then((result) => { //TODO: may need to change to result body might change according to the the web api
                this.setState(
                    {
                        isLoaded: true,
                        games: result 
                    }
                )
            })
            .catch(error => console.error("An Error occured" + error))
    }

    render(){
        const {games, isLoaded} = this.state;



        if (isLoaded){
            return (
                <GamesList>
                    {games}
                </GamesList>
            )
        }
        else {
            return <ol>fail</ol>
        }
    }
}

// This is very type unsafe
const GamesList = ({children}) => {
    return (
        <div className='gamesList'>
            {children.map(game => (
                <SportsGame gameData={game} key={game.id} />
            ))}
        </div>
    )
}

export default WeeksGames