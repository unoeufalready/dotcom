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
      <header className="App-header">{header}</header>
      <img src="/logo.png" className="App-logo" alt="logo" />
      <p>
        Welcome! We are serious app developers and we're here for <em>YOU!</em>
      </p>
      <p>
        We are trying our darnedest to get an app out there. It ain't much but
        it's the best we can do on such short notice! Hopefully soon we'll have
        a live link to share with the <abbr title="World Wide Web">www.</abbr>
      </p>
    </div>
  );
}

export default App;
