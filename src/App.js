import './App.css';
import { MyProvider } from './Context/MyContext';
import DemoCounter from './Pages/DemoCounter';
import Home from './Pages/Home';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Home/>
        <DemoCounter/>
      </div>
    </MyProvider>
  );
}

export default App;
