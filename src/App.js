import logo from "./logo.svg";
import "./App.css";
import Nava from "./Comp/Nava";
import Slides from "./Slides/Slides";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <Nava/>
        
        <Slides/>
      </div>
    </>
  );
}

export default App;
