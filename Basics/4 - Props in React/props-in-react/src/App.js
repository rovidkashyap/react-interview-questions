import './App.css';
import Greeting from './Greeting';
import GreetingClass from './GreetingClass';

function App() {
  return (
    <div>
        <Greeting name="Rovid" />
        <Greeting name="Alice" />
        <Greeting name="Bob" />

        <GreetingClass name="Rovid" />
        <GreetingClass name="Alice" />
    </div>
  );
}

export default App;
