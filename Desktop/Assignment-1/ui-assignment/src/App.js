import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Benefits of Using React</h1>
        <p>1. Component Based Architecture</p>
        <p>2. Virtual DOM for Effective Updates</p>
        <p>3. Rich Ecosyatem and Community</p>
        <p>4. Cross Platform Development</p>
        <p>5. Strong Community Support</p>
      </header>

      <button>Get Started</button>
    </div>
  );
}

export default App;
