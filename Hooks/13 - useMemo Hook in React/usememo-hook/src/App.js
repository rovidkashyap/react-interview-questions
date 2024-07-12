import './App.css';
import ExpensiveCalculationComponent from './UseMemo Hook/ExpensiveCalculationComponent';
import ParentComponent from './UseMemo Hook/ParentComponent';

function App() {
  return (
    <div>
        <ParentComponent />
        <ExpensiveCalculationComponent />
    </div>
  );
}

export default App;
