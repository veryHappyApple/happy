import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Posts />
    </div>
    </HashRouter>
  );
}

export default App;
