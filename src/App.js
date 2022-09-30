import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';
import { useSelector } from "react-redux"

function App() {


  const color = useSelector((state) => state.color.value)

  return (
    <div className="App" style={{color: color}} >
      <h1>🟣 Learning Redux </h1>

      <Login />
      <Profile />
      <ChangeColor />
    </div>
  );
}

export default App;
