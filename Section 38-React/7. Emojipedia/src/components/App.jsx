import React from "react";
import Entries from "./Entries";
import Emojipedia from "../emojipedia";

function createCard(args) {
  return (
    <Entries
      key={args.id}
      emoji={args.emoji}
      name={args.name}
      meaning={args.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {Emojipedia.map(createCard)}
    </div>
  );
}

export default App;
