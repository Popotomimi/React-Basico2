import './App.css';
import Chanllenge from './components/Chanllenge';
import Events from './components/Events';
import Component from './components/FirstComponent' ;
import TemplateExpressions from './components/TemplateExpressions';
function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <Component/>
      <TemplateExpressions/>
      <Events/>
      <Chanllenge/>
    </div>
  );
}

export default App;
