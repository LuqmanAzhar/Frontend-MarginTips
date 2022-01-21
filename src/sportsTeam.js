import React, { Component } from 'react';
import './Team.css'

class TeamAbbrev extends Component {
    render() {
        return <div className="team_abbrev" style={
            {
                backgroundColor: this.props.backgroundColor,
                borderColor: this.props.borderColor,
                color: this.props.color
            }
        }>
        {this.props.teamAbbrev}
        </div>;
    }
};

class TeamName extends Component {
    render() {
        return <div className='team_name'>{this.props.teamName}</div>

    }
};

class SportsTeam extends Component {
    render() {
        return <div className='team' style={
            {
                backgroundColor: this.props.bGColour
            }
        } 
            onClick={this.props.onclick}
        >
        <TeamAbbrev 
            backgroundColor={this.props.teamData.colour} 
            borderColor={this.props.teamData.secondaryColour} 
            color={this.props.teamData.textColour} 
            teamAbbrev={this.props.teamData.abbrev}/>
        <TeamName
            teamName={this.props.teamData.name}/>
        </div>;
    }
};

export default SportsTeam;