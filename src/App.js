import './App.css';
import { Invitation } from './components/Invitation';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Invitation 
        invitation = {"BirthDay Party Invitation"}
        email = {"jaGdish@gmail.com"}
        name = {"jaGdish "}
        reason = {"birthday party"}
        friendsNames = {"Ritu , Saurabh , Kartik"}
        address = {"Green field Avenue"}
        nameOfManager = {"JaGdish"}
        />
      </header>
    </div>
  );
}

export default App;
