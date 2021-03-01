import './App.css';
import Header from './components/Header/Header';
import Club from './components/Club/Club';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
    <div className="App">
      <Header></Header>
      <Club></Club>
    </div>
  );
}

export default App;
