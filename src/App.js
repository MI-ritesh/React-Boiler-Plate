import './App.css';
import { MyProvider } from './Context/MyContext';
import DemoCounter from './Pages/DemoCounter';
import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <MyProvider>
      <div className="App">
        <Products/>
      </div>
    </MyProvider>
  );
}

export default App;
