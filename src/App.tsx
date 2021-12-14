import './App.scss';
import MainView from './components/MainView';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <MainView/>
    </div>
  );
}

export default App;
