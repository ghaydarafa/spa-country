import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <LandingPage />

      {/* Search bar & country list */}
      <div id="main">
        <Main/>
      </div>
    </div>
  );
}

export default App;
