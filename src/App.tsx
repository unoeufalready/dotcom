import React from "react";
import "./App.css";

type CapProps = {
  letter: string;
  color: string;
};

function Cap({ letter, color }: CapProps) {
  return <span style={{ color }}>{letter}</span>;
}

function Space() {
  return <span>&nbsp;</span>;
}

function App() {
  const header = [
    ["U", "goldenrod"],
    ["N", "maroon"],
    [],
    ["O", "blue"],
    ["E", "green"],
    ["U", "blue"],
    ["F", "maroon"],
    [],
    ["A", "maroon"],
    ["L", "green"],
    ["R", "purple"],
    ["E", "blue"],
    ["A", "green"],
    ["D", "salmon"],
    ["Y", "black"]
  ].map((tup: Array<string>, i: number) => {
    if (tup.length) {
      return <Cap key={i} letter={tup[0]} color={tup[1]} />;
    }
    return <Space key={i} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        {header}
        <img src="/logo.png" className="App-logo" alt="logo" />
        <p>
          Welcome! We are serious app developers and we're here for{" "}
          <em>YOU!</em>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React or how to make your own apps etc.
        </a>
      </header>
    </div>
  );
}

export default App;
