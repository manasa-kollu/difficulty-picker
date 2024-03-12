import s from "./style.module.css";
import DisplayDifficulty from "./components/DisplayDifficulty/DisplayDifficulty";
import MenuList from "./components/MenuList/MenuList";
import { useState } from "react";

function App() {
  const [currentDifficulty, setCurrentDiffficulty] = useState("Insane");

  const ChangeDifficulty = (difficulty) => {
    setCurrentDiffficulty(difficulty);
  };

  return (
    <div>
      <h1>Select your React Difficulty Level</h1>
      <div className={s.workspace}>
        <MenuList
          onItemClick={ChangeDifficulty}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}

export default App;
