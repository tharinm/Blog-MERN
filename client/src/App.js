import './App.css';
//import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Write/> */}
      <Setting/>
    </div>
  );
}

export default App;
