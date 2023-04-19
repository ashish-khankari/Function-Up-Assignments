import {Buttons} from './components/button'
import {Benefits} from './components/benefits'
import {Logo} from './components/logo'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Logo/>
        <Benefits/>
        <Buttons/>

      </header>
    </div>
  );
}

export default App;
