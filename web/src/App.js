import logo from "./logo.svg";
import "./App.css";

function App() {
  const birthdayData = new Date(1993, 7, 7);

  const today = new Date();

  const add_years = (dt, n) => {
    const tempDt = new Date(dt);
    return new Date(tempDt.setFullYear(tempDt.getFullYear() + n));
  };

  const differentInTime = (today - birthdayData) / (1000 * 3600 * 24) / 7;
  console.log(birthdayData);
  console.log(today);
  console.log(differentInTime);
  const lifeEndData = add_years(birthdayData, 100);
  console.log(lifeEndData);
  const lifespan = (lifeEndData - birthdayData) / (1000 * 3600 * 24) / 7;
  console.log(lifespan);

  const weeks = [];
  for (let i = 0; i < lifespan; i++) {
    weeks.push(
      <span
        className={
          "week" + ((i <= 1000
            ? " week--completed"
            : ""))
          }
        key={i}
      ></span>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="weeks-container">{weeks}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
