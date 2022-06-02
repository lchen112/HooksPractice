import "./App.css";
import { useFetch } from "./useFetch";
import { createContext, useCallback, useState } from "react";
import Child from "./Child";
import FactBox from "./FactBox";
import { useKeyPress } from "./useKeyPress";

export const DataContext = createContext();

function App() {
  const [count, incrementCount] = useState(0);
  const keyPressed = useKeyPress();
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
          <div
            style={{
              textAlign: "center",
              margin: "16px",
              paddingTop: "16px",
              width: "100%",
              height: "100px",
              border: "1px solid",
              borderRadius: "4px",
            }}
          >
            Key Pressed:
            <p style={{ fontWeight: "bold", color: "yellow" }}>
              {keyPressed && `${keyPressed}`}
            </p>
          </div>
        </header>
      </DataContext.Provider>
    </div>
  );
}

export default App;
