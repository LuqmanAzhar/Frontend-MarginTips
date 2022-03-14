import React, { Component, createRef } from "react";
import SportsTeam from "./sportsTeam";
import "./Game.css"

class GameStatus extends Component {
    // Abstract this out because this logic is tied also tied to if you can click on the tipping
    render() {
        const gameTime = new Date(this.props.localtime);
        //TODO make this calculate when needed as opposed to at the start
        const threeHoursLater = gameTime.getTime() + 3*60*60*1000;
        
        if (gameTime < Date.now()) {
            return <div>Game Starting at {gameTime.toLocaleString()}</div>
        }
        if (threeHoursLater < Date.now()){
            return <div>Game is Live Tipping is locked</div>
        }
        else {
            //TODO create a fetch request for performance of tip possibly
            return <div>Score Relative to Others</div>
        }
    };
};

class TippingStatus extends Component {
    //TODO Fetch Tipping status of game 
    render(){
    return <input type="number" />
    };
}

//TODO consider merging all the above into one to easier manage props


// This Component SHould be Responsible for waiting for the tips to load
// and passing down the logic to 
class SportsGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            tip: {},
            HomeTipped: null,
        };

        this.tipInput = createRef();

        // bindings
        this.handleAwayClick = this.handleAwayClick.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.focusTipInput = this.focusTipInput.bind(this);
    }

    componentDidMount() {
        // fetch fetch tip and set state for the tip
    }

    focusTipInput() {
        this.tipInput.current.focus();
    }

    //TODO fix the colours into state and handle colours in css
    handleAwayClick() {
        this.setState({
           HomeTipped: false 
        });
        this.tipInput.focus();
        this.focusTipInput();
    }

    handleHomeClick() {
        this.setState({
           HomeTipped: true
        });
        this.focusTipInput();
    }

    //TODO When Input Onchange Triggers It will create/Update
    handleInputChange() {

    }

    render() {
        //Reminder not to use state variables when rendering because it may 
        const input = this.tipInput;

        return (
            <GameRow 
                left={ <SportsTeam winner={true} teamData={this.props.gameData.hTeam} onclick={this.handleAwayClick}/>} 
                right={<SportsTeam winner={false} teamData={this.props.gameData.aTeam} onclick={this.handleHomeClick}/>} 
                center={<div className="game_info">
                        <GameStatus />
                        <TippingStatus ref={input} />
                    </div>
                }
            />
        )
    }
};

const dark = '#000000';
const light = '#222222';
const extraLight = '#EEEEEE';

const GameRow = ({left, right, center}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', border: `3px solid ${light}`, borderRadius: 5, padding: 15, margin: 10, color: dark, backgroundColor: extraLight}}>
            <div style={{flex: 0.5}}>
                {left}
            </div>
            <div style={{flex: 1 }}>
                {center}
            </div>
            <div style={{flex: 0.5}}>
                {right}
            </div>
        </div>
    )
}

export default SportsGame;