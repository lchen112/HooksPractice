import "./App.css";
import { useFetch } from "./useFetch";
import { createContext, useCallback, useState } from "react";
import Child from "./Child";
import FactBox from "./FactBox";

export const DataContext = createContext();

function App() {
  const [count, incrementCount] = useState(0);
  const data = useFetch(
    "https://uselessfacts.jsph.pl/random.json?language=en",
    count
  );

  const incrementer = useCallback(() => incrementCount((c) => c + 1), []);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <header className="App-header">
          <h1>Random Fact Generator</h1>
          <Child incrementCount={incrementer} />
          <FactBox />
        </header>
      </DataContext.Provider>
    </div>
  );
}

export default App;
