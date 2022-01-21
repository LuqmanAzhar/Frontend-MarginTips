import React, {Component} from "react";

class CreatePlayerButton extends Component {
    async handleClick(){
        const data = {
            playerID: 0,
            userName: "string",
            salt: "string",
            hash: "string"   
        };
        const request = new Request("https://localhost:5001/players", {
            method: "POST",
            mode: "cors",
            headers: new Headers({
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        })

        console.log(request.header)

        await fetch(request)
    }

    render(){
        return <button onClick={() => this.handleClick()}>Create Player</button>
    }
}

export default CreatePlayerButton