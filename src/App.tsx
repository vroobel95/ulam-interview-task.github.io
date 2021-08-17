import './App.scss';
import MainPage from './components/pages/MainPage';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <MainPage/>
    </div>
  );
}

export default App;
