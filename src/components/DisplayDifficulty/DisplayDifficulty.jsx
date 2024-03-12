import React from "react";
import s from "./style.module.css";

export default function DisplayDifficulty(props) {
  return (
    <div className={s.container}>
      {props.difficulty
        ? `DisplayDifficulty set to ${props.difficulty}`
        : "No Difficulty set"}
    </div>
  );
}
