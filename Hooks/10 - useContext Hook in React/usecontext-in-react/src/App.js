import './App.css';
import { ThemeProvider } from './Themes/ThemeContext';
import ThemeToggleButton from './Themes/ThemeToggleButton';

function App() {
  return (
    <ThemeProvider>
        <ThemeToggleButton />
    </ThemeProvider>
  );
}

export default App;
