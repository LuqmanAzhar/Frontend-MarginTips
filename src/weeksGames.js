import React, { Component } from 'react';
import SportsGame from './sportsGame';
import './weeksGames.css'


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
            console.log("success week")
            console.log(games)
            return <ol className='games'>
            {games.map(game =>( 
                <SportsGame gameData={game} key={game.id}></SportsGame>
            ))}
            </ol>
        }
        else {
            return <ol>fail</ol>
        }
    }
}

export default WeeksGames