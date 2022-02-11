import logo from './logo.svg';
import './App.css';
import CreatePlayerButton from './createPlayer';
import WeeksGames from './weeksGames';
import SportsTeam from './sportsTeam';
import SportsGame from './sportsGame';
import SignInButton from './SignIn';

function App() {
  const test = "test team string";
  const teamData = {"id":1,"name":"Adelaide","abbrev":"ADE","colour":"#002b5c","secondaryColour":"#e21937","textColour":"#ffd200"};
  const gameData = {"id":4396,"year":2020,"round":1,"roundname":"Round 1","hteamid":14,"ateamid":3,"agoals":12,"hgoals":16,"abehinds":9,"hbehinds":9,"localtime":"2020-03-19 19:40:00","tz":"+11:00","hTeam":{"id":14,"name":"Richmond","abbrev":"RIC","colour":"#ffd200","secondaryColour":"#000000","textColour":"#000000"},"aTeam":{"id":3,"name":"Carlton","abbrev":"CAR","colour":"#031a29","secondaryColour":"#031a29","textColour":"#ffffff"}}

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SignInButton></SignInButton>
        <WeeksGames></WeeksGames>
        <CreatePlayerButton></CreatePlayerButton>
        <SportsTeam teamData={teamData}></SportsTeam>
        <SportsGame gameData={gameData}></SportsGame>

        
      </header>
    </div>
    
  );
}

export default App;
